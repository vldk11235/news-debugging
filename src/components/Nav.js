import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';

export default function ResponsiveAppBar() {
    const [value, setValue] = useState(0);
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navItems = [
        {label: 'General', path: `/?category=general`},
        {label: 'Tech', path: `/?category=technology`},
        {label: 'Business', path: `/?category=business`},
        {label: 'Entertainment', path: `/?category=entertainment`},
        {label: 'Health', path: `/?category=health`},
        {label: 'Science', path: `/?category=science`},
    ];

    return (
        <AppBar position="static" sx={{backgroundColor: 'background.paper'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="open navigation menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {navItems.map((item) => (
                                <MenuItem key={item.label} onClick={handleCloseNavMenu} component={Link} to={item.path}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{display: {xs: 'none', md: 'flex'}, width: '100%', justifyContent: 'space-around'}}>
                        <Tabs value={value} onChange={handleChange} centered>
                            {navItems.map((item) => (
                                <Tab key={item.label} label={item.label} to={item.path} component={Link}/>
                            ))}
                        </Tabs>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

