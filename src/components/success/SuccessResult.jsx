import React from "react";
import { useParams } from "react-router-dom"; // bilgilerin gelmesi için bunu kullanacağız
import "./SuccessResult.css";
const SuccessResult = () => {

  const { pizzaDetails } = useParams()
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
              <h3 className="SuccessResultH3">25₺ {/* {pizzaDetails.secim} */}</h3>
            </div>
            <div className="success-row-class">
              <h3 className="SuccessResultH3">Toplam</h3>
              <h3 className="SuccessResultH3">110₺ {/* {pizzaDetails.toplam} */}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SuccessResult;
