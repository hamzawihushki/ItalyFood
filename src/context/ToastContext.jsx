import { createContext, useState, useContext } from "react";
import MySnackBar from "../components/MySnackBar";
import Loader from "../components/Loader";
import { motion, useScroll, useSpring } from "framer-motion";
import styled from "styled-components";
export let ToastContext = createContext({});

export let ToastProvider = ({ children }) => {
  const NoScrollContainer = styled.div`
  overflow: hidden;
`;
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  function showHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }
  return (
    <>
      <MySnackBar open={open} message={message} />
      <motion.div className="progress-bar" style={{ scaleY }} />
      <ToastContext.Provider value={{ showHideToast }}>
        <NoScrollContainer>{children}</NoScrollContainer>
      </ToastContext.Provider>
    </>
  );
};
export const useToast = () => {
  return useContext(ToastContext);
};
