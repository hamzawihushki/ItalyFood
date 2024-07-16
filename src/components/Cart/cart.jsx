import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Navigation from "../Navigation";
import BasicImage from "../BasicImage";
import image from "../../assets/about-parallax-1.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import { useToast } from "../../context/ToastContext";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import Loader from "../Loader";
export default function Cart() {
  const { showHideToast } = useToast();
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const cartList = JSON.parse(localStorage.getItem("cart") || "[]");
    setCarts(cartList);
  }, []);

  const handleRemoveFromCart = (idMeal) => {
    const updatedCart = carts.filter((item) => item.idMeal !== idMeal);
    setCarts(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function handleCheckoutClick() {
    showHideToast("Checkout completed");
    handleClose();
    localStorage.removeItem("cart");
    setCarts("");
  }
  return (
    <div>
      <Loader />
      <Navigation />
      <BasicImage image={image} title="My Cart" description="Best Food" />
      <div className="container">
        {carts.length === 0 ? (
          <p
            style={{
              fontWeight: "600",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            Your cart is empty
          </p>
        ) : (
          <ImageList>
            {carts.map((item) => (
              <motion.div
                key={item.idMeal}
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <ImageListItem
                  style={{
                    width: "100%",
                    height: "200px",
                    marginTop: "20px",
                    overflow: "hidden",
                  }}
                >
                  <motion.img
                    src={item.strMealThumb}
                    alt={item.strMeal}
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
                    actionIcon={
                      <IconButton
                        aria-label={`remove ${item.strMeal}`}
                        onClick={() => handleRemoveFromCart(item.idMeal)}
                      >
                        <span className="">{item.idMeal}</span>
                        <CancelIcon
                          style={{ color: "white" }}
                          onClick={() => {
                            showHideToast(
                              `  the ${item.strMeal} has been removed`
                            );
                            console.log(item.idMeal);
                          }}
                        />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              </motion.div>
            ))}
          </ImageList>
        )}
        <div className="d-flex justify-content-evenly">
          <h1>
            THE TOTAL IS{" "}
            <span style={{ fontSize: "larger", color: "#c7b800" }}>
              {" "}
              {(carts.length * 2.15).toFixed(2)}${" "}
            </span>
          </h1>
          <motion.button
            type="button"
            className="dark-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onClick={handleClickOpen}
          >
            {" "}
            CheckOut
          </motion.button>{" "}
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Check Out"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Order {(carts.length * 2.15).toFixed(2)}${" "}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
          <Button onClick={handleCheckoutClick} autoFocus>
            checkout
          </Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </div>
  );
}
