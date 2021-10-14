import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import { customTheme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={{ ...theme, ...customTheme }}>
      <CSSReset />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={Home} />
        <Route exact path="/blog" component={Home} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
