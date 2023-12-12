import { Route, Routes } from "react-router-dom";

import { Cadastro } from "./pages/Cadastro";
import { Incial } from "./pages/Inicial";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Incial />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  )
}