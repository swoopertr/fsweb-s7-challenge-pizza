import React, { useState, useEffect } from "react";
import OrderCount from "./OrderCount";
import "./OrderSummary.css";

const OrderSummary = ({ selectedPizza, additionalIngredients }) => {
  const [selectionTotal, setSelectionTotal] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Her bir seçim için 5 TL ekleyerek seçimlerin toplamını hesapla
    const selectionsTotalValue = additionalIngredients * 5 * count;
    setSelectionTotal(selectionsTotalValue);

    // Daha önce seçilen pizza türüne göre toplam fiyatı hesapla
    const pizzaPrice = calculatePizzaPrice(selectedPizza) * count;

    // Seçimlerin toplamı ve pizza fiyatını topla
    const totalOrderValue = selectionsTotalValue + pizzaPrice;
    setOrderTotal(totalOrderValue);
  }, [selectedPizza, additionalIngredients, count]);

  const calculatePizzaPrice = (pizzaType) => {
    // Örnek pizza fiyatları
    const pizzaPrices = {
      margherita: 20,
      pepperoni: 25,
      veggie: 22,
      custom: 18, // Daha önce belirlenmiş pizza türü yoksa
    };

    // Belirtilen pizza türüne göre fiyatı al, eğer tanımlı değilse custom fiyatını kullan
    const price = pizzaPrices[pizzaType] || pizzaPrices.custom;
    return price;
  };

  const handleOrderCountChange = (newCount) => {
    // OrderCount bileşeninden gelen count bilgisini burada alın
    setCount(newCount);
  };

  const handleOrderSubmit = () => {
    // Siparişi tamamlamak için gerekli işlemleri burada gerçekleştirebilirsiniz
    console.log("Sipariş Verildi! Toplam Tutar: ", orderTotal);
  };

  return (
    <div className=" order-summary-total">
      {/* OrderCount bileşenini burada kullanarak count bilgisini alın */}

      <OrderCount
        className="order-summary-count"
        onCountChange={handleOrderCountChange}
      />
      <div className="order-summary-container">
        <div className="order-sum-container">
          {/* <p>Seçimler Toplamı: {selectionTotal} TL</p> */}
          <h2>Sipariş Toplamı</h2>
          <p className="selection-label">
            Seçimler{" "}
            <span className="price">
              {calculatePizzaPrice(selectedPizza)} TL
            </span>
          </p>

          <p className="red-total">
            Toplam <span className="price">{orderTotal} TL </span>
          </p>

          <button onClick={handleOrderSubmit} className="yellow-button">
            SİPARİŞ VER
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
