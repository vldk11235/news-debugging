import React from 'react';
import {Link} from 'react-router-dom';



const Nav = () => {
    return(
        <nav className="nav">
            <Link to={`/top-headlines?category=general`}>General</Link>
            <Link to={`/top-headlines?category=technology`}>Tech</Link>
            <Link to={`/top-headlines?category=business`}>Business</Link>
            <Link to={`/top-headlines?category=entertainment`}>Entertainment</Link>
            <Link to={`/top-headlines?category=health`}>health</Link>
            <Link to={`/top-headlines?category=science`}>science</Link>
        </nav>
    )

};

export default Nav;