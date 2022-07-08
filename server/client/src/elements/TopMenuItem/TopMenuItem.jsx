import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const TopMenuItem = (props) => {
    const {urlLink, link} = props;
    const { t } = useTranslation(["locales"]);
    return (
        <>
            <li className="menu-link first:before:content-none before:content-['|'] before:mx-1.5 before:pointer-events-none">
                <Link to={urlLink} className="hover:text-[#FFD905] transition-colors duration-300">{t(link)}</Link>
            </li>
        </>
    );
}

export default TopMenuItem;