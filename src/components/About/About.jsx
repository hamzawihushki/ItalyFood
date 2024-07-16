import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import basic from "../../assets/about-parallax-1.jpg";
import BasicImage from "../BasicImage";
import { motion } from "framer-motion";
import WhoAreWe from "./WhoAreWe";
import OurStory from "./OurStory";
import SliderAbout from "./sliderAbout";
import Loader from "../Loader";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delay: 1,
      },
    },
  };
  return (
    <>
      <Loader />

      <Navigation />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <BasicImage image={basic} title="About Us" description="our story" />
      </motion.div>
      <WhoAreWe />

      <OurStory />
      <SliderAbout />
      <Footer />
    </>
  );
}
