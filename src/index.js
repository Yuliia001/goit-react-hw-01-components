import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: "#111111",
    white: "#fff",
    blau: "#4658FE",
    green: "#039D12"
  },
  radius: {
    sm: "4px"
  }

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
   </ThemeProvider>
  </React.StrictMode>
);
