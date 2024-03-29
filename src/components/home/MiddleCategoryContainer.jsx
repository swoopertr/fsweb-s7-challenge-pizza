import MiddleCategory from "./MiddleCategory";
import MiddleCategoryTitle from "./MiddleCategoryTitle";
import "./MiddleCategoryContainer.css"

const MiddleCategoryContainer = (props) => {

    return (
        <>
            <div className="wrapper">
                <div>
                    <MiddleCategoryTitle mainTitle="en çok paketlenen menüler" regularTitle="Acıktıran Kodlara Doyuran Lezzetler" />
                </div>
                <div className="deneme">
                    <MiddleCategory />
                    </div>
                </div>
        </>
    );
}

export default MiddleCategoryContainer;