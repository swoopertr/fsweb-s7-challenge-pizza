import BackGroundImage from "../../../Assets/mile1-assets/home-banner.png";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="text">
        <h2 className="home-title">Teknolojik Yemekler</h2>
        <h1 className="home-subtitle">KOD ACIKTIRIR</h1>
        <h1 className="home-subtitle">PIZZA, DOYURUR</h1>
        <Link to="/pizzaorder">
          <button className="home-button">ACIKTIM</button>
        </Link>
      </div>
    </div>
  );
};
export default Home;
