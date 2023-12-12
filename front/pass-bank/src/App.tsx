import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GloblalStyles";
import { Router } from "./Router";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </>
  )
}