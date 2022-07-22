import Home from "./pages/Home";
import "./scss/app.scss";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
