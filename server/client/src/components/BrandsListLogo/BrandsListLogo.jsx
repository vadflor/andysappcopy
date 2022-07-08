import BrandItemLogo from "../BrandItemLogo/BrandItemLogo";
import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrandListLogoData } from '../../Redux/HeaderMenu/action.js';


export const BrandsListLogo = () => {
    const dispatch = useDispatch();

    const state = useSelector(state => {
        
        return state.brandListLogoData.data
    });


useEffect(()=>{    
    dispatch(getBrandListLogoData())
},[])
    return (
        <> 
            <div className="brands-list grid grid-cols-3 items-center justify-center text-center justify-items-center">
                {
                    state.map((elem)=>(    
                        <BrandItemLogo 
                            key = {elem._id}
                            urlLink = {elem.urlLink}
                            imgLink = {elem.imgLink}
                            alt = {elem.alt}
                            className = {elem.className}
                        />
                    ))
                }

            </div>
        </>
    );
}

export default BrandsListLogo;