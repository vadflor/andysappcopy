import DropMenu from "../../components/DropMenu/DropMenu";
import BottomNavBarItemWithDropDownMenu from "../BottomNavBarItemWithDropDownMenu/BottomNavBarItemWithDropDownMenu";
import SubMenu from '../../components/SubMenu/SubMenu';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const BottomNavbarItem = (props) => {
    const {urlLink, link, productsSubMenu, servicesSubMenu} = props;
    const { t, i18n } = useTranslation(["locales"]);
    
    if(productsSubMenu.length === 0 && servicesSubMenu.length ===0){
        return (
                <li className="mr-[4.2%]">
                    <Link to={`${i18n.language}${urlLink}`} className="hover:text-[#FFD905] transition-colors duration-300">{t(link)}</Link>
                </li>
        )
    } else {
        return(
                <DropMenu 
                    hover={<BottomNavBarItemWithDropDownMenu urlLink={`${i18n.language}${urlLink}`} link={link}/>} 
                    options={'absolute top-8 left-0'} 
                    triangel={'absolute -top-[11px] left-10'}
                    boxContent={<SubMenu productsSubMenu={productsSubMenu} servicesSubMenu={servicesSubMenu} link={link} categoryLink={urlLink}/>}
                />
        )
    }
    
}

export default BottomNavbarItem;