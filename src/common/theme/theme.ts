import { createMuiTheme } from "@material-ui/core";
import { primary, accent, option1, option2, error  } from './colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#a1d4f1',
            main: "#11a8d3",
            dark: "#00a2d0",
            contrastText: "#212121"
        },
        secondary: {
            light: accent[300],
            main: accent[500],
            dark: accent[700],
            contrastText: "#fafafa"
        },
        error: {
            light: error[300],
            main: error[500],
            dark: error[700],
            contrastText: "#fafafa"
        },
        text: {
            primary: "#000000",
            secondary: "#ffffff"
        },
        background: {
            default: "#f3f6fc",
            paper: "#ffffff"
        },
  
        type: "light"
    },
    typography: {
        fontSize: 14,
        htmlFontSize: 16,
        //pxToRem: size => `${(size / htmlFontSize) * coef}rem`,
        // h1: {
        //     color: "rgba(0, 0, 0, 0.87)",
        //     fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        //     fontWeight: 300,
        //     fontSize: "7.594rem",
        //     lineHeight: 1,
        //     letterSpacing: "-0.01562em",
        // }
    }
});
export default theme;
