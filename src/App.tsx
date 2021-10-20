import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import Home from "./pages/home";
import { customTheme } from "./styles/theme";
import "aos/dist/aos.css";

function App() {
  return (
    <ChakraProvider theme={{ ...theme, ...customTheme }}>
      <CSSReset />
      <Home />
    </ChakraProvider>
  );
}

export default App;
