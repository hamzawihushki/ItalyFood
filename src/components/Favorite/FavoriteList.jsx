import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import CancelIcon from "@mui/icons-material/Cancel";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function FavoriteList() {
  const [items, setItems] = useState([]);
  const [newItems, setnewItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=it")
      .then(function (response) {
        // handle success

        const newI = response.data.meals.filter((i) => {
          return i.strCategory == "Beef" || i.strCategory == "Vegetarian";
        });
        setnewItems(newI);
        cosnole.log(newI);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [items]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {" "}
      <ImageList className="container">
        {newItems.map((item) => (
          <div>
            <Link to={`/menu/${item.idMeal}`}>
              <ImageListItem
                key={item.idMeal}
                style={{
                  width: "100%",
                  height: "200px",
                  marginTop: "20px",
                  overflow: "hidden",
                }}
              >
                <motion.img
                  srcSet={`${item.strMealThumb}`}
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
                <ImageListItemBar
                  title={item.strMeal}
                  subtitle={item.strCategory}
                />
              </ImageListItem>
            </Link>
          </div>
        ))}
      </ImageList>{" "}
    </motion.div>
  );
}
