import React from "react";
import Navigation from "./Navigation";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function PageNotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navigation />
      <Link to={"/"}>
        <Button
          variant="contained"
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            width: "50%",
            height: "30%",
            backdropFilter: "blur(9px)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "50px",
            color: "#000",
            textShadow: "5px 5px 5px rgba(255, 255, 255, 100)",
            fontWeight: "900",
          }}
        >
          {" "}
          Back To Home
        </Button>
      </Link>{" "}
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src="https://cdn.dribbble.com/users/3126917/screenshots/18351734/media/fcb8f36f16bb1c1bdc787d4366a39940.jpg?resize=1000x750&vertical=center"
      />
    </motion.div>
  );
}
