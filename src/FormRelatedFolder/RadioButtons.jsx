import React from 'react';

const RadioButtons = ({ id, name, label, checked, onChange,value }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        data-value={value}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioButtons;
