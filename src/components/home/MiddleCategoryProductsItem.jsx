//MiddleCategoryProductsItem

const MiddleCategoryProductsItem=(props)=>{
    return (
            <>
                <div className="foodItemsFrame">
            <div className="productDetails">
                <img src={props.productIMG} alt={props.productTitle} />
                <div className="productName">{props.productTitle}</div>
                <div className="productRating">
                    <p><strong>Rating:</strong> {props.productRating}</p>
                    <p><strong>Review Count:</strong> {props.productReviewCount}</p>
                    <p><strong>Price:</strong> {props.productPrice}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default MiddleCategoryProductsItem;
