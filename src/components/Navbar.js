import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <Link to="/" className="nav-link m-auto px-5">
                Home
              </Link>
              <Link to="/PostGig" className="nav-link m-auto px-5">
                Post Gig
              </Link>
              <Link to="/StaffGig" className="nav-link m-auto px-5">
                Staff Gig
              </Link>
              <Link to="/MyGigs" className="nav-link m-auto px-5">
                My Gigs
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
// if the user is not logged in, then show pop up, then move to page
