import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

// const Nav = () => {
    return(
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>

                {/*<nav className="nav">*/}
                <Tab label="General" to={`/?category=general`} component={Link} />
                <Tab label="Tech" to={`/?category=technology`} component={Link} />
                <Tab label="Business" to={`/?category=business`} component={Link} />
                     <Tab label="Entertainment" to={`/?category=entertainment`} component={Link} />
                    <Tab label="Health" to={`/?category=health`} component={Link} />
                    <Tab label="Science" to={`/?category=science`} component={Link} />
                {/*</nav>*/}







            </Tabs>
        </Box>

    )

};

// export default Nav;