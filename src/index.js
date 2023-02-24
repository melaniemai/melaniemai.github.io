import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"

// import "@fontsource/playfair-display/400.css"
// import "@fontsource/playfair-display/400-italic.css"
// import "@fontsource/playfair-display/500.css"
// import "@fontsource/playfair-display/500-italic.css"
// import "@fontsource/playfair-display/600.css"
// import "@fontsource/playfair-display/600-italic.css"

// import "@fontsource/work-sans/400.css"

const theme = createTheme({
  palette: {
    background: {
      default: "#d8d8d8",
    },
    text: {
      primary: "#486c53",
      secondary: "#444235",
    }
  },
  typography: {
    // fontFamily: ["Playfair Display"]
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(216, 216, 216, 0.2)",
          backdropFilter: "blur(5px)",
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);