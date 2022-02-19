import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

function MyGigs() {
  const [gigs, setGigs] = useState(null);

  useEffect(async () => {
    // TODO get user's gigs where they are a provider or client
    const fakeGig = [
      {
        id: "0001",
        title: "Gig Title",
        city: "city",
        rate: "rate",
        desc: "desc",
        schedule: "schedule",
        startDate: "startDate",
        provider: "sally",
        client: "smith",
      },
    ];
    await setGigs(fakeGig);
  }, []);
  return (
    <div>
      <Navbar />

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
            provider={gig.provider}
            client={gig.client}
            staffCard={false}
          />
        ))}
    </div>
  );
}

export default MyGigs;
