import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Details from "./components/Menu/Details";
import PageNotFound from "./components/PageNotFound";
import Favorite from "./components/Favorite/Favorite";
import About from "./components/About/About";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu/:id" element={<Details />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
