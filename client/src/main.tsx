import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ClientProvider } from "./contexts/ClientContext";
import { ContactProvider } from "./contexts/ContactContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ChakraProvider>
      <ClientProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </ClientProvider>
    </ChakraProvider>
  </BrowserRouter>
);
