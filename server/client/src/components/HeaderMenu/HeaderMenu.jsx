import HeaderMenuTop from "../HeaderMenuTop/HeaderMenuTop";
import HeaderMenuBottom from "../HeaderMenuBottom/HeaderMenuBottom";

export const HeaderMenu = () => {

    return (
        <>
            <div className="header-menu w-10/12 mt-4">
                <HeaderMenuTop/>
                <HeaderMenuBottom />
            </div>
        </>
    );
}

export default HeaderMenu;