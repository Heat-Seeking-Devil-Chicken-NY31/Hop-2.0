import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
<<<<<<< HEAD
import ResponsiveAppBar from '../components/NavbarMUI'
=======
import Filters from "../components/Filters";
>>>>>>> dev

function StaffGig() {
  const [gigs, setGigs] = useState(null);
  
  const defaultFilters = {city: '', 
    title: '', 
    hourly_rate_max: '', 
    hourly_rate_min: '',
    description: ''
  };
  const [filterValues, setFilters] = useState(defaultFilters);

  useEffect(async () => {
    // TODO get 10 most recent gigs //get gigs request here.
    const allGigs = await fetch("http://localhost:8080/Gigs");
    const formatted = await allGigs.json()
    
    await setGigs(formatted);
    await setFilters(defaultFilters);
    
  }, []);

  const [city, setCity] = useState(null);

  function handleChange(e) {
    setCity(e.target.value);
  }

  async function getFilteredData() {
    
    console.log("Requesting filtered data");

    const reqBody = {
      city: filterValues.city === '' ? undefined : filterValues.city,
      title: filterValues.title === '' ? undefined : filterValues.title,
      hourly_rate_min: filterValues.hourly_rate_min === '' ? undefined : filterValues.hourly_rate_min,
      hourly_rate_max: filterValues.hourly_rate_max === '' ? undefined : filterValues.hourly_rate_max,
      description: filterValues.description === '' ? undefined : filterValues.description,
    }

    console.log(reqBody);

    let result = await fetch("http://localhost:8080/gigsByAttribute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify(reqBody)
    });
   
    result = await result.json()
    console.log(result)
    await setGigs(result);


  }


  return (
    <div>
      <ResponsiveAppBar/>
      <Navbar />
      <Filters filterValues = {filterValues} setFilters = {setFilters} getFilteredData = {getFilteredData} />
      
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
