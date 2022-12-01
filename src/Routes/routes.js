import React from "react";
import Login from "../Pages/Login/index";
import Cadastro from "../Pages/Cadastro/index";
import ProtectedRoutes from "./protectedRoutes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Routering = () => {
  return
  //bugado
  <Router>
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="/cadastrar" element={<Cadastro />} />
      <Route
        path="/home"
        element={
          <ProtectedRoutes>
            <h1>Home</h1>
          </ProtectedRoutes>
        }
      />
    </Routes>
  </Router>;
};

export default Routering;
