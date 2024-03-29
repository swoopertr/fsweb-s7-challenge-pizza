import React, { useState } from "react";
import Checkbox from "./Checkbox"; // Assuming Checkbox.js is in the same directory
import { Alert } from "bootstrap";

const ToppingsCheckboxGroup = ({ onChange }) => {
  const [toppingsState, setToppingsState] = useState({});
  const toppings = [
    { id: "pepperoni", label: "Pepperoni" },
    { id: "domates", label: "Domates" },
    { id: "biber", label: "Biber" },
    { id: "sosis", label: "Sosis" },
    { id: "mısır", label: "Mısır" },
    { id: "sucuk", label: "Sucuk" },
    { id: "kanadaJambonu", label: "Kanada Jambonu" },
    { id: "siyahZeytin", label: "Siyah Zeytin" },
    { id: "ananas", label: "Ananas" },
    { id: "tavukIzgara", label: "Tavuk Izgara" },
    { id: "jalepeno", label: "Jalepeno" },
    { id: "kabak", label: "Kabak" },
    { id: "soğan", label: "Soğan" },
    { id: "sarımsak", label: "Sarımsak" },
  ];
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (toppingId, isChecked) => {
    const updatedToppingsState = { ...toppingsState, [toppingId]: isChecked };
    setToppingsState(updatedToppingsState);

    const selectedToppings = Object.keys(updatedToppingsState).filter(
      (key) => updatedToppingsState[key]
    );




if (selectedToppings.length === 10) {
  setShowAlert(true); // Show the alert
} else {
  setShowAlert(false); // Hide the alert if previously shown
}

onChange(selectedToppings);
};

return (
  <div className="toppings-section">
    <h1 className="size-font">Ek Malzemeler</h1>
    <h2 className="topping-warning-font">En fazla 10 malzeme seçebilirsiniz. 5₺ </h2>
   
    <div className="malzemecontainer">
      {toppings.map((topping) => (
        <Checkbox
          key={topping.id}
          id={topping.id}
          label={topping.label}
          checked={toppingsState[topping.id] || false}
          onChange={(e) => handleChange(topping.id, e.target.checked)}
          disabled={
            Object.keys(toppingsState).filter(
              (key) => toppingsState[key]
            ).length === 10 && !toppingsState[topping.id]
          }
        />
      ))}
    </div>
    {showAlert && <div className="alert">Maksimum Seçme Sayısına Ulaştın Küçük Ayı</div>}
  </div>
);
};

export default ToppingsCheckboxGroup;