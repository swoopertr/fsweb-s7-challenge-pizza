import { Link } from "react-router-dom";
import BigPartCampain from "./BigPartCampain";
import SmallPartCampain from "./SmallPartCampain";

const Campaigns = () => {
  return (
    <>
      <div className="campains-container">
        <BigPartCampain />
        <SmallPartCampain
          text="Hackathlon Burger Menü"
          style={{ backgroundColor: "rgb(63, 60, 60)" }}
        />
        <SmallPartCampain
          text="Çoooook hızlı npm gibi kurye"
          style={{ backgroundColor: "rgb(231, 239, 10)" }}
        />
      </div>
    </>
  );
};
export default Campaigns;
