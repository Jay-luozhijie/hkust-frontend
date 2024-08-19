import React, { useState } from "react";
import InputField from './InputField';
import DropdownField from './DropdownField';
import '../../css/SignUp.scss';
import FileUploadField from './FileUploadField';

function SignUp() {
  const [memberSchool, setMemberSchool] = useState('');

  const addMember = () => {
    setTeamMembers([...teamMembers, initialMemberFields]);
  };

  const schoolOptions = [
    "科大学生", 
    "科大校友", 
    "其他"
  ];
  
  const teamFields = [
    { label: "团队名称", placeholder: "请填写您的团队名称" },
    { label: "队长姓名", placeholder: "请填写队长的全名" },
    { label: "队长电子邮件地址", placeholder: "请提供队长常用的电子邮件地址" },
    { label: "队长微信号（选填）", placeholder: "请提供队长的微信号" },
    { label: "队长手机号（选填）", placeholder: "请填写队长的手机号" },
    { label: "学校/单位", type: "dropdown", options: schoolOptions, placeholder: "请选择", value: memberSchool, onChange: e => setMemberSchool(e.target.value) },
    { label: "学院", placeholder: "请填写" },
    { label: "年级", placeholder: "请填写" },
    { label: "学号", placeholder: "请填写" },
  ];
  
  const initialMemberFields = [
    { label: "姓名", placeholder: "请填写" },
    { label: "电子邮件", placeholder: "请填写" },
    { label: "团队角色", placeholder: "请描述其在团队中的角色" },
    { label: "学校/单位", type: "dropdown", options: schoolOptions, placeholder: "请选择", value: memberSchool, onChange: e => setMemberSchool(e.target.value) },
    { label: "学院", placeholder: "请填写" },
    { label: "年级", placeholder: "请填写" },
    { label: "学号", placeholder: "请填写" },
  ];

  const [teamMembers, setTeamMembers] = useState(
    Array(5).fill(initialMemberFields) // 初始设置为5个成员
  );

  const removeMember = (index) => {
    if (teamMembers.length > 5) { // 确保成员数不能小于5
      setTeamMembers(teamMembers.filter((_, i) => i !== index));
    }
  };

  // 将 teamFields 和 memberFields 分成每两个为一组
  const groupFields = (fields) => {
    const grouped = [];
    for (let i = 0; i < fields.length; i += 2) {
      grouped.push(fields.slice(i, i + 2));
    }
    return grouped;
  };

  const groupedTeamFields = groupFields(teamFields);
  const groupedMemberFields = teamMembers.map(member => groupFields(member));

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
        {groupedTeamFields.map((group, index) => (
          <div className="input-row" key={index}>
            {group.map((field, subIndex) => (
              field.type === "dropdown" ? (
                <DropdownField
                  key={subIndex}
                  label={field.label}
                  options={field.options}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={field.onChange}
                />
              ) : (
                <InputField key={subIndex} label={field.label} placeholder={field.placeholder} />
              )
            ))}
            {group.length === 1 && <div className="empty-space"></div>}
          </div>
        ))}
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
        {groupedMemberFields.map((groupedFields, memberIndex) => (
          <React.Fragment>
            <div className="team-members-information-heading3">
              团队成员{memberIndex + 1}：
            </div>
            <div className="team-information-details">
  {groupedFields.map((group, index) => (
    <div className="input-row" key={index}>
      {group.map((field, subIndex) => (
        field.type === "dropdown" ? (
          <DropdownField
            key={subIndex}
            label={field.label}
            options={field.options}
            placeholder={field.placeholder}
            value={field.value}
            onChange={field.onChange}
          />
        ) : (
          <InputField key={subIndex} label={field.label} placeholder={field.placeholder} />
        )
      ))}
      {group.length === 1 && <div className="empty-space"></div>}
    </div>
  ))}
  {memberIndex >= 5 && (
    <button className="remove-member-button" onClick={() => removeMember(memberIndex)}>
      删除成员
    </button>
  )}
  <hr className="member-separator" />
  {memberIndex === teamMembers.length - 1 && (
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
          <div className="sub-heading">
          其他信息
          </div>
          <div className="other-information-block">
          <div className="motivation heading-3">
        参赛动机
        </div>
          <textarea className="other-information-input"
          placeholder="请简述您参加这次大赛的原因和期望获得的经验"
          />
</div>
<div className="other-information-block">
          <div className="motivation heading-3">
          期望从大赛中学到的内容
        </div>
          <textarea className="other-information-input"
          placeholder="请描述您希望通过此次大赛学习或提高的具体技能"
          />
</div>
      </div>
      <div className="middle-button-container">
              <button className="submit-button" onClick={addMember}>
                提交报名
              </button>
              <div className="attention">
              注意：提交报名后信息不可更改
              </div>
            </div>
      </div>
    </div>
  );
}
export default SignUp;
