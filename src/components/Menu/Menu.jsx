import React from "react";
import Navigation from "../Navigation";
import Hero from "../Home/Hero";
import BasicImage from "../BasicImage";
import basic from "../../assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzMTYwNjItaW1hZ2Uta3d2eWZrd3IuanBn.jpg";
import OurTeam from "../Home/OurTeam";
import Footer from "../Footer";
import { motion } from "framer-motion";
import "../../App.css";
export default function Menu() {
  return (
    <>
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
          title="Our Menu"
          description={"It's Time For Pizza"}
        />
      </motion.div>
      <OurTeam />
      <Footer />
    </>
  );
}
