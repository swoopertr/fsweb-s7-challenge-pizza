import { useEffect, useState } from "react";


const BottomItems = (props) => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        
    },[]);

    return (
        <>
            <ul>
                <li>
                    <a href="">Yeni Kore</a>
                </li>
                <li>
                    <a href="">Pizza</a>
                </li>
                <li>
                    <a href="">Burger</a>
                </li>
            </ul>
            
        </>
    );
};
export default BottomItems;
