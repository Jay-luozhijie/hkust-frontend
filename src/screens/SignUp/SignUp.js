import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from './InputField';
import DropdownField from './DropdownField';
import '../../css/SignUp.scss';
import FileUploadField from './FileUploadField';
import * as XLSX from "xlsx";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();

  const schoolOptions = [
    "科大学生", 
    "科大校友", 
    "其他"
  ];

  function createInitialMemberFields(schoolType = "") {
    const commonFields = [
      { label: "姓名", placeholder: "请填写", value: "" },
      { label: "电子邮件", placeholder: "请填写", value: "" },
      { label: "团队角色", placeholder: "请描述其在团队中的角色", value: "" },
      { label: "学校/单位", type: "dropdown", options: schoolOptions, placeholder: "请选择", value: schoolType }
    ];
  
    if (schoolType === "科大学生" || schoolType === "科大校友") {
      return commonFields.concat([
        { label: "学院", placeholder: "请填写", value: "" },
        { label: "年级", placeholder: "请填写", value: "" },
        { label: "学号", placeholder: "请填写", value: "" }
      ]);
    } else if (schoolType === "其他") {
      return commonFields.concat([
        { label: "单位信息", placeholder: "大学名称-院系名称 / 工作单位名称", value: "" }
      ]);
    }
  
    return commonFields;
  }

  function createInitialLeaderFields(schoolType = "") {
    const commonFields = [
      { label: "团队名称", placeholder: "请填写您的团队名称", value: "" },
      { label: "队长姓名", placeholder: "请填写队长的全名", value: "" },
      { label: "队长电子邮件地址", placeholder: "请提供队长常用的电子邮件地址", value: "" },
      { label: "队长微信号（选填）", placeholder: "请提供队长的微信号", value: "" },
      { label: "队长手机号（选填）", placeholder: "请填写队长的手机号", value: "" },
      { label: "学校/单位", type: "dropdown", options: schoolOptions, placeholder: "请选择", value: schoolType }
    ];
  
    if (schoolType === "科大学生" || schoolType === "科大校友") {
      return commonFields.concat([
        { label: "学院", placeholder: "请填写", value: "" },
        { label: "年级", placeholder: "请填写", value: "" },
        { label: "学号", placeholder: "请填写", value: "" }
      ]);
    } else if (schoolType === "其他") {
      return commonFields.concat([
        { label: "单位信息", placeholder: "大学名称-院系名称 / 工作单位名称", value: "" }
      ]);
    }
  
    return commonFields;
  }  

  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(5);
  // 添加一个状态来显示是否超出成员限制的警告
  const [showMemberLimitWarning, setShowMemberLimitWarning] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  useEffect(() => {
    console.log('selectedFile:', selectedFile);
  }, [selectedFile]);
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
    ...Array(2).fill(createInitialMemberFields()) // 初始设置为其他2个成员
  ]);

  const addMember = () => {
    if (teamMembers.length >= 6) {
      setShowModal(true);
    } else {
      setTeamMembers([...teamMembers, createInitialMemberFields()]);
    }
  };

  const removeMember = (index) => {
    if (teamMembers.length > 3) { // 保证至少有一个队长和2个成员
      setTeamMembers(teamMembers.slice(0, index).concat(teamMembers.slice(index + 1)));
    }
  };  

  const closeModal = () => {
    setShowModal(false);
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
        const updatedMember = member.map((field, fIdx) => {
          if (fIdx === fieldIndex) {
            // 当“学校/单位”字段改变时，重新构建成员字段
            if (field.label === "学校/单位") {
              // 根据是否是队长来调用不同的创建字段函数
              return idx === 0 ? createInitialLeaderFields(newValue) : createInitialMemberFields(newValue);
            }
            return {...field, value: newValue};
          }
          return field;
        });
  
        // 如果改变的是学校/单位字段，重新构建整个成员的字段数组
        if (member[fieldIndex].label === "学校/单位") {
          return idx === 0 ? createInitialLeaderFields(newValue) : createInitialMemberFields(newValue);
        }
        return updatedMember;
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
  
    // 检查团队名称和队长姓名是否为空
    if (!teamName.trim() || !leaderName.trim()) {
      alert("团队名称和队长姓名不能为空！");
      return; // 停止执行后续代码
    }
  
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
  
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "报名信息");
  
    // 为文件名添加时间戳并确保包含 .xlsx 后缀
    const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    const rawFileName = `${teamName}_${leaderName}_${timestamp}.xlsx`; // 确保文件名包含后缀
    console.log('Original rawFileName:', rawFileName);
    
    // 将工作簿转换为二进制文件
    const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const excelBlob = new Blob([wbout], { type: "application/octet-stream" });
  
    // 创建 FormData 并添加文件
    const formData = new FormData();
    formData.append("file", excelBlob, rawFileName); // 使用未编码的文件名
  
    if (selectedFile) {
      const resumeFileName = `${timestamp}_${selectedFile.name}`;
      console.log('Original resumeFileName:', resumeFileName);
      formData.append("resume", selectedFile, resumeFileName); // 使用未编码的简历文件名
    }
  
    // 将文件上传到服务器
    try {
      console.log('FormData file names before upload:', formData.get('file'), formData.get('resume'));
  
      const response = await axios.post("https://hkustquant.hk/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
  
      console.log("File uploaded successfully:", response.data);
  
      // 上传成功后显示倒计时页面
      setIsSubmitted(true);
  
      // 开始倒计时
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(countdownInterval);
            navigate("/"); // 倒计时结束后跳转到主页
          }
          return prev - 1;
        });
      }, 1000);
  
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };  
     
  if (isSubmitted) {
    return (
      <div className="countdown-page">
        <div className="message">
          报名提交成功！
          <div>
            {countdown} 秒后将返回
            <span
            className="home-link"
            onClick={() => navigate("/")}
          >
            主页
          </span>...
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="sign-up-page">
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>成员数量不能超过5人</p>
            <button className="close-button" onClick={closeModal}>&times;</button>
          </div>
        </div>
      )}
      <div className="heading">
        港科宽图量化交易大赛报名表
      </div>
      <div className="attention">
        <div className="attention-content">注意事项</div>
        <div className="attention-content">1. 香港科技大学各专业本硕博学生，香港科技大学校友以及香港地区其他高校学生均可报名，欢迎跨专业组队</div>
        <div className="attention-content">2.每支参赛队伍人数不多于5人</div>
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
              selectedFile={selectedFile}
              onFileChange={handleFileChange} 
            />
          </div>
        </div>
        <div className="team-members-information-heading sub-heading">
          团队成员信息
        </div>
{teamMembers.slice(1).map((fields, memberIndex) => (
  <React.Fragment key={memberIndex + 1}>
    <div className="team-members-information-heading3">
      团队成员{memberIndex + 1}: 
    </div>
    <div className="team-information-details">
      {renderFields(fields, memberIndex + 1)} 
      {memberIndex + 1 > 2 && (
        <button className="remove-member-button" onClick={() => removeMember(memberIndex + 1)}>
          删除成员
        </button>
      )}
      <hr className="member-separator" />
      {memberIndex + 1 === teamMembers.length - 1 && (
        <div className="middle-button-container">
          <button className="add-member-button" onClick={() => addMember()}>
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
