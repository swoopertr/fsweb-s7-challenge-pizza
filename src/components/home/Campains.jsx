import { Link } from "react-router-dom";
import BigPartCampain from "./BigPartCampain";
import SmallPartCampain from "./SmallPartCampain";
import "./Campains.css";
const Campaigns = () => {
  return (
    <>
      <div className="campains-container">
        <BigPartCampain />
        <SmallPartCampain />
      </div>
    </>
  );
};
export default Campaigns;
