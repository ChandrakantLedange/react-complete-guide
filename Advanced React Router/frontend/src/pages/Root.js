import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
