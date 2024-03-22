import MiddleCategoryProductsItem from "./MiddleCategoryProductsItem";

//product Details
const MiddleCategoryProducts = (props) => {
    
    return (
        <div className="middleCategoryProducts">
            {props.items.map(item=>{
                return (
                    <>
                        <MiddleCategoryProductsItem 
                            productIMG={item.imgUrl} 
                            productRating={item.Rating}
                            productReviewCount={item.ReviewCount}
                            productPrice={item.Price}
                            productTitle={item.Title}
                        />
                    </>
                )
            })}
        </ div>
    );
};

export default MiddleCategoryProducts;
