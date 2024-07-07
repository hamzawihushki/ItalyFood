import React, { useEffect, useState } from "react";

import Navigation from "../Navigation";
import BasicImage from "../BasicImage";
import image from "../../assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2lzMTYwNjItaW1hZ2Uta3d2eWZrd3IuanBn.jpg";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import NiceCard from "../Home/NiceCard";
import Footer from "../Footer";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
export default function Details() {
  const [selected, setSelected] = useState(false);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { id } = useParams();
  const [details, setdetails] = useState([]);
  const [items, setItems] = useState([]);
  const [newItems, setnewItems] = useState([]);
  const [favorite, setFavorite] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=it")
      .then(function (response) {
        // handle success
        setItems(response.data.meals);
        const newItem = items.filter((i) => {
          return i.idMeal !== id;
        });
        setnewItems(newItem);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [items]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(function (response) {
        // handle success
        setdetails(response.data.meals[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [id]);
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

  // EVENT HANDLER

  function handleFavoriteClick() {
    if (selected) {
      setFavorite([...favorite, details]);
      localStorage.setItem("favorite", JSON.stringify(favorite));
    }
  }
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
        <BasicImage image={details.strMealThumb} title={details.strMeal} />{" "}
      </motion.div>
      <motion.div
        className="container  details-wrapper"
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="text-details">
          <p
            className="italic-text-dark "
            style={{
              fontSize: "30px",
              color: "#e9aa1e",
            }}
          >
            Taste of your homely food !
          </p>
          <h1 className="title-food">{details.strMeal}</h1>
          <h2>Category : {details.strCategory}</h2>
          <h3>{details.strArea} Food</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5%",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <motion.button
              type="button"
              className="dark-btn"
              style={{ background: "#e9aa1e" }}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.8, background: "#e9aa1e222" }}
            >
              Order Now
            </motion.button>
            <motion.div
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.8, background: "#e9aa1e222" }}
            >
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                onClick={() => {
                  handleFavoriteClick(id);
                }}
                style={{
                  backgroundColor: "#e9aa1e",
                  color: "#fff",
                  padding: "15px",
                }}
              />
            </motion.div>
            <span className="price ">25 $</span>
          </div>
        </div>
        <div className="image-details">
          <img src={details.strMealThumb} alt="" />
        </div>
      </motion.div>{" "}
      <motion.div
        className="container"
        style={{ marginBlock: "0", paddingBlock: "120px" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="italic-text-dark text-center py-5 my-5">Other</h1>
        <div
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          {newItems.map((item) => (
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
      <Footer />
    </>
  );
}
