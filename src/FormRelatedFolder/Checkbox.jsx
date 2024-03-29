import React, { useState } from 'react';
import "./CheckBox.css"
const Checkbox = ({ id, label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (event) => {
    const newValue = event.target.checked;
    setIsChecked(newValue);
    onChange && onChange(event);
  };

  return (
    <div id='topping-list' className={`form-check ${isChecked ? 'checked' : ''}`}>
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={id}>
        <span className="custom-checkbox"></span> {label}
      </label>
    </div>
  );
};

export default Checkbox;
