import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostGig from "./pages/PostGig";
import StaffGig from "./pages/StaffGig";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import MyGigs from "./pages/MyGigs";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<Home />} />
        <Route path="PostGig" element={<PostGig />} />
        <Route path="StaffGig" element={<StaffGig />} />
        <Route path="MyGigs" element={<MyGigs />} />
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
