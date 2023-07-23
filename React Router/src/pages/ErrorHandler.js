import React from "react";
import { Link, useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorHandler() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error occured!</h1>
        <p>Could not find this page</p>
        <Link to="/">Back to Home</Link>
      </main>
    </>
  );
}

export default ErrorHandler;
