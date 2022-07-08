import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const SubMenu = (props) => {
    const {productsSubMenu, servicesSubMenu, link, categoryLink} = props;
    
    const { t, i18n } = useTranslation(["locales"]);
    if(link === "menu"){
        return (
                <>
                    {
                        productsSubMenu.map((elem)=>{
                            return <div key={elem._id} className="pb-1">
                                        <Link to={`${i18n.language}${categoryLink}${elem.urlLink}`} 
                                            className="hover:text-[#FFD905] 
                                                        transition-colors 
                                                        duration-300 
                                                        hover:font-medium">
                                            {t(elem.link)}
                                        </Link>    
                                    </div>
                        })
                    }       
                </>
            )
    }
    if(link === "services"){
        return (
                <>
                    {
                        servicesSubMenu.map((elem)=>{
                            return <div key={elem._id} className="pb-1">
                                        <Link to={`${i18n.language}${categoryLink}${elem.urlLink}`} 
                                            className="hover:text-[#FFD905] 
                                                        transition-colors 
                                                        duration-300 
                                                        hover:font-medium">
                                            {t(elem.link)}
                                        </Link>    
                                    </div>
                        })
                    }       
                </>
            )
    }
}

export default SubMenu;