import { useParams } from "react-router-dom";
import "./SuccessAbout.css";

const SuccessAbout = () => {
  const { pizzaDetails } = useParams();
  return (
    <div className="success-about-container">
      <h2 className="SuccessAboutH2">Pizza İsmi</h2>
      <div className="success-about-smallcontainer">
        <h3 className="SuccessAboutH3">
          Boyut: {/* <span>{pizzaDetails.boyut}</span> */}
        </h3>
        <h3 className="SuccessAboutH3">
          Hamur: {/* <span>{pizzaDetails.hamur}</span> */}
        </h3>
        <h3 className="SuccessAboutH3">
          Ek Malzemeler: {/* <span>{pizzaDetails.ekler}</span> */}
        </h3>
      </div>
    </div>
  );
};
export default SuccessAbout;
