import { useTranslation } from "react-i18next";
import FooterNavItem from "../FooterNavItem/FooterNavItem.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFooterData } from '../../Redux/HeaderMenu/action.js'

export const FooterNav = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation(["locales"]);

    const state = useSelector(state => {
        return state.footerData.data;
    });
    
    useEffect(()=>{
        dispatch(getFooterData())
    },[])

    return (
        <>
            <div className="footer-nav flex w-8/12">
                {
                    state.map((elem)=>(
                    
                    <div className="footer-nav-cat mr-[12%]" key={elem._id}>
                        <div className="footer-nav-title text-[#FFD905] mb-6 pointer-events-none pr-7">{t(elem.footerNavTitle)}</div>
                        <ul className="text-neutral-700 text-sm ">
                            {
                                (elem.footerCompanyList.length !==0)  ? elem.footerCompanyList.map((item)=>{
                                    return <FooterNavItem key={item._id} urlLink={item.urlLink} link={item.link} id={item._id}/>
                                }) : (elem.footerServicesList.length !==0)  ? elem.footerServicesList.map((item)=>{
                                    return <FooterNavItem key={item._id} urlLink={item.urlLink} link={item.link} id={item._id}/>
                                }) :  (elem.footerDeliveryCityList.length !==0)  ? elem.footerDeliveryCityList.map((item)=>{
                                    return <FooterNavItem key={item._id} urlLink={item.urlLink} link={item.link} id={item._id}/>
                                }) : null
                            }
                        </ul>
                    </div>
                    ))
                }
            </div>
        </>
    );
}

export default FooterNav;