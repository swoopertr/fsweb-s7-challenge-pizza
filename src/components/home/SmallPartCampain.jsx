import { Link } from "react-router-dom";
import "./Smallpartcampain.css";

const SmallPartCampain = (props) => {
  return (
    <>
      <div className="small-part-container">
        <div className="small-part-items" style={props.style}>
          <h2 className="smallcampain-text">{props.text}</h2>
          <button className="smallcampain-button">SİPARİŞ VER</button>
        </div>
      </div>
    </>
  );
};
export default SmallPartCampain;
