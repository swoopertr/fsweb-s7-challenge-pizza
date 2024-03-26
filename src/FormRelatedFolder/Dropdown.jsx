// Dropdown.jsx
import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ buttonLabel, menuItems, onChange }) => {
  const [selected, setSelected] = useState(""); // State to track selected value

  const onSelectChange = (event) => {
    setSelected(event.target.value);
    onChange(event);
  };

  return (
    <>
      <div className="hamur-container">
        <select onChange={onSelectChange} value={selected} className="dropdown-select">
          <option value="" disabled selected hidden>--Hamur Kalınlığını Seç--</option> 
          {menuItems.map((item, index) => (
            <option className="dropdownOption" value={item.value} key={index}>{item.label}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
