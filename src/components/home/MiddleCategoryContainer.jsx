import MiddleCategory from "./MiddleCategory";
import MiddleCategoryTitle from "./MiddleCategoryTitle";
import "./MiddleCategoryContainer.css"

const MiddleCategoryContainer = (props) => {

    return (
        <>
            <div className="wrapper">
                <div className="MiddleCategoryTitle">
                    <MiddleCategoryTitle mainTitle="en çok paketlenen menüler" regularTitle="Acıktıran Kodlara Doyuran Lezzetler" />
                </div>
                <div className="MiddleCategory">
                    <MiddleCategory />
                </div>
            </div>
        </>
    );
}

export default MiddleCategoryContainer;