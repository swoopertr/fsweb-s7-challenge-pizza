import React, { useState } from "react";
import Checkbox from "./Checkbox";
import RadioButtons from "./RadioButtons";
import DropDownForDoughType from "./DropDownForDoughType";
import OrderSummary from "./OrderSummary";
import OrderCount from "./OrderCount";
import ToppingsCheckboxGroup from "./CheckboxForToppings";
import "./Form.css";
import OrderNote from "./OrderNote";
import CustomerInfoText from "./CustomerInfoText";
import PizzaInfo from "./PizzaInfo"

const ConsolidatedFormComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [orderCount, setOrderCount] = useState(0); // Eklendi
  const [selectionTotal, setSelectionTotal] = useState(0);
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.id);
  };

  const handleOrderCountChange = (count) => {
    setOrderCount(count); // OrderCount bileşeninden gelen sayı değişikliğini yakala
  };

  const handleToppingsChange = (selectedToppings) => {
    setSelectedToppings(selectedToppings);
    setSelectionTotal(selectedToppings.length * 5);
  };

  return (
    <>
      <div>
        <CustomerInfoText />
      </div>
      <div className="size-container">
  
        <DropDownForDoughType />
      </div>
      <div>
        <ToppingsCheckboxGroup onChange={handleToppingsChange} />
      </div>
      <div className="ordernote-container">
        <OrderNote />
      </div>
      <div>
        {/* onCountChange prop'u ekleniyor */}
        <p>Seçimler Toplamı: {selectionTotal} TL</p>
        {/* OrderCount bileşenine orderCount prop'u ekleniyor */}
        <OrderSummary additionalIngredients={orderCount} />
      </div>
    </>
  );
};

export default ConsolidatedFormComponent;
