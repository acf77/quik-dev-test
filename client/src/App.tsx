import React, { useState } from "react";
import { LoginScreen } from "./pages/LoginScreen";
import { HomeScreen } from "./pages/HomeScreen";
import { RegisterScreen } from "./pages/RegisterScreen";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header";

import "./App.css";

export const PrivateRoute = ({ jwt, children }) => {
  jwt ? <Navigate to="/home" replace /> : <Navigate to="/home" replace />;

  return children;
};

export const App = () => {
  const [jwt, setJwt] = useState(
    JSON.parse(localStorage.getItem("userInfo")) || undefined
  );

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/home"
            element={
              <PrivateRoute jwt={jwt}>
                <HomeScreen />
              </PrivateRoute>
            }
          />
          <Route path="/registrar" element={<RegisterScreen />} />
          <Route path="/" element={<LoginScreen />} />
        </Routes>
      </Router>
    </>
  );
};
