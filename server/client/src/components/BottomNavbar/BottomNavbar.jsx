import BottomNavbarItem from "../../elements/BottomNavbarItem/BottomNavbarItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect} from "react";
import { getBottomNavBarData } from '../../Redux/HeaderMenu/action.js';

export const BottomNavbar = () => {
    const dispatch = useDispatch();

    const state = useSelector(state => {
        return state.bottomNavBarData.data;
    });

    useEffect(()=>{    
        dispatch(getBottomNavBarData())
    },[])



    return (
        <>
            <div className="header-navbar w-4/5 pl-[4.8%] relative ">
                <ul className="text-white text-sm font-light flex">
                {
                    state.map((elem)=>{
                    return (
                        <BottomNavbarItem 
                                key={elem._id}
                                urlLink={elem.urlLink}
                                link={elem.link}
                                productsSubMenu = {elem.productsSubMenu}
                                servicesSubMenu = {elem.servicesSubMenu}
                        /> 
                    )    
                })  
                }
                </ul>
            </div>
        </>
    );
}

export default BottomNavbar;