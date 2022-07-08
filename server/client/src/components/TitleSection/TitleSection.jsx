import { IoIosArrowForward } from 'react-icons/io';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

export const TitleSection = (props) => {
    const {sectionTitle, urlLink , category} = props;
    const { t, i18n } = useTranslation(["locales"]);
    return (
        <>
            <div className="title-pizza max-w-[1210px] container mx-auto pl-5 pr-5">
                <div className="prodheader flex text-white justify-between pt-8 border-b border-[#2c2c2c] pb-[10px]">
                    <div className="prodhead-title text-[2.375em] font-extrabold pointer-events-none first-letter:uppercase">
                        {t(sectionTitle)}
                    </div>
                    <div className="prodhead-linkto uppercase text-gray-500 text-[.875em] self-end">
                        <Link to={`/${i18n.language}${category}${urlLink}`} className="flex items-center hover:text-white transition-colors duration-300">{t("go_to_menu")} {t(sectionTitle)}
                            <IoIosArrowForward className='text-xl mb-[1px]'/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TitleSection;