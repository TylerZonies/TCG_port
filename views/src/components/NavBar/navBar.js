import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Navbar, NavItem, Button } from 'react-materialize';
// import AuthModal from './authModal.js'


function checkAuthStatus(props){
    if(props.isLoggedIn){
        return (
            <Button waves='light' onClick={props.handleLogout}>Log Out</Button>
        )
    } else {
        return (
            // <AuthModal exec={props.handleAuth}/>
            <p>not logged in</p>
        )
    }
}
const HeaderNav = (props) => (
        <Navbar brand='TCG_Port' right>
            {/* <Router> */}
                <NavItem>
                    <Link to='/'>Home</Link>
                </NavItem>
                <NavItem>
                    <Link to='/collection'>Collection</Link>
                </NavItem>
                <NavItem>
                    <Link to='/organize'>Organize</Link>
                </NavItem>
                <NavItem>
                    {checkAuthStatus(props)}
                </NavItem>
            {/* </Router> */}
        </Navbar>
)

export default HeaderNav;