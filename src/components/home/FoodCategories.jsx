import { Link } from "react-router-dom";
import "./Foodcategories.css"
import Svg1 from './../../assets/icons/1.svg';
import Svg2 from './../../assets/icons/2.svg';
import Svg3 from './../../assets/icons/3.svg';
import Svg4 from './../../assets/icons/4.svg';
import Svg5 from './../../assets/icons/5.svg';
import Svg6 from './../../assets/icons/6.svg';

 
const FoodCategories = () => {
  return (
    <>
      <ul className="category-container">
        <li>
            <div className="category-items">
            <img src={Svg1} />
          <Link to="">YENİ! Kore</Link>
          </div>
        </li>
        <li>
        <div className="category-items">
        <img src={Svg2} />
          <Link to="">Pizza</Link>
          </div>
        </li>
        <li>
        <div className="category-items">
        <img src={Svg3} />
          <Link to="">Burger</Link>
          </div>
        </li>
        <li>
        <div className="category-items">
        <img src={Svg4} />
          <Link to="">Kızartmalar</Link>
          </div>
        </li>
        <li>
        <div className="category-items">
        <img src={Svg5} />
          <Link to="">Fast Food</Link>
          </div>
        </li>
        <li>
        <div className="category-items">
        <img src={Svg6} />
          <Link to="">Gazlı İçecek</Link>
          </div>
        </li>
      </ul>
    </>
  );
};
export default FoodCategories;
