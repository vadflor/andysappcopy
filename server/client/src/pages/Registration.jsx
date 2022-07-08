import { Link } from "react-router-dom";
import { useState } from "react";
import ApiService from "../ApiService";
import FormValidation from "../utils/formValidation";
import { useTranslation } from "react-i18next";

export function Registration() {

const { t, i18n } = useTranslation(["locales"]);
const saveUser = new ApiService('https://andysappcopy.herokuapp.com');
const formValid = new FormValidation();
const [user, setUser] = useState({});
const [error, setError] = useState('');
const [errorObj, setErrorObj] = useState({});
const values = Object.values(errorObj);
const [pass, setPass] = useState('');

    function handleChange(e){

        switch (e.target.name) {
            case "name":
                const newValue = formValid.checkName(e.target.value);
                e.target.value = newValue;
                if(newValue.length >0 && newValue.length <=3){
                    setErrorObj({...errorObj, [e.target.name] : 'The name is too short, mast be more then 3 characters!'})
                }else {
                    setErrorObj({...errorObj, [e.target.name] : ''})
                    setUser({...user, ["username"] : e.target.value.trim()});
                }
                break;
            
            case "phone_number":
                const newNumber = formValid.phoneNumberFormatter(e.target.value);
                e.target.value = newNumber;
                if(newNumber.length > 0 && newNumber.length < 11){
                    setErrorObj({...errorObj, [e.target.name] : 'The phone number is too short, please enter valid phone number!'})
                } else { 
                    setErrorObj({...errorObj, [e.target.name] : ''})
                    setUser({...user, ["phonenumber"] : e.target.value.trim()});
                }
                break;
            
            case "email" : 
                
                const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(e.target.value.match(mailformat)){
                    setErrorObj({...errorObj, [e.target.name] : ''})
                    setUser({...user, [e.target.name] : e.target.value.trim()});
                } else {
                    setErrorObj({...errorObj, [e.target.name] : 'You have entered an invalid email address!'})
                }
                break;
            case "password":
                const passFormat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                if(e.target.value.trim().match(passFormat)){
                    setPass(e.target.value);
                    setErrorObj({...errorObj, [e.target.name] : ''})
                }else {
                    setErrorObj({...errorObj, [e.target.name] : 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!'})
                }      
                break;
            case "check_password":
                const pass2 = e.target.value;
                    if(pass2 === pass){
                        setErrorObj({...errorObj, [e.target.name] : ''})
                        setUser({...user, ["password"] : e.target.value.trim()});
                    }
                    else{
                        setErrorObj({...errorObj, [e.target.name] : 'The passwords not match!'})
                }
                break;
            default: break;
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        const formContainer = document.querySelectorAll(".form-container")[0];
        const inputElements = formContainer.querySelectorAll("input");
        const arrOfInputs = Array.from(inputElements);
        const inputsArr = arrOfInputs.slice(0, arrOfInputs.length-1)
        
        if(Object.keys(user).length+1 === inputsArr.length){
            setError('');
            console.log(user);
            saveUser.post("/register", user, {"Content-Type": "application/json"})
            document.forms[0].reset();
            setError('You have successfully registered!');
        } else {
            setError("Please fill all fields!");
        }
    }
    
    
    return (
        <div className="pt-[195px] pb-40">
            <div className="log-container max-w-[800px]  mx-auto ">                
                <div className="title py-[55px] flex items-end ">
                <Link to={`/${i18n.language}/login`} className="">
                    <div className="text-[#1976d2] text-sm cursor-pointer hover:text-[#FFD905] transition-colors duration-300 "><span className="text-xl">&#8249;</span>{t("back _to_sign")}</div>
                </Link>
                    
                    <h2 className="text-white text-3xl font-semibold">{t("create_accaunt")}</h2>
                </div>
                <div className="login-container h-auto border rounded-3xl border-white p-[25px] flex justify-center" >
                <div className="w-3/4 flex flex-col items-center">
                    <div className="sign-in-title text-white text-2xl font-semibold text-center pb-4">{t("registration")}</div>
                    <form className="form-container w-3/4">
                        <input type="text"
                                placeholder={t("your_name")}
                                name="name"
                                onChange={handleChange}
                                autoComplete="off"
                                className="border w-full border-[#bfbfbf] rounded-lg p-[16px] outline-none mb-4 block" 
                        />
                        <input type="text"
                                placeholder={t("phone_number")}
                                name="phone_number"
                                onChange={handleChange}
                                autoComplete="off"
                                className="border w-full border-[#bfbfbf] rounded-lg p-[16px] outline-none mb-4 block" 
                        />
                        <input type="email"
                                placeholder={t("your_email")}
                                name="email"
                                onChange={handleChange}
                                autoComplete="off"
                                className="border w-full border-[#bfbfbf] rounded-lg p-[16px] outline-none mb-4 block" 
                        />
                        <input type="password"
                                placeholder={t("passsword")}
                                name="password"
                                onChange={handleChange}
                                className="border w-full border-[#bfbfbf] rounded-lg p-[16px] outline-none mb-4 block" 
                        />
                        <input type="password"
                                placeholder={t("check_password")}
                                name="check_password"
                                onChange={handleChange}
                                className="border w-full border-[#bfbfbf] rounded-lg p-[16px] outline-none mb-4 block" 
                        />
                        <div className="text-white text-center">{values.map((item)=>(
                                <div key={Math.random()}>{item}</div>
                            ))}</div>
                        <div className="text-white text-center">{error}</div>

                        <input type="submit"
                                value={t("submit")}
                                className="registration-submit w-full bg-[#FFD905] border border-[#bfbfbf] rounded-lg p-[16px] outline-none mt-16 mb-4 block
                                font-bold text-xl cursor-pointer active:bg-[#e4c304]" onClick={handleSubmit}
                        />
                    </form>
                </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Registration;