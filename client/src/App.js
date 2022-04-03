import React from "react";
import { LoginScreen } from "./pages/LoginScreen";
import { HomeScreen } from "./pages/HomeScreen";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";

import "./App.css";

export const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </Router>
    </>
  );
};
