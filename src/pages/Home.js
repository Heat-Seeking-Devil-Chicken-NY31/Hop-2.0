import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="h1 m-10 d-flex justify-center">Home</h1>
      <Link to="/StaffGig">
        <button class="btn btn-success">Staff Gig</button>
      </Link>
      <Link to="/PostGig">
        <button class="btn btn-primary">Post Gig</button>
      </Link>
    </div>
  );
}

export default Home;
