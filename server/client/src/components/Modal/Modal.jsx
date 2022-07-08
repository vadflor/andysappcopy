import ReactDom from 'react-dom'
import { useNavigate, useLocation } from "react-router-dom";
import { MdClose } from 'react-icons/md';
import { useTranslation } from "react-i18next";

function Modal({ imgUrlBig, productPrice, categoryUrl, productName, isOpen,onOpen, onClose}) {
    const { t, i18n } = useTranslation(["locales"]);
    let navigate = useNavigate();
    let location = useLocation();

    
    // if(location.pathname === `/${i18n.language}${categoryUrl}/${productName.toLowerCase().replaceAll(' ','-')}`){
    //     onOpen()

    // }

    function handleOnClick(){
        onClose();
        if(location.key==="default"){
            navigate(`/`)
            
        }else {
            navigate(-1);
        }
        
    }

    
    if(!isOpen) return null;
    return ReactDom.createPortal(
        
        <div className="flex justify-center ">
                {console.log("modal open ")}
        <div className="shadow-modal fixed top-0 bottom-0 left-0 right-0 bg-[#0000008f] z-20" onClick={handleOnClick}></div>
            <div className="modal-content z-30 fixed top-0 bottom-0 p-5 overflow-auto">
            <div className="relative  w-full max-w-6xl box-border flex">
                <div className="img-left w-[60%] z-20">
                    <img 
                        src={imgUrlBig} 
                        alt="" 
                        className="modal-img rounded-xl "
                        />
                </div>
                <div className="content-right flex flex-col justify-between w-[40%] box-border bg-[#1b1a1b]  rounded-tr-xl rounded-br-xl relative my-5">
                    <div className="modal-btn-close absolute right-3 top-3 text-white cursor-pointer ">
                        <MdClose className="text-5xl" onClick={handleOnClick}/>
                    </div>
                    <div className="description text-white mt-14 pl-9 pointer-events-none">
                        <div className="title text-3xl font-bold">{productName}</div>
                        <div className="about mt-4 text-lg font-extralight">Треугольнички с сырной начинкой, масло для фритюра, сметана, укроп.</div>
                        <div className="weight mt-4 text-lg font-extralight">220/50 {t("gramm")}</div>
                    </div>
                    <div className="price-and-btn text-white px-9">
                        <div className="price flex justify-between items-center">
                            <div className="text-xl font-bold pointer-events-none">{t("total")}:</div>
                            <div className="text-2xl font-bold pointer-events-none">{productPrice} mdl</div>
                        </div>
                        <button className="w-full flex items-center justify-center bg-[red] hover:bg-[#c90101] transition-colors duration-300 py-3 rounded-md my-7 text-2xl font-bold">{t("order")} 
                            <svg width="18" height="18" fill="currentColor" className="bi bi-cart-plus ml-3 " viewBox="0 0 16 16">
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>, document.body
    )
}

export default Modal;