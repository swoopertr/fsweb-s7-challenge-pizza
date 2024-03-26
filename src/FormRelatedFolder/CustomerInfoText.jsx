import React from 'react';
import './CustomerInfoText.css';
import bg from '../assets/form-banner.png'

const CustomerInfoText = ({productName,price,rating,comment,desc}) => {
  return (
    
     <div className="customer-info-container">
      <img src={bg} alt=""/>
      <div className="main">
      Anasayfa - Seçenekler - <span style={{ color: 'red' }}>Sipariş Oluştur</span>
      </div>
      <h3 className="product-name">Position Absolute Acı Pizza</h3>
      <div className="product-details">
        <div className="price">
          <h3>85.50₺</h3>
        </div>
        <div className="rating">
          <h5>4.9</h5>
          <h5>(200)</h5>
        </div>
      </div>
      <p className="description">
      Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </p>
    </div>
    
  );
};

export default CustomerInfoText;
