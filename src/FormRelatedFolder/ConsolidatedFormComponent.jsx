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
import PizzaInfo from "./PizzaInfo";
import SelectPizzaSizes from "./SelectPizzaSizes"
import "./RadioButtonStyle.css"

const ConsolidatedFormComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [orderCount, setOrderCount] = useState(0); // Eklendi
  const[pizzaSizes,setPizzaSizes]=useState("");//pizza boyutu
  const [selectionTotal, setSelectionTotal] = useState(0);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedDough, setSelectedDough] = useState("ince");



  const handleOrderCountChange = (count) => {
    setOrderCount(count); // OrderCount bileşeninden gelen sayı değişikliğini yakala
  };
 

  const handleToppingsChange = (selectedToppings) => {
    if (selectedToppings.length > 10) {
      console.log("Hata");
    }
    setSelectedToppings(selectedToppings);
    setSelectionTotal(selectedToppings.length * 5);
  };

  const RadioButtonSelected = (selectedRadioButtonValue) =>{
    console.log("selectedRadioButtonValue: ", selectedRadioButtonValue);
    setPizzaSizes(selectedRadioButtonValue);
  }

  const DoughTypeChange=(selectedDoughType)=>{
    console.log("selectedDoughType: ", selectedDoughType);
    setSelectedDough(selectedDoughType)
  }

  return (
    <>
      <div>
        <CustomerInfoText />
      </div>
      <div className="size-container">
        <SelectPizzaSizes RadioButtonSelected={RadioButtonSelected}/>
        <DropDownForDoughType onChange={DoughTypeChange}/>
      </div>
      <div>
        <ToppingsCheckboxGroup onChange={handleToppingsChange} />
      </div>
      <div className="ordernote-container">
        <OrderNote />
      </div>
      <div>
        {/* onCountChange prop'u ekleniyor */}
        
        {/* OrderCount bileşenine orderCount prop'u ekleniyor */}
        <OrderSummary selectedToppings = {selectedToppings} size={pizzaSizes} doughType={selectedDough} selectedPizza={""}/>
      </div>
    </>
  );
};

export default ConsolidatedFormComponent;
