import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Cappuccino from "./Dashboard/Cappuccino";
import Cart from "./Dashboard/Cart";
import Thanks from "./thanks";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Cappuccino />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/kiosk" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
