import React from 'react';

function DropdownField({ label, options, placeholder, onChange, value }) {

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <React.Fragment>
      <div className='details'>
        <label className='input-heading'>{label}</label>
        <select 
          className={`option-bar ${value ? 'has-value' : ''}`} 
          value={value} 
          onChange={handleChange}
        >
          <option className='option' value="">{placeholder}</option>
          {options.map((option, index) => (
            <option className='option' key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
}

export default DropdownField;
