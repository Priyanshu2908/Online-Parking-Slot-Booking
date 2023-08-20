import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useUserContext from "../UserContext";

const Navbar = () => {
  const { loggedIn, logout } = useUserContext();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const showLoginOption = () => {
    if (loggedIn) {
      return (
        <>
        <li className="nav-item">
          <button onClick={logout} className="btn btn-danger">Logout</button>
        </li>
        <li>
          <img width={40} className="ms-4 rounded-circle" src={"http://localhost:5000/"+currentUser.avatar} alt="" />
        </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav class="navbar bg-danger" data-bs-theme="light">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <img style={{height: 60}} src="https://www.multi-line.com.ph/wp-content/uploads/2022/01/parking-system.jpeg" alt="Navbar Logo" className="navbar-logo" />
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/ContactUs">
              ContactUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bookedslots">
                Booked Slots
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/AboutUs">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/slotbooking">
                Slot Booking
              </NavLink>
            </li>

            {showLoginOption()}
            
          </ul>
          
        </div>
      </div>
    </nav>
    </nav>
  );
};

export default Navbar;