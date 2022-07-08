import TopMenuItem from "../../elements/TopMenuItem/TopMenuItem";
import { useEffect } from "react";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTopMenuLinksData } from '../../Redux/HeaderMenu/action.js';

export const TopMenuLinks = () => {
    const dispatch = useDispatch();

    const {i18n, t} = useTranslation(["locales"]);
    const locate = useLocation();
    

useEffect(()=>{
    if(localStorage.getItem("i18nextLng")?.length > 2){
        i18next.changeLanguage("en");
    }
    dispatch(getTopMenuLinksData())
},[]);

const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
};

const state = useSelector(state => {
    return state.topMenuLinksData.data
});



    return (
        <>
            <ul className="menu-links flex list-none m-0 p-0 font-extralight items-center text-sm">
                {
                    state.map((elem)=>(    
                        <TopMenuItem 
                            key = {elem._id}
                            urlLink = {elem.urlLink}
                            link = {elem.link}
                        />
                    ))
                }
                <li className="menu-link first:before:content-none before:content-['|'] before:mx-1.5 before:pointer-events-none">
                    <Link to={`/ro/${locate.pathname.split("/").splice(2).join('/')}`}>
                        <button value="ro" onClick={handleLanguageChange} className="hover:text-[#FFD905] transition-colors duration-300 font-extralight">Ro</button>
                    </Link>
                        
                </li>
                <li className="menu-link first:before:content-none before:content-['|'] before:mx-1.5 before:pointer-events-none">
                    <Link to={`/ru/${locate.pathname.split("/").splice(2).join('/')}`}> 
                    
                        <button value="ru" onClick={handleLanguageChange} className="hover:text-[#FFD905] transition-colors duration-300 font-extralight">Ru</button>
                    </Link>
                </li>
                <li className="menu-link first:before:content-none before:content-['|'] before:mx-1.5 before:pointer-events-none">
                    <Link to={`/en/${locate.pathname.split("/").splice(2).join('/')}`}>
                        <button value="en" onClick={handleLanguageChange} className="hover:text-[#FFD905] transition-colors duration-300 font-extralight">En</button>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default TopMenuLinks;