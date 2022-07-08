

import { useTranslation } from "react-i18next";


export const FooterNavItem = (props) => {
    const {urlLink, link, id} = props;
    const { t } = useTranslation(["locales"]);

    return (
        <>
            {
                
                <li className="mb-4" key={id}>
                    <a className="hover:text-white transition-colors duration-300" href={urlLink}>{t(link)}</a>
                </li>
                
            } 
        </>
    );
}

export default FooterNavItem;