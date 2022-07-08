import { useTranslation } from "react-i18next";

import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBottomSliderData } from '../../Redux/HeaderMenu/action.js';

export const PresentImgSlider = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation(["locales"]);
    
    const state = useSelector(state => {
        return state.bottomSliderData.data;
    });

    useEffect(()=>{    
        dispatch(getBottomSliderData())
    },[])

    return (
        <>
            <div className="present flex justify-center mt-16">
                <div className="present-img text-white relative z-0">
                    {
                        state.map((elem)=>(
                        <div key={elem._id}>
                            <img src={elem.imgUrl} alt=''/>
                        </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default PresentImgSlider;