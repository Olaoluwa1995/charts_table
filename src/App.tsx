import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { customTheme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={{ ...theme, ...customTheme }}>
      <CSSReset />
      <Switch>
        <Route />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
