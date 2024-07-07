import React from "react";
import Categories from "./Categories";
import Hero from "./Hero";
import Information from "./Information";
import Navigation from "../Navigation";
import SitAmer from "./SitAmer";
import Discount from "./discount";
import "../../App.css";
import OurTeam from "./OurTeam";
import Subscribe from "./Subscribe";
import Footer from "../Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import ScrollAnimation from "react-animate-on-scroll";
import MenuInfo from "./MenuInfo";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <Navigation />
        <Hero />
      </motion.div>

      <Categories />

      <Information />

      <Discount />

      <SitAmer />

      <MenuInfo />
      <Subscribe />
      <Footer />
    </>
  );
}
