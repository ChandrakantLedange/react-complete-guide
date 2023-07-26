import React from "react";
import { useParams } from "react-router";

export default function EventDetail() {
  const params = useParams();
  return (
    <>
      <div>EventDetail</div>
      <p>Event ID: {params.eventId}</p>
    </>
  );
}
