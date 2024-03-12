import React, { useState } from 'react';
import Checkbox from './Checkbox'; // Assuming Checkbox.js is in the same directory

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
    setToppingsState((prevState) => ({
      ...prevState,
      [toppingId]: isChecked,
    }));
    
    onChange(isChecked);


    console.log(
      `Topping ${toppingId} is ${isChecked ? "checked" : "unchecked"}`
    );
  };

  return (
    <div>
      <h2>Pizza Toppings</h2>
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
  );
};

export default ToppingsCheckboxGroup;
