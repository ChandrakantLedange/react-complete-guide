import React from "react";
import { Link, useRouteError } from "react-router-dom";

function ErrorHandler() {
  return (
    <div>
      <h1>An Error occured!</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ErrorHandler;
