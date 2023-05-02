import React from 'react';
import Nav from './Nav';
import Logo from "./Logo";
import CenteredTabs from "./Nav";

const Header = () => {
    return(
        <div className="header">
            <Logo />
            {/*<Nav />*/}
            <CenteredTabs></CenteredTabs>
        </div>
    )
};

export default Header;