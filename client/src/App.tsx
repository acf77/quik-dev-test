import React from "react";
import { LoginScreen } from "./pages/LoginScreen";
import { HomeScreen } from "./pages/HomeScreen";
import { RegisterScreen } from "./pages/RegisterScreen";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

import "./App.css";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/registrar" element={<RegisterScreen />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </Router>
    </>
  );
};
