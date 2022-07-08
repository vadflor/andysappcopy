
import TitleSection from '../TitleSection/TitleSection';
import ProductList from '../ProductList/ProductList';
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, getBottomNavBarData } from '../../Redux/HeaderMenu/action.js';
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";


export const AllProducts = () => {
    const locate = useLocation();
    const { i18n } = useTranslation(["locales"]);
    const type = locate.pathname.split("/").splice(3).toString();
    const dispatch = useDispatch();
    
    const state = useSelector(state => {
        return state.productsData.data;
    });

    const category = useSelector(category => {
        return category.bottomNavBarData.data[1]?.urlLink;
    });
    console.log('category', category);
    
    useEffect(()=>{    
        dispatch(getProductsData())
        dispatch(getBottomNavBarData())
        window.scroll(0,0)
    },[]) 

    return (
        <>
            <div className='pt-40 pb-20'>
                {   
                    (locate.pathname !== `/${i18n.language}${category}/${type}`) ? 
                                    
                    state.map(datakey => {
                        const {link, urlLink, pizzaItems, breakfastItems, snaksItems } = datakey;
                        
                        return (
                            <div key={datakey._id} >
                                    <TitleSection sectionTitle = {link} urlLink={urlLink} category={category}/>
                                    {
                                        (pizzaItems.length !==0) ? <ProductList listOfProduct = {pizzaItems} categoryUrl={urlLink} category={category}/> : 
                                        (breakfastItems.length !==0) ? <ProductList listOfProduct = {breakfastItems} categoryUrl={urlLink} category={category}/>:
                                        (snaksItems.length !==0) ? <ProductList listOfProduct = {snaksItems} categoryUrl={urlLink} category={category}/> : null
                                    } 

                            </div>
                        )
                    }) : state.map(elem => {
                        if(elem.link === type){
                            return (
                                <>
                                <TitleSection sectionTitle = {elem.link} urlLink={elem.urlLink} category={category}/>
                                {
                                    (elem.pizzaItems.length !==0) ? <ProductList listOfProduct = {elem.pizzaItems} categoryUrl={elem.urlLink} category={category}/> : 
                                    (elem.breakfastItems.length !==0) ? <ProductList listOfProduct = {elem.breakfastItems} categoryUrl={elem.urlLink} category={category}/>:
                                    (elem.snaksItems.length !==0) ? <ProductList listOfProduct = {elem.snaksItems} categoryUrl={elem.urlLink} category={category}/> : null
                                }
                                </>
                            )
                        }
                    }
                        
                    )
                }
            </div>
        </>
    );
}

export default AllProducts;