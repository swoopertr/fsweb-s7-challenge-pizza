import React from 'react';
import "./CheckBox.css"
const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        style={{backgroundColor: "#FDC913", width: "30px", height:"30px"}}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
