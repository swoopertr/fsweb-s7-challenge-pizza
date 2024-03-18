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
    <>
      <TopSection />
      <FoodCategories />
      <Campaigns />
      <MiddleCategoryContainer />
      <Footer />
    </>
  );
};
export default Home;
