import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
