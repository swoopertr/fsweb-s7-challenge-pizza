import React, { useState } from "react";
import Checkbox from "./Checkbox"; // Assuming Checkbox.js is in the same directory

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

  const handleChange = (toppingId, isChecked) => {
    const updatedToppingsState = { ...toppingsState, [toppingId]: isChecked };
    setToppingsState(updatedToppingsState);

    const selectedToppings = Object.keys(updatedToppingsState).filter(
      (key) => updatedToppingsState[key]
    );

    onChange(selectedToppings);
  };

  return (
    <div>
      <h1>Ek Malzemeler</h1>
      <h2>En fazla 10 malzeme seçebilirsiniz. 5₺ </h2>
      <div className="malzemecontainer">
        {toppings.map((topping) => (
          <Checkbox
            key={topping.id}
            id={topping.id}
            label={topping.label}
            checked={toppingsState[topping.id] || false}
            onChange={(e) => handleChange(topping.id, e.target.checked)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToppingsCheckboxGroup;
