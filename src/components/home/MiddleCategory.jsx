import { useState } from "react";
import MiddleCategoryMenu from "./MiddleCategoryMenu";
import MiddleCategoryProducts from "./MiddleCategoryProducts";


const MiddleCategory = () => {
    const [selectedCat, setSelectedCat] = useState([]);

    const onClickRmen = (event) => {
        let data_id = event.target.parentElement.getAttribute("data-id");
        console.log('data_id: ', data_id);
        if (data_id === "Ramen") {
            setSelectedCat([
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-1.png", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Ramen de Soza" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-2.png", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Kültürlü Ramen" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-3.png", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "Mantarlı Ramen" }
            ])

        } else if (data_id === "Pizza") {
            setSelectedCat([
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-1.png", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Pizza de Soza" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-2.png", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Kültürlü Pizza" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-3.png", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "Mantarlı Pizza" }
            ])
        } else if (data_id === "Burger") {
            setSelectedCat([
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-1.png", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Burger de Soza" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-2.png", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Kültürlü Burger" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-3.png", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "Mantarlı Burger" }
            ])
        } else if (data_id === "French Fries") {
            setSelectedCat([
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-1.png", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Yağlı" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-2.png", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Kültürlü Yağ" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-3.png", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "Ye Ekşiyi Doğur Ayşeyi" }
            ])
        } else if (data_id === "Soft Drinks") {
            setSelectedCat([
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-1.png", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Asiit" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-2.png", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Sarı Kola" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-3.png", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "Şerbet" }
            ])
        }else if (data_id === "Fast Food") {
            setSelectedCat([
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-1.png", Rating: "4.9", ReviewCount: "420", Price: "85 TRY", Title: "Burger King" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-2.png", Rating: "4.2", ReviewCount: "301", Price: "95 TRY", Title: "Mc" },
                { imgUrl: "../../Assets/mile2-aseets/pictures/food-3.png", Rating: "3.3", ReviewCount: "230", Price: "105 TRY", Title: "KFC" }
            ])
        }
    };

    return (
        <>
            <div className="wrapper-menu-products">
            <div>
                <MiddleCategoryMenu
                    clickFunction={onClickRmen}
                    items={['Ramen', 'Pizza', 'Burger', 'French Fries', 'Fast Food', 'Soft Drinks']}
                />
                </div>
                <div>
                <MiddleCategoryProducts items={selectedCat} />
            </div>
            </div>
           
        </>
    );
};
export default MiddleCategory;