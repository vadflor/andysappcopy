import Logo from "../Logo/Logo";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

export const Header = () =>{
    return (
        <>
          <header className="header w-screen fixed bg-gradient-to-b from-black to-[#0000008c] z-10 ">
            <div className="max-w-[1210px] container mx-auto pl-5 pr-5 h-40 flex">
                <Logo />
                <HeaderMenu />
            </div>
          </header>
        </>
    );
} 
export default Header;