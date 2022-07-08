import SelfPhoneItem from '../SelfPhoneItem/SelfPhoneItem';
import { useSelector } from 'react-redux';


export const SelfPhoneList = () => {
    
    const state = useSelector(state => {
        return state.locationData.data;
    });
    
    return (
        <>
            <ul className="w-full">
                {
                    state.map((item)=>(
                    <SelfPhoneItem 
                        key = {item._id}
                        city = {item.city}
                        phone = {item.phone}
                    />
                    ))  
                }
            </ul>
        </>
    );
}

export default SelfPhoneList;