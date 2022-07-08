import ProductItem from "../ProductItem/ProductItem";
import { useEffect} from "react";


export const ProductList = (props) => {

  useEffect(()=>{    
    
    window.scroll(0,0)
},[]) 

    return (
        <>
          <div className="product-wrapper">
            <div className="product-slider">
              {/* <button className="left"></button> */}
              <div className="product-list flex justify-center ">
                {
                  props.listOfProduct.map((elem)=>(
                  
                    
                    <ProductItem
                      key = {elem._id}
                      imgUrl = {elem.imgUrl}
                      imgUrlBig = {elem.imgUrlBig}
                      imgAlt = {elem.imgAlt}
                      productName = {elem.productName}
                      productPrice = {elem.productPrice}
                      categoryUrl = {props.categoryUrl}
                      category = {props.category}
                    />
                  ))
                }
              </div>
              {/* <button className="right"></button> */}
            </div>
          </div>
        </>
    );
}

export default ProductList;