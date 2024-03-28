import { useParams } from "react-router-dom";
import "./SuccessAbout.css";
import LocalStorageHelper from "../../Util/LocalStorageHelper";

const SuccessAbout = () => {
  const  pizzaDetails  = LocalStorageHelper.get('order');
  console.log(pizzaDetails);
  return (
    <div className="success-about-container">

{/* const orderDetails = {
      selectedToppings: ,
      size: ,
      doughType: ,
      selectedPizza: ,
      orderTotal: ,
      count: 
    } */}

      <h2 className="SuccessAboutH2">{ <span>{pizzaDetails.selectedPizza}</span> }</h2>
      <div className="success-about-smallcontainer">
        <h3 className="SuccessAboutH3">
          Boyut: <span className="SuccessAboutSpan"> {<span>{pizzaDetails.size}</span> }</span> 
        </h3>
        <h3 className="SuccessAboutH3">
          Hamur: <span className="SuccessAboutSpan">{ <span>{pizzaDetails.doughType}</span> }</span> 
        </h3>
        <h3 className="SuccessAboutH3">
          Ek Malzemeler: <span className="SuccessAboutSpan">  {<span>{pizzaDetails.selectedToppings}</span>}</span> 
        </h3> 
      </div>
    </div>
  );
};
export default SuccessAbout;
