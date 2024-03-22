import React from "react";
import { useParams } from "react-router-dom"; // bilgilerin gelmesi için bunu kullanacağız
import "./SuccessResult.css";
const SuccessResult = () => {
  return (
    <>
      <div className="SuccessResultMain">
        <div className="SuccessResultSecondMain">
          <h2 className="SuccessResultH2">Sipariş Toplamı</h2>
          <div className="SuccessResultChild">
            <h3 className="SuccessResultH3">Seçimler</h3>
            <h3 className="SuccessResultH3">Toplam</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default SuccessResult;
