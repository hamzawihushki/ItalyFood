import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Details from "./components/Menu/Details";
import PageNotFound from "./components/PageNotFound";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
import Cart from "./components/Cart/cart";
import { ToastProvider } from "./context/ToastContext";
import { useEffect } from "react";
import { useUser } from "./context/UserContext";
import Loader from "./components/Loader";

function App() {
  const { user, setUser } = useUser();
  useEffect(() => {
    setUser(localStorage.getItem("user") || "");
  }, []);
  return (
    <>
      <ToastProvider>
        <Loader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu/:id" element={<Details />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ToastProvider>
    </>
  );
}

export default App;
