import React from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage/loginPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <div id="wrapper">
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/" element={<Navigate to="/login" />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
