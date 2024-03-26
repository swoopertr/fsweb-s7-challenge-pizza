import BackGroundImage from "../../../Assets/mile1-assets/home-banner.png";
import { Link } from "react-router-dom";
import TopSection from "./TopSection";
import FoodCategories from "./FoodCategories";
import MiddleCategory from "./MiddleCategory";
import Footer from "./FooterFolder/Footer";
import Campaigns from "./Campains";
import MiddleCategoryContainer from "./MiddleCategoryContainer";

const Home = () => {
  return (
    <> <div style={{backgroundColor: "#FAF7F2"}}> 
    {/* Divler arasında beyaz boşluklar oluyordu o yüzden bu div ekledim */}
      <TopSection />
      <FoodCategories />
      <Campaigns />
      <MiddleCategoryContainer />
      <Footer />
      </div>
    </>
  );
};
export default Home;
