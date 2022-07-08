import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ApiService from "../ApiService";



export function Login() {
    const { t, i18n } = useTranslation(["locales"]);
    const [errorObj, setErrorObj] = useState({});
    const values = Object.values(errorObj);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const loginUser = new ApiService('https://andysappcopy.herokuapp.com');

    
    function handleChange(e) {
        switch (e.target.name) {
            case "email":
                const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (e.target.value.match(mailformat)) {
                    setErrorObj({ ...errorObj, [e.target.name]: '' })
                    setUser({ ...user, [e.target.name]: e.target.value.trim() });
                } else {
                    setErrorObj({ ...errorObj, [e.target.name]: 'You have entered an invalid email address!' })
                }
                break;

            case "password":
                
                if (e.target.value !== '') {
                    setUser({ ...user, [e.target.name]: e.target.value.trim() });
                    setErrorObj({ ...errorObj, [e.target.name]: '' })
                }
                break;
            default: break;
        }
    }

    function handlerSubmit(e) {
        e.preventDefault();
        if (Object.values(user).length === 2) {
            setError('');
            loginUser.post("/login", user, {"Content-Type": "application/json"})
            .then(res => {
                console.log(res)
                setError(res.message)
            })
        } else {
            setError('Please fill all fields!');
        }
    }


    return (
        <div className="pt-[195px] pb-40">
            <div className="log-container max-w-[800px]  mx-auto ">
                <div className="title text-white text-3xl font-semibold text-center py-[55px]"><h2>{t("title_login")}</h2></div>
                <div className="login-container h-[506px] border rounded-3xl border-white p-[25px] flex" >
                    <div className="left w-6/12 border-r border-white pr-6">
                        <div className="sign-in-title text-white text-2xl font-semibold text-center pb-4">{t("returning_customers")}</div>
                        <div className="sign-in-form">
                            <form className="flex flex-col">
                                <input type="email"
                                    placeholder={t("your_email")}
                                    required
                                    name="email"
                                    onChange={handleChange}
                                    className="border border-[#bfbfbf] rounded-lg p-[16px] outline-none mb-4" />
                                <input type="password"
                                    placeholder={t("passsword")}
                                    required
                                    name="password"
                                    onChange={handleChange}
                                    className="border border-[#bfbfbf] rounded-lg p-[16px] outline-none"
                                />
                                <a href="#" className="text-blue-600 text-sm font-semibold my-3">{t("forgot_password")}</a>
                                <input type="submit" value={t("login")} onClick={handlerSubmit} className="bg-[#FFD905] font-bold text-xl py-4 border border-[#bfbfbf] rounded-lg cursor-pointer hover:bg-[#e0bf03] transition-colors duration-300" />
                            </form>
                        </div>
                        <div className="separator text-center my-6 relative">
                            <span className="text-white bg-[#1b1a1b] z-10  text-sm font-semibold px-3
                    after:content-[''] after:h-px after:bg-white after:absolute after:-z-10 after:left-0 after:right-0 after:block after:top-1/2 ">{t("create_accaunt")}</span>
                        </div>
                        <Link to={`/${i18n.language}/registration`}> 
                            <button className="w-full bg-white border border-[#bfbfbf] rounded-lg p-[16px] font-bold text-xl hover:bg-[#e0bf03]">{t("register")}</button>
                        </Link>
                    </div>
                    <div className="right w-6/12">

                        <div className="text-white text-center">{values.map((item) => (
                            <div key={Math.random()}>{item}</div>
                        ))}
                            <div className="ml-2">{error}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;