// // import React, {useState} from 'react';
// // import {Link} from 'react-router-dom';
// // import Box from '@mui/material/Box';
// // import Tabs from '@mui/material/Tabs';
// // import Tab from '@mui/material/Tab';
// // import Container from "@mui/material/Container";
// // import Toolbar from "@mui/material/Toolbar";
// // import AdbIcon from "@mui/icons-material/Adb";
// // import Typography from "@mui/material/Typography";
// // import IconButton from "@mui/material/IconButton";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import Menu from "@mui/material/Menu";
// // import MenuItem from "@mui/material/MenuItem";
// // import Button from "@mui/material/Button";
// // import Tooltip from "@mui/material/Tooltip";
// // import Avatar from "@mui/material/Avatar";
// // import AppBar from "@mui/material/AppBar";
// //
// //
// // export default function CenteredTabs() {
// //     const [value, setValue] = React.useState(0);
// //
// //     const handleChange = (event, newValue) => {
// //         setValue(newValue);
// //     };
// //     const [anchorElNav, setAnchorElNav] = React.useState(null);
// //     // const [anchorElUser, setAnchorElUser] = React.useState(null);
// //
// //     const handleOpenNavMenu = (event) => {
// //         setAnchorElNav(event.currentTarget);
// //     };
// //     // const handleOpenUserMenu = (event) => {
// //     //     setAnchorElUser(event.currentTarget);
// //     // };
// //
// //     const handleCloseNavMenu = () => {
// //         setAnchorElNav(null);
// //     };
// //
// //     // const handleCloseUserMenu = () => {
// //     //     setAnchorElUser(null);
// //     // };
// //
// //     return (
// //
// //         <AppBar position="static">
// //             <Container maxWidth="xl">
// //                 <Toolbar disableGutters>
// //                     <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
// //                     <Typography
// //                         variant="h6"
// //                         noWrap
// //                         component="a"
// //                         href="/"
// //                         sx={{
// //                             mr: 2,
// //                             display: { xs: 'none', md: 'flex' },
// //                             fontFamily: 'monospace',
// //                             fontWeight: 700,
// //                             letterSpacing: '.3rem',
// //                             color: 'inherit',
// //                             textDecoration: 'none',
// //                         }}
// //                     >
// //                         LOGO
// //                     </Typography>
// //
// //                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
// //                         <IconButton
// //                             size="large"
// //                             aria-label="account of current user"
// //                             aria-controls="menu-appbar"
// //                             aria-haspopup="true"
// //                             onClick={handleOpenNavMenu}
// //                             color="inherit"
// //                         >
// //                             <MenuIcon />
// //                         </IconButton>
// //                         <Menu
// //                             id="menu-appbar"
// //                             anchorEl={anchorElNav}
// //                             anchorOrigin={{
// //                                 vertical: 'bottom',
// //                                 horizontal: 'left',
// //                             }}
// //                             keepMounted
// //                             transformOrigin={{
// //                                 vertical: 'top',
// //                                 horizontal: 'left',
// //                             }}
// //                             open={Boolean(anchorElNav)}
// //                             onClose={handleCloseNavMenu}
// //                             sx={{
// //                                 display: { xs: 'block', md: 'none' },
// //                             }}
// //                         >
// //                             {pages.map((page) => (
// //                                 <MenuItem key={page} onClick={handleCloseNavMenu}>
// //                                     <Typography textAlign="center">{page}</Typography>
// //                                 </MenuItem>
// //                             ))}
// //                         </Menu>
// //                     </Box>
// //                     <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
// //                     <Typography
// //                         variant="h5"
// //                         noWrap
// //                         component="a"
// //                         href=""
// //                         sx={{
// //                             mr: 2,
// //                             display: { xs: 'flex', md: 'none' },
// //                             flexGrow: 1,
// //                             fontFamily: 'monospace',
// //                             fontWeight: 700,
// //                             letterSpacing: '.3rem',
// //                             color: 'inherit',
// //                             textDecoration: 'none',
// //                         }}
// //                     >
// //                         LOGO
// //                     </Typography>
// //                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
// //                         {pages.map((page) => (
// //                             <Button
// //                                 key={page}
// //                                 onClick={handleCloseNavMenu}
// //                                 sx={{ my: 2, color: 'white', display: 'block' }}
// //                             >
// //                                 {page}
// //                             </Button>
// //                         ))}
// //                     </Box>
// //
// //
// //                 </Toolbar>
// //             </Container>
// //         </AppBar>
// //
// //
// //
// //
// //         // <Box sx={{width: '100%', bgcolor: 'background.paper'}}>
// //         //     <Tabs value={value} onChange={handleChange} centered>
// //         //
// //         //
// //         //         <Tab label="General" to={`/?category=general`} component={Link}/>
// //         //         <Tab label="Tech" to={`/?category=technology`} component={Link}/>
// //         //         <Tab label="Business" to={`/?category=business`} component={Link}/>
// //         //         <Tab label="Entertainment" to={`/?category=entertainment`} component={Link}/>
// //         //         <Tab label="Health" to={`/?category=health`} component={Link}/>
// //         //         <Tab label="Science" to={`/?category=science`} component={Link}/>
// //         //
// //         //
// //         //     </Tabs>
// //         // </Box>
// //
// //     )
// // }
// //
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Container from '@mui/material/Container';
//
// export default function ResponsiveAppBar() {
//     const [value, setValue] = useState(0);
//     const [anchorElNav, setAnchorElNav] = useState(null);
//
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };
//
//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//
//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };
//
//     const navItems = [
//         { label: 'General', path: `/?category=general` },
//         { label: 'Tech', path: `/?category=technology` },
//         { label: 'Business', path: `/?category=business` },
//         { label: 'Entertainment', path: `/?category=entertainment` },
//         { label: 'Health', path: `/?category=health` },
//         { label: 'Science', path: `/?category=science` },
//     ];
//
//     return (
//         <AppBar position="static">
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="open navigation menu"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {navItems.map((item) => (
//                                 <MenuItem key={item.label} onClick={handleCloseNavMenu} component={Link} to={item.path}>
//                                     {item.label}
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                     <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//                         <Tabs value={value} onChange={handleChange} centered>
//                             {navItems.map((item) => (
//                                 <Tab key={item.label} label={item.label} to={item.path} component={Link} />
//                             ))}
//                         </Tabs>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }
//

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        { label: 'General', path: `/?category=general` },
        { label: 'Tech', path: `/?category=technology` },
        { label: 'Business', path: `/?category=business` },
        { label: 'Entertainment', path: `/?category=entertainment` },
        { label: 'Health', path: `/?category=health` },
        { label: 'Science', path: `/?category=science` },
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: 'background.paper' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{  flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="open navigation menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
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
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {navItems.map((item) => (
                                <MenuItem key={item.label} onClick={handleCloseNavMenu} component={Link} to={item.path}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, width: '100%', justifyContent: 'space-around' }}>
                        <Tabs value={value} onChange={handleChange} centered>
                            {navItems.map((item) => (
                                <Tab key={item.label} label={item.label} to={item.path} component={Link} />
                            ))}
                        </Tabs>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

