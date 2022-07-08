import BottomNavbar from "../BottomNavbar/BottomNavbar";
import HeaderLogin from "../HeaderLogin/HeaderLogin";
import HeaderBag from "../HeaderBag/HeaderBag";
import DropMenu from "../DropMenu/DropMenu";
import BagContent from "../BagContent/BagContent";


export const HeaderMenuBottom = () => {
    

    return (
        <>
            <div className="header-menu-bottom mt-7 flex items-center justify-between">
                <BottomNavbar/>
                <HeaderLogin />
                <DropMenu  
                    hover={<HeaderBag />} 
                    options={'absolute top-14 -right-12'}
                    boxContent={<BagContent />}    
                    />
                
            </div>
        </>
    );
}

export default HeaderMenuBottom;