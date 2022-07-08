
import {useState} from 'react';


// props : (1)hover - component over which will be hover effect, 
// (2)options - box position, (3)triangel - triangel position (optional), 
// (4)boxContent - component with content which mast be inside the box.

export const DropMenu = (props) => {
   
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="relative pb-3" onMouseOver={()=>{setIsOpen(true)}} onMouseLeave={()=>{setIsOpen(false)}}>
                {/* componenta nad kotoroi hover */}
                {props.hover}
                {isOpen  &&(             
                    <div className={props.options}>
                        <div className="font-extralight  border border-[#333] box-border rounded-md bg-[#1b1a1b] z-40 px-4 py-3 min-w-[282px]"  onMouseOver={()=>{setIsOpen(true)}} onMouseLeave={()=>{setIsOpen(false)}}>
                            <div className={props.triangel ? props.triangel : "absolute -top-[11px] right-[70px]" }>
                        <div className="triangle-up w-0 h-0 border-l-[10px] border-l-solid border-l-transparent border-r-[10px] border-r-solid border-r-transparent border-b-[12px] border-l-solid border-b-[#333] absolute"></div>
                        <div className="triangel-up2 w-0 h-0 border-l-[8px] border-l-solid border-l-transparent border-r-[8px] border-r-solid border-r-transparent border-b-[10px] border-l-solid border-b-[#1b1a1b] absolute left-[2px] top-[2px]"></div>
                            </div>

                        {/* <SelfPhoneList phoneNumbers = {phoneNumbers}/> tut soderjimoe hover boxa */}
                            {props.boxContent}
                        </div>          
                    </div>
                )}
                
            </div>
        </>
    );
}

export default DropMenu;