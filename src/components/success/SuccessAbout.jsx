import { useParams } from "react-router-dom";
import "./SuccessAbout.css";

const SuccessAbout = () => {
  const { pizzaDetails } = useParams();
  return (
    <div className="success-about-container">
      <h2 className="SuccessAboutH2">Pizza İsmi{/* <span>{pizzaDetails.isim}</span> */}</h2>
      <div className="success-about-smallcontainer">
        <h3 className="SuccessAboutH3">
          Boyut: <span className="SuccessAboutSpan">L{/* <span>{pizzaDetails.boyut}</span> */}</span> 
        </h3>
        <h3 className="SuccessAboutH3">
          Hamur: <span className="SuccessAboutSpan">Kalın{/* <span>{pizzaDetails.hamur}</span> */}</span> 
        </h3>
        <h3 className="SuccessAboutH3">
          Ek Malzemeler: <span className="SuccessAboutSpan">Pepporoni, Mısır, Ananas{/* <span>{pizzaDetails.ekler}</span> */}</span> 
        </h3>
      </div>
    </div>
  );
};
export default SuccessAbout;
