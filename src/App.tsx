import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import { customTheme } from "./styles/theme";
import "aos/dist/aos.css";
import ContactUs from "./pages/contact-us";

function App() {
  return (
    <ChakraProvider theme={{ ...theme, ...customTheme }}>
      <CSSReset />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={Home} />
        <Route exact path="/blog" component={ContactUs} />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
