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
import styled from "styled-components";
import Loader from "../Loader";

// const NoScrollContainer = styled.div`
//   overflow: hidden;
// `;
export default function Home() {
  //   const { scrollYProgress } = useScroll();
  //   const scaleY = useSpring(scrollYProgress, {
  //     stiffness: 100,
  //     damping: 30,
  //     restDelta: 0.001,
  //   });
  return (
    <>
      <Loader />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
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
