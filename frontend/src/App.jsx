import "./App.css";
import LoginPage from "./pages/LoginPage/loginPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from "react";

function App() {
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  useEffect(() => {
      if (user) {
          console.log(user);
      }
  }, [user]);

  return (
    <>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
