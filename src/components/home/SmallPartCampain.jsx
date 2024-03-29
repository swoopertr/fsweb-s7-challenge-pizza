import "./Smallpartcampain.css";
import { Link } from "react-router-dom";


const SmallPartCampain = () => {
  return (
    <>
      <div className="small-part-container">
        <div className="small-part-items item1">
          <h2 id="hackatlon-title" className="smallcampain-text">
            Hackatlon <br />
            Burger Menu
          </h2>
          <Link to="/pizzaorder">
            <button className="smallcampain-button">SİPARİŞ VER</button>
          </Link>
        </div>
        <div className="small-part-items item2">
          <h2 className="smallcampain-text">
            <span className="red-color-text">Çoooook </span>hızlı <br />
            npm gibi kurye{" "}
          </h2>
          <Link to="/pizzaorder">
            <button className="smallcampain-button">SİPARİŞ VER</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default SmallPartCampain;
