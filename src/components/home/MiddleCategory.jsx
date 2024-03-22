import { useState } from "react";
import MiddleCategoryMenu from "./MiddleCategoryMenu";
import MiddleCategoryProducts from "./MiddleCategoryProducts";


const MiddleCategory = () => {
    const [selectedCat, setSelectedCat] = useState([]);

    const onClickRmen = (event) => {
        let data_id = event.target.getAttribute('data-id');
        console.log('data_id: ', data_id);
        if (data_id === "Ramen") {
            setSelectedCat([
                { imgUrl: "https://picsum.photos/200/200", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Ramen de Soza" },
                { imgUrl: "https://picsum.photos/200/200", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Kültürlü Ramen" },
                { imgUrl: "https://picsum.photos/200/200", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "Mantarlı Ramen" }
            ])

        } else if (data_id === "Pizza") {
            setSelectedCat([
                { imgUrl: "https://picsum.photos/200/200", Rating: "4.1", ReviewCount: "120", Price: "85 TRY", Title: "Terminal Pizza" },
                { imgUrl: "https://picsum.photos/200/200", Rating: "4.2", ReviewCount: "200", Price: "95 TRY", Title: "Ter Pizza" },
                { imgUrl: "https://picsum.photos/200/200", Rating: "4.3", ReviewCount: "300", Price: "105 TRY", Title: "minal Pizza" }
            ])
        }
    };

    return (
        <>
            <div className="wrapper-menu-products">
            <div className="MiddleCategoryMenu">
                <MiddleCategoryMenu
                    clickFunction={onClickRmen}
                    items={['Ramen', 'Pizza', 'Burger', 'French frıes', 'Fast Food', 'Soft drınks']}
                />
                </div>
                <div className="MiddleCategoryProducts">
                <MiddleCategoryProducts items={selectedCat} />
            </div>
            </div>
           
        </>
    );
};
export default MiddleCategory;