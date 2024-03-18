import { useState } from "react";
import MiddleCategoryMenu from "./MiddleCategoryMenu";
import MiddleCategoryProducts from "./MiddleCategoryProducts";


const MiddleCategory = () => {
    const[selectedCat, setSelectedCat] = useState([]);
    
    const onClick = (event) => { 
        let data_id = event.target.getAttribute('data-id');
        console.log('data_id: ', data_id);
        setSelectedCat([
            {imgUrl:"https://picsum.photos/200/200", Rating: "4.1", ReviewCount:"120", Price:"85 TRY",Title:"Terminal Pizza"},
            {imgUrl:"https://picsum.photos/200/200", Rating: "4.2", ReviewCount:"200", Price:"95 TRY",Title:"Ter Pizza"},
            {imgUrl:"https://picsum.photos/200/200", Rating: "4.3",ReviewCount:"300", Price:"105 TRY",Title:"minal Pizza"}
        ])
    };

    return (
        <>
            <MiddleCategoryMenu  
                clickFunction={onClick} 
                items={['Ramen', 'Pizza', 'Burger', 'French frıes', 'Fast Food', 'Soft drınks']}
            />
            <MiddleCategoryProducts items={selectedCat}/>
        </>
    );
};
export default MiddleCategory;