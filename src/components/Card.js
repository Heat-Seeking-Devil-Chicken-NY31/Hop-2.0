import React from "react";
import { useNavigate } from "react-router-dom";

function Card({
  id,
  title,
  city,
  rate,
  desc,
  schedule,
  startDate,
  staffCard,
  provider,
  client,
}) {
  
  const navigate = useNavigate();

  const staffGig = async () => {
    // TODO adds user as the provider for the selected gig
    const uid = sessionStorage.getItem('uid');
    console.log(id)
   
    const userFetch = await fetch("http://localhost:8080/addGig", {
      method: "POST",
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify({
        user_username: uid,
        job_id: id,
      })
    });

    await navigate("/MyGigs");
  };
  return (
    <div className="w-50 m-auto">
      <div className="card position-relative mt-4 m-auto px-3">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="position-absolute top-0 end-0 m-2">${rate}/hr</div>
          <ul>
            <li className="card-text">City: {city}</li>
            <li>Description: {desc}</li>
            <li className="card-text">Schedule: {schedule}</li>
            <li className="card-text">Start Date: {startDate}</li>
            {!staffCard && <li className="card-text">Provider: {provider}</li>}
            {!staffCard && <li className="card-text">Client: {client}</li>}
          </ul>
          {staffCard && (
            <button onClick={staffGig} className="btn-primary">
              Staff Gig
            </button>
          )}
        </div>
      </div>{" "}
    </div>
  );
}

export default Card;
