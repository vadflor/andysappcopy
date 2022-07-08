import { Link } from "react-router-dom";


export const Logo = () => {
    return (
        <>
            <div className="header-logo w-2/12">
                <div className="logo-wrapper max-w-[125px] mt-[33.5px]">
                    <Link to="/">
                        <img src="https://andys.md/assets/img/logo.svg" alt="logo"/>
                    </Link>
                    
                </div>
            </div>
        </>
    );
}

export default Logo;