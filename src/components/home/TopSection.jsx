
import { Link } from "react-router-dom";
import "./Topsection.css";

const TopSection = () => {
  return (
    <div className="home-container">
      
        
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
