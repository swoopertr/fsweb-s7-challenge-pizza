
import "./Foodcategories.css";
import Svg1 from './../../assets/icons/1.svg';
import Svg2 from './../../assets/icons/2.svg';
import Svg3 from './../../assets/icons/3.svg';
import Svg4 from './../../assets/icons/4.svg';
import Svg5 from './../../assets/icons/5.svg';
import Svg6 from './../../assets/icons/6.svg';

const MiddleCategoryMenu = (props) => {
    const onClick = (event) => {
        event.preventDefault();
        props.clickFunction(event);
    };

    const svgIcons = [Svg1, Svg2, Svg3, Svg4, Svg5, Svg6];

    return (
        <>
            <ul className="category-containerbottom">
                {props.items.map((item, index) => (
                    <li key={item}>
                        <div className="category-items">
                            <img src={svgIcons[index]} alt={`icon-${index + 1}`} />
                            <a href="#" onClick={onClick} data-id={item}>
                                {item}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};
export default MiddleCategoryMenu;
