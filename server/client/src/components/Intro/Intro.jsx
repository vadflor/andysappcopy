import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopSliderData } from '../../Redux/HeaderMenu/action.js';

export const Intro = () => {
    const dispatch = useDispatch();

    const state = useSelector(state => {
        return state.topSliderData.data;
    });

    useEffect(()=>{    
        dispatch(getTopSliderData())
    },[])

    return (
        <>
            {
                state.map((elem)=>(
                    <div className="intro flex justify-center h-[795px]" key={elem._id}>
                        <img src={elem.imgUrl} alt="" className="object-cover"/>
                    </div>
                ))
            }
        </>
    );
}

export default Intro;