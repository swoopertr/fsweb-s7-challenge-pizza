//MiddleCategoryProductsItem

const MiddleCategoryProductsItem=(props)=>{
    return (
            <>
                <div className="middleCategoryProducts">
                    <div className="productDetails">
                        <img src={`${props.productIMG}`} />
                        <p>{`${props.productTitle}`}</p>
                        <div className="productRating">
                            <p>{`${props.productRating}`}</p>
                            <p>{`${props.productReviewCount}`}</p>
                            <p>{`${props.productPrice}`}</p>
                        </div>
                    </div>
                </div>
            </>   
    );
}

export default MiddleCategoryProductsItem;
