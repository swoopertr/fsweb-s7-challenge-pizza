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
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-1.png", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Ramen de Soza" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-2.png", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Kültürlü Ramen" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-3.png", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "Mantarlı Ramen" }
            ])

        } else if (data_id === "Pizza") {
            setSelectedCat([
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-1.png", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Ramen de Soza" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-2.png", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Kültürlü Ramen" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-3.png", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "Mantarlı Ramen" }
            ])
        } else if (data_id === "Burger") {
            setSelectedCat([
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-1.png", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Ramen de Soza" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-2.png", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Kültürlü Ramen" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-3.png", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "Mantarlı Ramen" }
            ])
        } else if (data_id === "French Fries") {
            setSelectedCat([
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-1.png", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Ramen de Soza" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-2.png", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Kültürlü Ramen" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-3.png", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "Mantarlı Ramen" }
            ])
        } else if (data_id === "Soft Drinks") {
            setSelectedCat([
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-1.png", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Ramen de Soza" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-2.png", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Kültürlü Ramen" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-3.png", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "Mantarlı Ramen" }
            ])
        }else if (data_id === "Pizza") {
            setSelectedCat([
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-1.png", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Ramen de Soza" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-2.png", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Kültürlü Ramen" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-3.png", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "Mantarlı Ramen" }
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