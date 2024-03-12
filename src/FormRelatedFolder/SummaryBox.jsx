import React, { useState, useEffect } from "react";
import OrderCount from "./OrderCount";

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
    <div>
      <h2>Sipariş Toplamı</h2>
      {/* OrderCount bileşenini burada kullanarak count bilgisini alın */}
      <OrderCount onCountChange={handleOrderCountChange} />
      <p>Seçimler Toplamı: {selectionTotal} TL</p>
      <p>Pizza Fiyatı: {calculatePizzaPrice(selectedPizza)} TL</p>
      <p>Toplam Tutar: {orderTotal} TL</p>

      <button onClick={handleOrderSubmit}>Sipariş Ver</button>
    </div>
  );
};

export default OrderSummary;
