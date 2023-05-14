import './App.css';
import React from "react";
import NewsListByCategory from "./components/NewsListByCategory";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Button} from "@mui/material";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import useDarkMode from './components/useDarkMode';
// import {useTheme} from "@mui/system";

import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


// const ModeSwitcher = ({ themeToggler }) => {
//     const theme = useTheme();
//     const mode = theme.palette.mode;
//
//     return (
//         <Button
//             variant="outlined"
//             onClick={() => {
//                 themeToggler();
//             }}
//         >
//             {mode === 'light' ? 'Dark' : 'Light'}
//         </Button>
//     );
// };



// function App() {
//     const [theme, themeToggler] = useDarkMode();
//     const muiTheme = createTheme({
//         palette: {
//             mode: theme,
//         },
//     });

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                // justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
                justifyContent: "flex-end",
            }}
        >
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    );
}

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <Router>
            <ThemeProvider theme={theme}>
                <App />
                <Header />
                <Routes>
                    <Route exact path="/" element={<NewsListByCategory />} />
                </Routes>

            </ThemeProvider>
            </Router>
        </ColorModeContext.Provider>
    );
}

    // return (
    //     <Router>
    //         <ThemeProvider theme={muiTheme}>
    //             <ModeSwitcher themeToggler={themeToggler} />
    //             <Header />
    //             <Routes>
    //                 <Route exact path="/" element={<NewsListByCategory />} />
    //             </Routes>
    //         </ThemeProvider>
    //     </Router>
    // );
// }

// function App() {
//     return (
//         <Router>
//
//             <ThemeProvider theme={theme}>
//                 <ModeSwitcher />
//                 <Header />
//                 <Routes>
//                     <Route exact path="/" element={<NewsListByCategory />} />
//                 </Routes>
//             </ThemeProvider>
//         </Router>
    //     <Router>
    //         <CssVarsProvider>
    //             <ModeSwitcher/>
    //             <Header/>
    //             <Routes>
    //                 <Route exact path="/" element={<NewsListByCategory/>}/>
    //             </Routes>
    //
    //         </CssVarsProvider>
    //
    //
    //
    //
    //     </Router>
    // );
// }

// export default App;