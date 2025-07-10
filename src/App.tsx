import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the default styles
import 'simplebar'; // If using JS modules
import 'simplebar/dist/simplebar.css'; // Import styles
import LateralLanding from "./pages/homepage";
import { useTheme } from "./hooks/ThemeContext";

function App() {
  const { theme } = useTheme();
  useEffect(() => {
    // document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <div className="font-quicksand min-h-100-vh-safe overflow-hidden">
      <ToastContainer theme={theme} />
      <Router>
        <Routes>
          
          <Route
            path="/"
            element={
              <LateralLanding />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;