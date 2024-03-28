import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SuccessResult.css";
import LocalStorageHelper from "../../Util/LocalStorageHelper";

const SuccessResult = () => {
  const [storedPizza, setStoredPizza] = useState(null); // state tanımla
  const pizzaTotalDetails = LocalStorageHelper.get('order');

  useEffect(() => {
    // Local storage'dan verileri alma
    const pizzaDetails = JSON.parse(localStorage.getItem('selectedPizza'));
    // Eğer veri varsa, setStoredPizza ile state'i güncelle
    if (pizzaDetails) {
      setStoredPizza(pizzaDetails);
    } else {
      console.log('Local storage\'da pizza detayları bulunamadı.');
    }
  }, []); // Sadece bir kez çalışması için boş bağımlılık dizisi ver

  return (
    <>
      <div className="SuccessResultMain">
        <div className="SuccessResultSecondMain">
          <div className="SuccessResultChild">
            <div className="success-row-class">
              <h2 className="SuccessResultH2">Sipariş Toplamı</h2>
            </div>
            <div className="success-row-class">
              <h3 className="SuccessResultH3">Seçimler</h3>
              {/* <h3 className="SuccessResultH3">{pizzaTotalDetails.}</h3> */}
            </div>
            <div className="success-row-class">
              <h3 className="SuccessResultH3">Toplam</h3>
              <h3 className="SuccessResultH3">{pizzaTotalDetails.orderTotal}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessResult;
