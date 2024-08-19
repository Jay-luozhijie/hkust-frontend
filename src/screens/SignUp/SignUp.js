import React, { useState } from "react";
import InputField from './InputField';
import DropdownField from './DropdownField';
import '../../css/SignUp.scss';
import FileUploadField from './FileUploadField';
import * as XLSX from "xlsx";
import axios from "axios";

function SignUp() {
  const schoolOptions = [
    "科大学生", 
    "科大校友", 
    "其他"
  ];

  const createInitialMemberFields = () => [
    { label: "姓名", placeholder: "请填写", value: "" },
    { label: "电子邮件", placeholder: "请填写", value: "" },
    { label: "团队角色", placeholder: "请描述其在团队中的角色", value: "" },
    { label: "学校/单位", type: "dropdown", options: schoolOptions, placeholder: "请选择", value: "" },
    { label: "学院", placeholder: "请填写", value: "" },
    { label: "年级", placeholder: "请填写", value: "" },
    { label: "学号", placeholder: "请填写", value: "" },
  ];  

  const createInitialLeaderFields = () => [
    { label: "团队名称", placeholder: "请填写您的团队名称" },
    { label: "队长姓名", placeholder: "请填写队长的全名" },
    { label: "队长电子邮件地址", placeholder: "请提供队长常用的电子邮件地址" },
    { label: "队长微信号（选填）", placeholder: "请提供队长的微信号" },
    { label: "队长手机号（选填）", placeholder: "请填写队长的手机号" },
    { label: "学校/单位", type: "dropdown", options: schoolOptions, placeholder: "请选择", value: "" },
    { label: "学院", placeholder: "请填写" },
    { label: "年级", placeholder: "请填写" },
    { label: "学号", placeholder: "请填写" },
  ];

  const [otherInformation, setOtherInformation] = useState({
    motivation: "",
    expectation: ""
  });

  const handleOtherInfoChange = (field, value) => {
    setOtherInformation((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const [teamMembers, setTeamMembers] = useState([
    createInitialLeaderFields(), // 队长始终是第一个成员
    ...Array(5).fill(createInitialMemberFields()) // 初始设置为其他4个成员
  ]);

  const addMember = () => {
    setTeamMembers([...teamMembers, createInitialMemberFields()]);
  };

  const removeMember = (index) => {
    if (teamMembers.length > 6) { // 保证至少有一个队长和5个成员
      setTeamMembers(teamMembers.slice(0, index).concat(teamMembers.slice(index + 1)));
    }
  };  

  const groupFields = (fields) => {
    const grouped = [];
    for (let i = 0; i < fields.length; i += 2) {
      grouped.push(fields.slice(i, i + 2));
    }
    return grouped;
  };

  const handleFieldChange = (newValue, memberIndex, fieldIndex) => {
    setTeamMembers(teamMembers.map((member, idx) => {
      if (idx === memberIndex) {
        return member.map((field, fIdx) => {
          if (fIdx === fieldIndex) {
            return {...field, value: newValue};
          }
          return field;
        });
      }
      return member;
    }));
  };   

  const renderFields = (fields, memberIndex) => {
    return groupFields(fields).map((group, groupIndex) => (
      <div className="input-row" key={groupIndex}>
{group.map((field, fieldIndex) => (
  field.type === "dropdown" ? (
    <DropdownField
      key={`${memberIndex}-${fieldIndex}`}
      label={field.label}
      options={field.options}
      placeholder={field.placeholder}
      value={field.value}
      onChange={(newValue) => {
        console.log(`Dropdown changed - Member: ${memberIndex}, Field: ${groupIndex * 2 + fieldIndex}, New Value: ${newValue}`);
        handleFieldChange(newValue, memberIndex, groupIndex * 2 + fieldIndex);
      }} // 添加调试输出
    />
  ) : (
<InputField
key={fieldIndex}
  label={field.label}
  placeholder={field.placeholder}
  value={field.value}
  onChange={(e) => handleFieldChange(e.target.value, memberIndex, groupIndex * 2 + fieldIndex)}
/>

  )
))}

        {group.length === 1 && <div className="empty-space"></div>}
      </div>
    ));
  };
  
  const handleSubmit = async () => {
    const excelData = [];
    
    // 获取团队名称和队长姓名
    const teamName = teamMembers[0][0].value;
    const leaderName = teamMembers[0][1].value;

    teamMembers.forEach((member, memberIndex) => {
      const headerLabel = memberIndex === 0 ? "队长信息" : `团队成员 ${memberIndex}`;
      excelData.push({ "信息名称": headerLabel, "信息内容": "" });

      member.forEach((field) => {
        excelData.push({
          "信息名称": field.label,
          "信息内容": field.value
        });
      });

      excelData.push({ "信息名称": "", "信息内容": "" });
      excelData.push({ "信息名称": "", "信息内容": "" });
    });

    excelData.push({ "信息名称": "", "信息内容": "" });
    excelData.push({ "信息名称": "参赛动机", "信息内容": otherInformation.motivation });
    excelData.push({ "信息名称": "期望从大赛中学到的内容", "信息内容": otherInformation.expectation });

    const worksheet = XLSX.utils.json_to_sheet(excelData);
    const wscols = [{ wch: 20 }, { wch: 30 }];
    worksheet['!cols'] = wscols;

    const fillColors = { leader: { bgColor: { rgb: "FFFF00" } }, member: { bgColor: { rgb: "ADD8E6" } } };

    excelData.forEach((row, index) => {
      const cellAddressName = `A${index + 1}`;
      const cellAddressContent = `B${index + 1}`;
      const isLeader = row["信息名称"] === "队长信息";
      const fill = isLeader ? fillColors.leader : fillColors.member;

      worksheet[cellAddressName].s = { fill };
      worksheet[cellAddressContent].s = { fill };
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "报名信息");

    const fileName = `${teamName}_${leaderName}.xlsx`;
    
    // 将工作簿转换为二进制文件
    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], { type: "application/octet-stream" });

    // 创建FormData并添加文件
    const formData = new FormData();
    formData.append("file", blob, fileName);

    try {
      // 发送POST请求将文件上传到服务器
      const response = await axios.post("https://hkustquant.hk/api/upload", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });    
      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };

  return (
    <div className="sign-up-page">
      <div className="heading">
        港科宽图量化交易大赛报名表
      </div>
      <div className="attention">
        <div className="attention-content">注意事项</div>
        <div className="attention-content">1. 香港科技大学各专业本硕博学生，香港科技大学校友以及香港地区其他高校学生均可报名，欢迎跨专业组队</div>
        <div className="attention-content">2.每支参赛队伍人数不少于5人，其中香港科技大学学生的占比不低于50%</div>
        <div className="attention-content">3.您的个人信息仅会在港科宽图交易大赛中使用，港科宽图承诺保护您的隐私信息</div>
      </div>
      <div className="team-information">
        <div className="team-information-heading sub-heading">团队基本信息</div>
        <div className="team-information-details first">
        {renderFields(teamMembers[0], 0)}
          <div className="input-row">
            <FileUploadField 
              label="队长简历" 
              placeholder="请上传附件提交队长简历" 
            />
          </div>
        </div>
        <div className="team-members-information-heading sub-heading">
          团队成员信息（请确保团队中至少有50%以上的香港科技大学成员）
        </div>
        {teamMembers.slice(1).map((fields, memberIndex) => (
  <React.Fragment key={memberIndex + 1}>
    <div className="team-members-information-heading3">
      团队成员{memberIndex + 1}: 
    </div>
    <div className="team-information-details">
      {renderFields(fields, memberIndex + 1)} 
      {memberIndex + 1 > 5 && (  // 保持原有逻辑，确保只有第六个及之后的成员才显示删除按钮
        <button className="remove-member-button" onClick={() => removeMember(memberIndex + 1)}>
          删除成员
        </button>
      )}
      <hr className="member-separator" />
      {memberIndex + 1 === teamMembers.length - 1 && (
        <div className="middle-button-container">
          <button className="add-member-button" onClick={addMember}>
            添加团队成员
          </button>
        </div>
      )}
    </div>
  </React.Fragment>
))}

        <div className="other-information">
          <div className="sub-heading">其他信息</div>
          <div className="other-information-block">
            <div className="motivation heading-3">参赛动机</div>
            <textarea
              className="other-information-input"
              placeholder="请简述您参加这次大赛的原因和期望获得的经验"
              value={otherInformation.motivation}
              onChange={(e) => handleOtherInfoChange("motivation", e.target.value)}
            />
          </div>
          <div className="other-information-block">
            <div className="motivation heading-3">期望从大赛中学到的内容</div>
            <textarea
              className="other-information-input"
              placeholder="请描述您希望通过此次大赛学习或提高的具体技能"
              value={otherInformation.expectation}
              onChange={(e) => handleOtherInfoChange("expectation", e.target.value)}
            />
          </div>
        </div>
        <div className="middle-button-container">
        <button className="submit-button" onClick={handleSubmit}>
          提交报名
        </button>
          <div className="attention">注意：提交报名后信息不可更改</div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
