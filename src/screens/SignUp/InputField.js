import React from "react";

function InputField({ label, placeholder }) {
  return (
    <div className="details">
      <div className="input-heading">{label}</div>
      <input 
        className="rounded-input" 
        type="text" 
        placeholder={placeholder} 
      />
    </div>
  );
}

export default InputField;
