import { useTranslation } from "react-i18next";
import {useState, useEffect} from 'react';
import Modal from "../Modal/Modal";
import { Link, useLocation } from "react-router-dom";



export const ProductItem = (props) => {
    
    let location = useLocation();
    const {imgUrl, imgUrlBig, imgAlt, productName, productPrice, categoryUrl, category} = props;
    const { t, i18n } = useTranslation(["locales"]);
    const [openp, setOpenP] = useState(false);
    
    

    useEffect(()=>{
        if(location.pathname === `/${i18n.language}${category}${categoryUrl}/${productName.toLowerCase().replaceAll(' ','-')}`){
            setOpenP(true);
        }
    },[])

    return (
        <>
            <div className="flex justify-center transition-colors duration-300 border border-transparent hover:border-[#FFD905] rounded-lg hover:border">
                <div className="product-item w-[240px] p-2.5 flex flex-col justify-between">
                    <Link to={`/${i18n.language}${category}${categoryUrl}/${productName.toLowerCase().replaceAll(' ','-')}`}>
                        <img src={imgUrl} alt={imgAlt} className="rounded-lg cursor-pointer " onClick={()=>setOpenP(!openp)}/>
                    </Link>
                    
                    
                    <div className="product-info text-white flex justify-between items-center px-2.5 my-3">
                        <div className="product-name text-base pointer-events-none">{productName}</div>
                        <span className="product-i text-[#7d7d7d] cursor-pointer">
                            <svg width="18" height="18" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </span>
                    </div>
                    
                    <Modal 
                        imgUrl = {imgUrl}
                        imgUrlBig = {imgUrlBig}
                        productName = {productName}
                        categoryUrl = {categoryUrl}
                        productPrice = {productPrice}
                        isOpen={openp}
                        onClose={()=> setOpenP(false)}
                        onOpen = {()=>setOpenP(true)}
                    />
                    <div className="product-price-add-button cursor-pointer flex justify-between items-center text-white border rounded-lg border-[#FFD905] p-2.5 font-semibold hover:bg-[#FFD905] hover:text-black ">
                        <div className="price text-[.7em]">{productPrice} mdl</div>
                        <div className="add-to-card flex items-center">
                        {t("order")}
                        <span className="cart ml-2.5">
                            <svg width="18" height="18" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductItem;