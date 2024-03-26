import React from 'react';

const RadioButtons = ({ id, name, label, checked, onChange, value }) => {

  return (
    <div className="form-check">
      <input
        className="RadioButton-Input"
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        data-value={value}
      />
      <label className="RadioButtonLabel" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButtons;
