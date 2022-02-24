import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostGig from "./pages/PostGig";
import StaffGig from "./pages/StaffGig";
import MyGigs from "./pages/MyGigs";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="PostGig" element={<PostGig />} />
        <Route path="StaffGig" element={<StaffGig />} />
        <Route path="MyGigs" element={<MyGigs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
