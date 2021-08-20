import React, {useEffect, useRef, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, discardUser } from '../../features/userSlice';
import { login } from '../../features/isLoggedInSlice';
import { countryList, countryListTR } from '../../../db/storeObjects';
import { setLocalization } from '../../features/localizationSlice';
import validate from 'validate.js';


const Login = (props) => {

    const nameInput = useRef(null);
    const mailInput = useRef(null);
    const passwordInput = useRef(null);
    const localeInput = useRef(null);
    const dispatch = useDispatch();
    const localization = useSelector((state) => state.localization.localization)

    const countryListSelection = localization === 'TR' ? countryListTR : countryList
    const countryOptions = countryListSelection.map(country => 
        <option key={country.id} value={country.id}  >{country.name}</option>
    )

    const handleLogin = () => {

        const nameValue = nameInput.current.value;
        const mailValue = mailInput.current.value;
        const passwordValue = passwordInput.current.value;
        const payload = {
            userName : nameValue,
            email : mailValue,
            password : passwordValue
        }
        const mailconstraints = {
            from: {
              email: true
            }
          };

        const isMailNotValid = validate({from: mailValue}, mailconstraints);

          if (isMailNotValid) {
            mailInput.current.style = 'border:1px solid red';
        } else if (nameValue.length < 3 ) {
            nameInput.current.style = "border:1px solid red"
        } else if (passwordValue.length < 6) {
            passwordInput.current.style = "border: 1px solid red"
        } else {

            dispatch(setUser(payload))
            dispatch(login());
            dispatch(setLocalization(localeInput.current.value));
        }
    }

 

    return( 
        <div className="login-page">
            <div className="login-page-form">
                <h2>{localization === 'TR' ? "Giriş Formu" : "Login Form"}</h2>
                <label>{localization === 'TR' ? "İsim" : "Name"}</label>
                <input ref={nameInput} type="text" autoFocus required  />
                <label>{localization === 'TR' ? "Eposta" : "Email"}</label>
                <input ref={mailInput} type="text" required />
                <label>{localization === 'TR' ? "Parola" : "Password"}</label>
                <input ref={passwordInput} type="password" required />
                <select ref={localeInput}  required  >
                        {countryOptions}
                </select>
                <button onClick={handleLogin}>{localization === 'TR' ? "Giriş Yap" : "Login"}</button>

            </div>
            
        </div>
    )
}

export default Login