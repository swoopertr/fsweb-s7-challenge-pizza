import React, { useState } from "react";
import Checkbox from "./Checkbox";
import RadioButtons from "./RadioButtons";
import DropDownForDoughType from "./DropDownForDoughType"
import OrderSummary from "./SummaryBox";
import OrderCount from "./OrderCount";
import ToppingsCheckboxGroup from "./CheckboxForToppings";
const ConsolidatedFormComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [orderCount, setOrderCount] = useState(0); // Eklendi
  

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.id);
  };


  const handleOrderCountChange = (count) => {
    setOrderCount(count); // OrderCount bileşeninden gelen sayı değişikliğini yakala
  };

  const handleToppingsChange = (toppingId, isChecked) => {
    // Handle topping change here
    console.log(`Topping ${toppingId} is ${isChecked ? 'checked' : 'unchecked'}`);
  
    // You can update state or perform any other action here
  };

  return (
    <>
      <div>
        <ToppingsCheckboxGroup onChange={handleToppingsChange} />
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
        < DropDownForDoughType />
        {/* onCountChange prop'u ekleniyor */}

        {/* OrderCount bileşenine orderCount prop'u ekleniyor */}
        <OrderSummary additionalIngredients={orderCount} />
      </div>
    </>
  );
};

export default ConsolidatedFormComponent;
