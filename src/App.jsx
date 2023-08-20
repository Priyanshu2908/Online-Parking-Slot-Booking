import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Bookedslots from "./components/BookedSlots";
import AboutUs from "./components/AboutUs";
import SlotBokking from "./components/Slotbooking";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        
          <Navbar />

          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="bookedslots" element={<Bookedslots />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="slotbooking" element={<SlotBokking />} />
          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;