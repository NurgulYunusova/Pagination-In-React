import { Link, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "100px",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
