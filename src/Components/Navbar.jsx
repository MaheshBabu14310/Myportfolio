import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#222", // optional background
        color: "white",
      }}
    >
      {/* Logo on the left */}
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h2>LIFEWITHMAHESH</h2>
        </Link>
      </div>

      {/* Center Navigation Links */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "80px",
          margin: 0,
          padding: 0,
          fontSize: "20px",
        }}
      >
        <li>
          <Link to="/Home" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Roadmap"
            style={{ color: "white", textDecoration: "none" }}
          >
            RoadMap
          </Link>
        </li>
        <li>
          <Link to="/About" style={{ color: "white", textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Sign Up Button on the right */}
      <div>
        <Link to="/Signup">
          <button
            style={{
              padding: "6px 16px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <b>Sign Up</b>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
