import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import { countryList } from '../../../db/storeObjects';
import { useSelector, useDispatch } from 'react-redux';
import { login, logOut } from '../../features/isLoggedInSlice';
import { setLocalization } from '../../features/localizationSlice';
const DesktopNavigationBar = (props) => {

    const { pageName,  isUserInfoExist } = props;
    const countryInput = useRef(null);
    const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
    const userInfo = useSelector((state) => state.userInfo);
    const dispatch = useDispatch()
    console.log(userInfo);

    const handleLocalization = (e) => {
        e.stopPropagation()
        dispatch(setLocalization(countryInput.current.value));
    }
    const countryOptions = countryList.map(country => 
        <option key={country.id} value={country.id}  >{country.name}</option>
    )

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        <div className="desktop-navigation-bar">
               
                <div className="nav-bar-left-wing">
                    <div className="icon-holder">
                        <i></i>
                    </div>
                    <div className="page-name">
                        <p>{pageName ? pageName : 'Scorp'}</p>
                    </div>
                </div>
                <div className="nav-bar-right-wing">
                    <div className="link-holder">
                        <ul>
                            <li><Link to="/" >Home</Link> </li>
                            {!isLoggedIn ? <li><Link to="/login" >Login</Link> </li> : null}                    
                            <li><Link to="/contact" >Contact Us</Link> </li>
                        </ul>   
                    </div>
                    <div className="language-dropdown">
                    <select ref={countryInput} onClick={handleLocalization} required >
                        {countryOptions}
                    </select>
                    </div>

                    {isLoggedIn 
                    ? 
                    <div>
                            <button>{userInfo.userName}</button>
                            <div>
                                <span>{userInfo.email}</span>
                                <button onClick={handleLogOut}>Log Out</button>
                            </div>
                        </div> 
                    : null}

                </div>
        </div>
    )
}

export default DesktopNavigationBar

