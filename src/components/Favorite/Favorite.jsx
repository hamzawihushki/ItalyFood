import React from "react";
import { motion } from "framer-motion";
import basic from "../../assets/download.jpeg";
import Navigation from "../Navigation";
import BasicImage from "../BasicImage";
import FavoriteList from "./FavoriteList";
import Footer from "../Footer";

export default function Favorite() {
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Navigation />
        <BasicImage
          image={basic}
          title="Favorite"
          description={"It's Time For Pizza"}
        />
      </motion.div>
      <FavoriteList />
      <Footer />
    </>
  );
}
