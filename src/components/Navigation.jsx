import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/Logo.png";
import "../App.css";
import { Link } from "react-router-dom";
import cart from "../assets/icons8-shopping-cart-50.png";
import Login from "./login";
import { useUser } from "../context/UserContext";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import Loader from "./Loader";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useUser();
  const [username, setUsername] = useState("");
  const [open2, setOpen2] = useState(false);
  const menuRef = useRef(null);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveUser = () => {
    setUser(null);
    setUsername("");
    handleClose2();
    localStorage.removeItem("user");
  };

  const handleLogin = () => {
    setUser(username);
    localStorage.setItem("user", username);
    handleClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Collapse the menu
        const navbarCollapse = document.getElementById(
          "navbarSupportedContent"
        );
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  console.log(`User ${username}`);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" ref={menuRef}>
      <div className="container navigation">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="" style={{ width: "90px" }} />
        </Link>
        <motion.button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          initial={{ rotate: 0 }}
          whileHover={{
            rotate: 25,
            transition: {
              type: "spring",
              duration: 0.2,
              mass: 5,
            },
          }}
          whileTap={{
            rotate: 25,
            transition: {
              type: "spring",
              duration: 0.2,
              mass: 5,
            },
          }}
          animate={{
            rotate: 0,
            transition: {
              type: "spring",
              duration: 0.1,
              mass: 1,
            },
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </motion.button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                Our Story
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorite">
                Favorite
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <img src={cart} alt="" style={{ width: "30px" }} />
              </Link>
            </li>
            {!user ? (
              <button className="nav-link" onClick={handleClickOpen}>
                login
              </button>
            ) : (
              <li>
                <button className="nav-link" onClick={handleClickOpen2}>
                  logout {user}
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Your Name"}</DialogTitle>
        <DialogContent>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button onClick={handleLogin} autoFocus>
            Login
          </Button>
        </DialogActions>
      </Dialog>
      {/* logout confirmation */}
      <Dialog
        open={open2}
        onClose={handleClose2}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            do you want logout
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose2}>close</Button>
          <Button onClick={handleRemoveUser} autoFocus>
            logout
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
}
