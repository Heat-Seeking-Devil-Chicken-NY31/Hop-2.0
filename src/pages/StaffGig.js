import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

function StaffGig() {
  const [gigs, setGigs] = useState(null);

  useEffect(async () => {
    // TODO get 10 most recent gigs //get gigs request here.
    const allGigs = await fetch("http://localhost:8080/Gigs");
    const formatted = await allGigs.json()
    
    await setGigs(formatted);
  }, []);

  const [city, setCity] = useState(null);
  function handleChange(e) {
    setCity(e.target.value);
  }
  useEffect(async () => {
    // TODO set gigs filtered by city
    const cityGigs = await fetch("http://localhost:8080/gigsByCity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify({
        city: city
      })
    });
   
    const cityFormatted = await cityGigs.json()
    console.log(cityFormatted)
    await setGigs(cityFormatted);

  }, [city]);

  return (
    <div>
      <Navbar />
      <select value={city} onChange={handleChange}>
        <option value=""></option>
        <option value="Chicago">Chicago</option>
        <option value="New York City">New York City</option>
        <option value="Los Angeles">Los Angeles </option>
      </select>
      {gigs &&
        gigs.map((gig) => (
          <Card
            key={gig._id}
            id={gig._id}
            title={gig.title}
            city={gig.city}
            desc={gig.desc}
            rate={gig.hourly_rate}
            schedule={gig.schedule}
            startDate={gig.startDate}
            staffCard={true}
          />
        ))}
    </div>
  );
}

export default StaffGig;
