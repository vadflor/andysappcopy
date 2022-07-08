class FormValidation {
    // name input validate =========
    checkName (str){
        str = str.replace(/[^A-Za-z\s]/g, '').replace(/^\s{0,}/g, '').replace(/\s{2,}/g, ' ');
        return str;
    };
    // if shorter or equal to the 3 characters ======
    checkLengthName (str){
        if(str.length <= 3){
            return '<p>The name is too short, please enter more characters!</p>';
        } else{
            return '';
        }
    };

    phoneNumberFormatter (str){
        str = str.replace(/[^0-9]/g, '');
        let temp = '';
        let formattedNumber = '';
        for(let i=0; i < str.length; i++){
            if(str[i] !== ' '){
                temp += str[i];
                let joy = temp.match(/.{1,3}/g);
                formattedNumber = joy.join('-');
            }
        }
        str = formattedNumber;
        str = str.substring(0,11);
        return str;
    };
}

export default FormValidation;