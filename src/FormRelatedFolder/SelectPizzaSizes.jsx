import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import RadioButtons from './RadioButtons.jsx';

const SelectPizzaSizes = (props) => {
 
  const handleRadioChange = (event) => {
    console.log("data-value : ", event.target.getAttribute("data-value"));
    props.RadioButtonSelected(event.target.getAttribute("data-value"));
  };

  return (
    <div className="select-pizza-container">
      <div className="select-pizza-radio-buttons">
        <p>Boyut Seç*</p>
        <div className="radio-buttons-wrapper">
          <RadioButtons
            id="radioOption1"
            name="myRadioGroup"
            label="S"
            value="S"
            onChange={handleRadioChange}
          />
          <RadioButtons
            id="radioOption2"
            name="myRadioGroup"
            label="M"
            value="M"
            onChange={handleRadioChange}
          />
          <RadioButtons
            id="radioOption3"
            name="myRadioGroup"
            label="L"
            value="L"
            onChange={handleRadioChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectPizzaSizes;
