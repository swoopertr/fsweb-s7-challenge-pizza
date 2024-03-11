import React, { useState } from 'react';

const Dropdown = ({ buttonLabel, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        {buttonLabel}
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a className="dropdown-item" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
