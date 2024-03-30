import React, { useState } from "react";
import "./OrderCount.css";

const OrderCount = ({initialCount, onCountChange }) => {

  const handleIncrement = () => {
    const newCount = initialCount + 1;
    onCountChange(newCount);
  };

  const handleDecrement = () => {
    if (initialCount > 0) {
      const newCount = initialCount - 1;
      
      onCountChange(newCount);
    }
  };

  return (
    <div className="order-count-container">
      <button onClick={handleDecrement}>-</button>
      <span id="order-count">{initialCount}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default OrderCount;
