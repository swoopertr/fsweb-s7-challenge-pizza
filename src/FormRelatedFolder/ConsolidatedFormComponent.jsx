import React, { useState } from "react";
import Checkbox from "./Checkbox";
import RadioButtons from "./RadioButtons";
import Dropdown from "./Dropdown";
import OrderSummary from "./SummaryBox";
import OrderCount from "./OrderCount";

const ConsolidatedFormComponent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [orderCount, setOrderCount] = useState(0); // Eklendi
  const menuItems = [
    { label: "Kalın", href: "Kalın" },
    { label: "İnce", href: "#" },
    { label: "Standart", href: "#" },
  ];

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.id);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleOrderCountChange = (count) => {
    setOrderCount(count); // OrderCount bileşeninden gelen sayı değişikliğini yakala
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
          label="Küçük"
          checked={selectedOption === "radioOption1"}
          onChange={handleRadioChange}
        />
        <RadioButtons
          id="radioOption2"
          name="myRadioGroup"
          label="Büyük"
          checked={selectedOption === "radioOption2"}
          onChange={handleRadioChange}
        />
      </div>
      <div>
        <Dropdown buttonLabel="Dropdown button" menuItems={menuItems} />
        {/* onCountChange prop'u ekleniyor */}

        {/* OrderCount bileşenine orderCount prop'u ekleniyor */}
        <OrderSummary additionalIngredients={orderCount} />
      </div>
    </>
  );
};

export default ConsolidatedFormComponent;
