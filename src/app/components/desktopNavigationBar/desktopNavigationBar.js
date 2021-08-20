import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import { countryList } from '../../../db/storeObjects';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../features/isLoggedInSlice';
import { setLocalization } from '../../features/localizationSlice';
import icon from '../../assets/icons/shuttle.png'
const DesktopNavigationBar = (props) => {

    const { pageName,  isUserInfoExist } = props;
    const countryInput = useRef(null);
    const dropdownMenu = useRef(null);
    const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
    const userInfo = useSelector((state) => state.userInfo);
    const localization = useSelector((state) => state.localization.localization);
    const dispatch = useDispatch()
    
    const handleLocalization = (e) => {
        e.stopPropagation()
        dispatch(setLocalization(countryInput.current.value));
    }
    const countryOptions = countryList.map(country => 
        <option key={country.id} value={country.id} selected={localization === country.id ? true : false}  >{country.name}</option>
    )

    const handleLogOut = () => {
        dispatch(logOut())
    }

    const handleDropdownMenu = () => {
        dropdownMenu.current.classList.toggle("hide");
    }

    return (
        <div className="desktop-navigation-bar">
               
                <div className="nav-bar-left-wing">
                    <div className="icon-holder">
                        <img className="icon" src={icon} />
                    </div>
                    <div className="page-name">
                        <p>{pageName ? pageName : 'Scorp'}</p>
                    </div>
                </div>
                <div className="nav-bar-right-wing">
                    <div >
                        <div className="link-holder">
                            <div><Link to="/" >{localization === 'TR' ? 'Ana Sayfa' : 'Homepage'}</Link> </div>
                            {!isLoggedIn ? <div><Link to="/login" >{localization === 'TR' ? 'Giriş' : 'Login'}</Link> </div> : null}                    
                            <div><Link to="/contact" >{localization === 'TR' ? 'Bize Ulaşın' : 'Contact Us'}</Link> </div>
                        </div>   
                    </div>
                    <div className="language-dropdown">
                    <select ref={countryInput} onClick={handleLocalization}  required >
                        {countryOptions}
                    </select>
                    </div>

                    {isLoggedIn 
                    ? 
                    <div>
                            <button className="user-info-button" onClick={handleDropdownMenu}>{userInfo.userName}</button>
                            <div ref={dropdownMenu} className="user-info-dropdown">
                                <span>{userInfo.email}</span>
                                <button onClick={handleLogOut}>{localization === 'TR' ? 'Çıkış Yap' : 'Log Out'}</button>
                            </div>
                        </div> 
                    : null}

                </div>
        </div>
    )
}

export default DesktopNavigationBar

