import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  logOut } from '../../features/isLoggedInSlice';
import { Link } from 'react-router-dom';
import icon from '../../assets/icons/shuttle.png'
const MobileNavigationBar = () => {

    const localization = useSelector((state) => state.localization.localization);
    const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn);
    const userInfo = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();

    const menuDropdown = useRef(null)

    const handleLogOut = () => {
        dispatch(logOut())
    }

    const handleDropdown = (e) => {
        e.stopPropagation();
        menuDropdown.current.classList.toggle("hide");

    }

    return (
        <div className="mobile-navigation-bar">
            <div className="page-name-mobile">
                <p>{'Scorp'}</p>
            </div>
            <div className="icon-holder-mobile" onClick={handleDropdown}>
                <img className="icon-mobile" src={icon} />
            </div>
            <div ref={menuDropdown} className="mobile-menu-dropdown hide">
                <div className="link-holder-mobile">
                    <div><Link to="/" >{localization === 'TR' ? 'Ana Sayfa' : 'Homepage'}</Link> </div>
                    {!isLoggedIn ? <div><Link to="/login" >{localization === 'TR' ? 'Giriş' : 'Login'}</Link> </div> : null}                    
                    <div><Link to="/contact" >{localization === 'TR' ? 'Bize Ulaşın' : 'Contact Us'}</Link> </div>
                </div> 
                <div className="user-info-mobile">
                {isLoggedIn 
                    ? 
                    <div>
                            <span  >{userInfo.userName}</span>                            
                            <span>{userInfo.email}</span>
                            <button onClick={handleLogOut}>{localization === 'TR' ? 'Çıkış Yap' : 'Log Out'}</button>
                        </div> 
                    : null}
                </div>  
            </div>
         
            <div className="hamburger-menu-mobile">

            </div>
        </div>
    )
}

export default MobileNavigationBar