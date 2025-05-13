import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./HeaderData/Home";
import Roadmap from "./HeaderData/Roadmap";
import { Routes, Route } from "react-router-dom";
import About from "./HeaderData/About";
import Contact from "./HeaderData/Contact";
import Center from "./Components/Center";
import Login from "./Components/Login";
import Signup from "./HeaderData/Signup";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/Yt.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route
          path="/"
          element={
            <div>
              <Center />
              <Login />
            </div>
          }
        />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
