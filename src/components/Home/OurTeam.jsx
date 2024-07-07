import React, { useEffect, useState } from "react";
import NiceCard from "./NiceCard";
import { motion } from "framer-motion";
import axios from "axios";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
export default function OurTeam() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=it")
      .then(function (response) {
        // handle success
        setItems(response.data.meals);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  console.log(items, "the items is");
  return (
    <>
      <motion.div
        className="container"
        style={{ marginBlock: "0" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="italic-text-dark text-center py-5 my-5">Our Menu</h1>
        <div
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          {items.map((item) => (
            <motion.div key={item.idMeal} variants={itemVariants}>
              <NiceCard
                image={item.strMealThumb}
                name={item.strMeal}
                id={item.idMeal}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
