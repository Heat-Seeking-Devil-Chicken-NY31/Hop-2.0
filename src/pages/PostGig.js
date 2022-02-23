import React, { useEffect, useState } from "react";
import signInWithGoogle from "../services/firebase";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from '../components/NavbarMUI'
import Navbar from "../components/Navbar";

function PostGig() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const navigate = useNavigate();
 // TODO post gig in DB
  const handleSubmit = async (event) => {
    event.preventDefault();
    const uid = sessionStorage.getItem('uid');
    const postGig = await fetch("http://localhost:8080/createGig", {
      method: "POST",
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify({
        title: inputs.title,
        city: inputs.city,
        hourly_rate: inputs.hourlyRate,
         description: inputs.description,
          schedule: inputs.schedule, 
          startDate:  inputs.startDate,
        username_created_by: uid
      })
    });
    
    await navigate("/MyGigs");
   
  };
   
   
  

  return (
    <>
    <ResponsiveAppBar/>
      <Navbar />
      <form className="m-auto w-100 d-flex justify-content-center" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={inputs.city || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Rate:
          <input
            type="text"
            name="hourlyRate"
            value={inputs.hourlyRate || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Schedule:
          <input
            type="text"
            name="schedule"
            value={inputs.schedule || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={inputs.startDate || ""}
            onChange={handleChange}
          />
        </label>
        <input className="btn-primary" type="submit" />
      </form>
    </>
  );
}

export default PostGig;
