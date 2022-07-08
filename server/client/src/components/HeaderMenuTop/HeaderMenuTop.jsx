import Selfphone from "../Selfphone/SelfPhone";
import BrandsListLogo from "../BrandsListLogo/BrandsListLogo";
import TopMenuLinks from "../TopMenuLinks/TopMenuLinks";

export const HeaderMenuTop = () => {


    return (
        <>
            <div className="header-menu-top flex justify-between text-stone-400 ml-[4.8%]">
                <Selfphone />
                <BrandsListLogo />
                <TopMenuLinks />
            </div>
        </>
    );
}

export default HeaderMenuTop;