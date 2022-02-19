import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

function StaffGig() {
  const [gigs, setGigs] = useState(null);

  useEffect(async () => {
    // TODO get 10 most recent gigs
    const fakeGig = [
      {
        id: "0001",
        title: "Gig Title",
        city: "city",
        rate: "rate",
        desc: "desc",
        schedule: "schedule",
        startDate: "startDate",
      },
    ];
    await setGigs(fakeGig);
  }, []);

  const defaultCity = "Chicago";
  const [city, setCity] = useState(defaultCity);
  function handleChange(e) {
    setCity(e.target.value);
  }
  useEffect(() => {
    // TODO set gigs filtered by city
  }, [city]);

  return (
    <div>
      <Navbar />
      <select value={city} onChange={handleChange}>
        <option value="Chicago">Chicago</option>
        <option value="New York City">New York City</option>
        <option value="Los Angeles">Los Angeles </option>
      </select>
      {gigs &&
        gigs.map((gig) => (
          <Card
            key={gig.id}
            id={gig.id}
            title={gig.title}
            city={gig.city}
            desc={gig.desc}
            rate={gig.rate}
            schedule={gig.schedule}
            startDate={gig.startDate}
            staffCard={true}
          />
        ))}
    </div>
  );
}

export default StaffGig;
