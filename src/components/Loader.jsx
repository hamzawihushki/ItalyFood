// Loader.jsx
import React, { useState, useEffect } from "react";
import "./Loader.css"; // Import your CSS file for loader styles
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Loader = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className={`loader-container ${isLoading ? "" : "hide-loader"}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
