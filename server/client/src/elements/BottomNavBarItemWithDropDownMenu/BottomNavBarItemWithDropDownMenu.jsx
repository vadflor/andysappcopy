import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const BottomNavBarItemWithDropDownMenu = (props) => {
    const {urlLink, link} = props;
    const { t } = useTranslation(["locales"]);

    return (
        <>
            <li className="mr-[4.2%] flex items-center mr-6 hover:text-[#FFD905] transition-colors duration-300">
                <Link to={urlLink} className="">{t(link)}</Link>
                <i className="fa-solid fa-angle-down ml-1.5 "></i>
            </li>

        </>
    );
}

export default BottomNavBarItemWithDropDownMenu;