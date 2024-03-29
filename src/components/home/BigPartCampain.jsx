import { Link } from "react-router-dom";
import "./Bigpartcampain.css";

const BigPartCampain = () => {
  return (
    <>
      <div className="big-part-container">
        <div className="big-part-items">
          <h2 className="bigcampain-text">Özel Lezzetus</h2>
          <p className="big-part-text">Position:Absolute Acı Burger</p>
          <Link to="/pizzaorder">
          <button className="bigcampain-button">SİPARİŞ VER</button>
        </Link>
          
        
        </div>
      </div>
    </>
  );
};
export default BigPartCampain;
