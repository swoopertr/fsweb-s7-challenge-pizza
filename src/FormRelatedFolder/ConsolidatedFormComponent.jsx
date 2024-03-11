import React, { useState } from "react";
import Checkbox from "./Checkbox";
import RadioButtons from "./RadioButtons";
import Dropdown from "./dropdown";
const DoughType = [
    { label: 'Action', href: '#' },
    { label: 'Another action', href: '#' },
    { label: 'Something else here', href: '#' }
  ];

const ConsolidatedFormComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const DoughType = [
    { label: 'Action', href: '#' },
    { label: 'Another action', href: '#' },
    { label: 'Something else here', href: '#' }
  ];
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.id);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <div>
        <Checkbox
          id="myCheckbox"
          label="Default checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>

      <div>
        <RadioButtons
          id="radioOption1"
          name="myRadioGroup"
          label="Default radio 1"
          checked={selectedOption === "radioOption1"}
          onChange={handleRadioChange}
        />
        <RadioButtons
          id="radioOption2"
          name="myRadioGroup"
          label="Default radio 2"
          checked={selectedOption === "radioOption2"}
          onChange={handleRadioChange}
        />
      </div>
      <div>
      <Dropdown buttonLabel="Dropdown button" DoughType={DoughType} />
    </div>
    </>
  );
};

export default ConsolidatedFormComponent;
