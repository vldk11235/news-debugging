import './App.css';
import React from "react";
import NewsListByCategory from "./components/NewsListByCategory";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import {
//     Experimental_CssVarsProvider as CssVarsProvider,
//     useColorScheme,
// } from '@mui/material/styles';

import {Button} from "@mui/material";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useDarkMode from './components/useDarkMode';
import {useTheme} from "@mui/system";


const ModeSwitcher = ({ themeToggler }) => {
    const theme = useTheme();
    const mode = theme.palette.mode;

    return (
        <Button
            variant="outlined"
            onClick={() => {
                themeToggler();
            }}
        >
            {mode === 'light' ? 'Dark' : 'Light'}
        </Button>
    );
};



function App() {
    const [theme, themeToggler] = useDarkMode();
    const muiTheme = createTheme({
        palette: {
            mode: theme,
        },
    });

    return (
        <Router>
            <ThemeProvider theme={muiTheme}>
                <ModeSwitcher themeToggler={themeToggler} />
                <Header />
                <Routes>
                    <Route exact path="/" element={<NewsListByCategory />} />
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

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

export default App;