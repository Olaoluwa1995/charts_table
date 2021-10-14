import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import { customTheme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={{ ...theme, ...customTheme }}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
