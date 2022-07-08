import { useTranslation } from "react-i18next";


export const SelfPhoneItem = (props) => {
    const {city, phone} = props;
    const { t } = useTranslation(["locales"]);
    
    return (
        <>
            <li className="parent cursor-pointer flex items-center hover:text-[#FFD905] transition-colors duration-300">
                <span className="text-sm w-[44%] border-r border-[#303032] py-1 ">{t(city)}</span>
                <a className="last-child text-xl pl-4" href={`tel:${phone.replaceAll('-','')}`}>{phone}</a>
            </li>
        </>
    );
}

export default SelfPhoneItem;