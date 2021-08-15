import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, discardUser } from '../../features/userSlice';
import { login } from '../../features/isLoggedInSlice';
import { countryList } from '../../../db/storeObjects';
import { setLocalization } from '../../features/localizationSlice';

const Login = (props) => {

    const nameInput = useRef(null);
    const mailInput = useRef(null);
    const passwordInput = useRef(null);
    const localeInput = useRef(null);
    const dispatch = useDispatch()

    const countryOptions = countryList.map(country => 
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
        dispatch(setUser(payload))
        dispatch(login());
        dispatch(setLocalization(localeInput.current.value));
        
        console.log(nameValue, mailValue, passwordValue);
    }



    return( 
        <div className="login-page">
            <div className="login-page-form">
                <h2>Login Form</h2>
                <label>Name</label>
                <input ref={nameInput} type="text" autoFocus required  />
                <label>Email</label>
                <input ref={mailInput} type="text" required />
                <label>Password</label>
                <input ref={passwordInput} type="password" required />
                <select ref={localeInput}  required  >
                        {countryOptions}
                </select>
                <button onClick={handleLogin}>Login</button>

            </div>
            
        </div>
    )
}

export default Login