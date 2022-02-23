import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

function MyGigs() {
  const [gigs, setGigs] = useState(null);

  useEffect(async () => {
    // TODO get user's gigs where they are a provider or client
    
    const uid = sessionStorage.getItem('uid');
    const userGigs = await fetch("http://localhost:8080/userGigs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify({
        username: uid
      })
    });
   
    const userFormatted = await userGigs.json()
    await setGigs(userFormatted);
  }, []);

  return (
    <div>
      <Navbar />

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
            provider={gig.provider}
            client={gig.client}
            staffCard={false}
            myGigCard={true} 
            />
        ))}
    </div>
  );
}

export default MyGigs;
