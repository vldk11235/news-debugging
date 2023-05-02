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

                <nav className="nav">
                    <Link to={`/top-headlines?category=general`}> <Tab label="General" /></Link>
                    <Link to={`/top-headlines?category=technology`}><Tab label="Tech" /></Link>
                    <Link to={`/top-headlines?category=business`}> <Tab label="Business" /></Link>
                    <Link to={`/top-headlines?category=entertainment`}><Tab label="Entertainment" /></Link>
                    <Link to={`/top-headlines?category=health`}> <Tab label="Health" /></Link>
                    <Link to={`/top-headlines?category=science`}><Tab label="Science" /></Link>
                </nav>







            </Tabs>
        </Box>

    )

};

// export default Nav;