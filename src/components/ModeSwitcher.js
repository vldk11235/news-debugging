// import React, {useState, useEffect} from "react";
// import Button from '@mui/joy/Button';
// import {
//     Experimental_CssVarsProvider as CssVarsProvider,
//     useColorScheme,
// } from '@mui/material/styles';
//
// // ModeSwitcher is an example interface for toggling between modes.
// // Material UI does not provide the toggle interface—you have to build it yourself.
// const ModeSwitcher = () => {
//     const { mode, setMode } = useColorScheme();
//     const [mounted, setMounted] = React.useState(false);
//
//     React.useEffect(() => {
//         setMounted(true);
//     }, []);
//
//     if (!mounted) {
//         // for server-side rendering
//         // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
//         return null;
//     }
//
//     return (
//         <Button
//             variant="outlined"
//             onClick={() => {
//                 if (mode === 'light') {
//                     setMode('dark');
//                 } else {
//                     setMode('light');
//                 }
//             }}
//         >
//             {mode === 'light' ? 'Dark' : 'Light'}
//         </Button>
//     );
// };
//
// export default ModeSwitcher;