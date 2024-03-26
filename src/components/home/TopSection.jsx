
import { Link } from "react-router-dom";
import "./Topsection.css";
import Logo from './../../assets/logo.svg'
const TopSection = () => {
  return (
    <div className="home-container">
      
        <h2 className="home-title"><img src={Logo} alt="" /></h2>
        <p className="home-firsat">fırsatı kaçırma</p>
        <h1 className="home-subtitle">KOD ACIKTIRIR</h1>
        <h1 className="home-subtitle">PIZZA, DOYURUR</h1>
        <Link to="/pizzaorder">
          <button className="home-button">ACIKTIM</button>
        </Link>
    </div>
  );
};
export default TopSection;
