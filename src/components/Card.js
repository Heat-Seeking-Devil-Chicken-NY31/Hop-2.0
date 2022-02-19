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
    await navigate("/MyGigs");
  };
  return (
    <div>
      {title}
      {city}
      {rate}
      {desc}
      {schedule}
      {startDate}
      {!staffCard && provider}
      {!staffCard && client}
      {staffCard && <button onClick={staffGig}>Staff Gig</button>}
    </div>
  );
}

export default Card;
