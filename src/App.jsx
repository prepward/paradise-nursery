import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./AboutUs";
import "./App.css";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <AboutUs />

        <Link to="/plants">
          <button className="get-started-button">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/plants"
          element={<div>Product Listing Page</div>}
        />

        <Route
          path="/cart"
          element={<div>Shopping Cart Page</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
