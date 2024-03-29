import React, { useState, useEffect } from "react";
import OrderCount from "./OrderCount";
import "./OrderSummary.css";
import LocalStorageHelper from "../Util/LocalStorageHelper";
import { Link } from "react-router-dom";

const OrderSummary = (props) => {
  const { selectedToppings, size, doughType, selectedPizza, OrderNote   } = props;
  const [orderTotal, setOrderTotal] = useState(0);
  const [count, setCount] = useState(1);

  const selectionsTotalValue = selectedToppings.length * 5 * count;

  const doughPrice = (type) => {
    if (type === "ince") {
      return 0; // İnce kenar için ek ücret yok
    } else if (type === "normal") {
      return 10; // Normal kenar için 10 TL ek ücret
    } else if (type === "kalın") {
      return 20; // Kalın kenar için 20 TL ek ücret
    }
  };

  const sizePrice = (size) => {
    if (size === "S") {
      return 0;
    } else if (size === "M") {
      return 10;
    } else if (size === "L") {
      return 20;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    // Her bir seçim için 5 TL ekleyerek seçimlerin toplamını hesapla

    const pizzaPrice = calculatePizzaPrice(selectedPizza) * count;

    // Seçimlerin toplamı ve pizza fiyatını topla
    const totalOrderValue =
      selectionsTotalValue +
      pizzaPrice +
      doughPrice(doughType) +
      sizePrice(size);
    setOrderTotal(totalOrderValue);
    // Daha önce seçilen pizza türüne göre toplam fiyatı hesapla
  }, [selectedPizza, count, doughType, size, selectedToppings]);

  const calculatePizzaPrice = (pizzaType) => {
    // Örnek pizza fiyatları
    const pizzaPrices = {
      margherita: 20,
      pepperoni: 25,
      veggie: 22,
      custom: 85.5, // Daha önce belirlenmiş pizza türü yoksa
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
    const orderDetails = {
      selectedToppings,
      size,
      doughType,
      selectedPizza,
      orderTotal: orderTotal,
      count: count,
      selectionsTotalValue,
      OrderNote,
    };
    console.log("orderDetails: ", orderDetails);
    // Siparişi tamamlamak için gerekli işlemleri burada gerçekleştirebilirsiniz
    LocalStorageHelper.set("order", orderDetails); //.ok önemli local a kaydettik
    console.log("Sipariş Verildi! Toplam Tutar: ", orderTotal);
  };
  return (
    <div className=" order-summary-total">
      {/* OrderCount bileşenini burada kullanarak count bilgisini alın */}

      <OrderCount
        className="order-summary-count"
        onCountChange={handleOrderCountChange}
        initialCount={count}
      />
      <div className="order-summary-container">
        <div className="order-sum-container">
          <h2>Sipariş Toplamı</h2>
          <div className="selection-label-wrapper">
            <p className="selection-label">
              Seçimler <span className="price">{selectionsTotalValue} TL</span>
            </p>
            <p className="selection-label">
              Pizza{" "}
              <span className="price">
                {calculatePizzaPrice(selectedPizza) * count} TL
              </span>
            </p>
            <p className="selection-label">
              Boyut <span className="price">{sizePrice(size)} TL</span>
            </p>
            <p className="selection-label">
              Hamur <span className="price">{doughPrice(doughType)} TL</span>
            </p>

            <p className="red-total selection-label">
              Toplam <span className="price">{orderTotal} TL </span>
            </p>
          </div>
          <Link to="/success">
            <button onClick={handleOrderSubmit} className="yellow-button">
              SİPARİŞ VER
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
