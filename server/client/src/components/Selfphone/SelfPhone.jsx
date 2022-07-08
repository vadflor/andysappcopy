import SelfPhoneList from '../SelfPhoneList/SelfPhoneList';
import {useState} from 'react';

import { useEffect} from "react";
import { useDispatch} from "react-redux";
import { getLocationData } from '../../Redux/HeaderMenu/action.js';

export const Selfphone = () => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{    
        dispatch(getLocationData())
    },[])
    
    return (
        <>
            <div className="selfphone relative " onMouseOver={()=>{setIsOpen(true)}} onMouseLeave={()=>{setIsOpen(false)}}>
                <div className="selfphonenumber  cursor-pointer hover:text-white transition-colors duration-300" >
                    <span className="selfphone-city pb-[15px] font-extralight text-sm">Chișinău:</span>
                    <span className="selfphone-number pb-[15px] font-light text-xl pl-1">022-210-210</span>
                    <span className="selfphone-arrow-down pb-[15px] pl-1"><i className="fa-solid fa-angle-down"></i></span>
                </div>
                
                {isOpen &&(             
                    <div className="dropdown-selfphone font-extralight absolute border border-[#333] box-border rounded-md bg-[#1b1a1b] z-40 px-4 py-3 min-w-[282px] top-10 -left-11" onMouseOver={()=>{setIsOpen(true)}} onMouseLeave={()=>{setIsOpen(false)}}>
                        <div className="triangel relative -top-[24px] left-48">
                        <div className="triangle-up w-0 h-0 border-l-[10px] border-l-solid border-l-transparent border-r-[10px] border-r-solid border-r-transparent border-b-[12px] border-l-solid border-b-[#333] absolute"></div>
                        <div className="triangel-up2 w-0 h-0 border-l-[8px] border-l-solid border-l-transparent border-r-[8px] border-r-solid border-r-transparent border-b-[10px] border-l-solid border-b-[#1b1a1b] absolute left-[2px] top-[2px]"></div>
                        </div>
                        <SelfPhoneList/>
                    </div>           
                )}
                
            </div>
        </>
    );
}

export default Selfphone;