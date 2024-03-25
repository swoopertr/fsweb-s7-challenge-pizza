// DoughTypeComponent.jsx
import React from "react";
import Dropdown from "./Dropdown";

const DoughTypeComponent = ({ onChange }) => {
  const menuItems = [
    { label: "Normal", value: "normal" },
    { label: "İnce", value: "ince" },
    { label: "Kalın", value: "kalın" },
  ];

  const onDropdownChange = (event) => {
    console.log(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="dough-type-container">
      <p className="dough-type-label">Hamur Seç*</p>
      <Dropdown buttonLabel="Dropdown button" menuItems={menuItems} onChange={onDropdownChange} />
    </div>
  );
};

export default DoughTypeComponent;
