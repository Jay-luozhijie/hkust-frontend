import React from "react";

function InputField({ label, placeholder, value = "", onChange }) {
  return (
    <div className="details">
      <div className="input-heading">{label}</div>
      <input 
        className="rounded-input" 
        type="text" 
        placeholder={placeholder}
        value={value}          // 确保value不为undefined
        onChange={onChange}    // 处理值变化
      />
    </div>
  );
}

export default InputField;
