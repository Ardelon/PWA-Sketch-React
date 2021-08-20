import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Homepage from '../view/homepage/homepage';
import Login from '../view/login/login';
import ContactUs from '../view/contactUs/contactUs';
import DesktopNavigationBar from '../components/desktopNavigationBar/desktopNavigationBar';
import Footer from '../components/footer/footer';
import { useSelector } from 'react-redux';
import MobileNavigationBar from '../components/mobileNavigationBar/mobileNavigationBar';

const RouterComponent = (props) => {

    const isLoggedIn = useSelector((state) => state.isLoggedIn.isLoggedIn)

    return(
        <Router>
            <DesktopNavigationBar />
            <MobileNavigationBar />
            <Switch>
                    <Route exact path="/" component={Homepage} ></Route>
                    <Route path="/contact" component={ContactUs} >{!isLoggedIn ? <Redirect to="/login"/> : null}</Route>
                    <Route path="/login" component={Login} >{isLoggedIn ? <Redirect to="/"/> : null }</Route>
            </Switch>
            <Footer/>
        </Router>
    )
}



export default RouterComponent