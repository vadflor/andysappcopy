import FooterNav from "../FooterNav/FooterNav";
import FooterInfo from "../FooterInfo/FooterInfo";


export const Footer = () => {

    return (
      <>
        <footer>
          <div className="max-w-[1366px] mx-auto border-t-8 border-red-700">
            <div className="container max-w-[1210px] mx-auto flex justify-between py-20">
              <FooterNav />
              <FooterInfo />
            </div>
          </div>
      </footer>
    </>
    );
}

export default Footer;