import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import SignUP from "./SignUP";
import Signin from "./Signin";
import "./nav.css";
import { PiCatBold } from "react-icons/pi";

export default function Nav() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div>
        <div className="header">
          <nav
            style={{
              backgroundColor: "purple",
              color: "white",
              height: "60px",
              fontSize: "xx-large",
            }}
          >
            <span style={{ marginLeft: "0 px", color: "#bac738d6" }}>
              <PiCatBold /> Image Downloader
            </span>

            <span id="Home" style={{ marginLeft: "10px", marginRight: "10px" }}>
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </span>
            <span id="signin">
              <Link to="/signin" style={{ color: "white" }}>
                Sign In
              </Link>
            </span>
            <span id="signup">
              <Link to="/signup" style={{ color: "white" }}>
                Sign Up
              </Link>
            </span>

            <span style={{ marginLeft: "30%" }}>
              <input
                type="search"
                placeholder="Click here to search"
                value={searchQuery}
                onChange={handleSearch}
              />
            </span>
          </nav>
        </div>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUP />} />
        </Routes>
      </div>
    </>
  );
}
