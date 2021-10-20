import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import Home from "./pages/home";
import { customTheme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={{ ...theme, ...customTheme }}>
      <CSSReset />
      <Home />
    </ChakraProvider>
  );
}

export default App;
