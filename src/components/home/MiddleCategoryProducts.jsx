import MiddleCategoryProductsItem from "./MiddleCategoryProductsItem";

//product Details
const MiddleCategoryProducts = (props) => {
  return (
    <div className="ItemWrapper">
        {props.items.map((item) => {
          return (
            <>
            <div >
              <MiddleCategoryProductsItem
                productIMG={item.imgUrl}
                productRating={item.Rating}
                productReviewCount={item.ReviewCount}
                productPrice={item.Price}
                productTitle={item.Title}
              />
            </div>
            </>
            
          );
        })}
      </div>
  );
};

export default MiddleCategoryProducts;
