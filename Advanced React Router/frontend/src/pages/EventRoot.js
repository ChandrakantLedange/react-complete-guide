import React from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router";

export default function EventRoot() {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
