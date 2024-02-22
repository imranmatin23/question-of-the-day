/*
 * This file defines the HomePage page.
 */

import React, { useState, useEffect } from "react";
import API from "../Api";
import "../styles/HomePage.css";

const QOTD = "Who is your favorite musician of all time?";

/*
 * This is an example of how Axios can be used to make an HTTP GET request to a backend webserver.
 */
function HomePage() {
  // Initialize the state variables
  const [backendHeath, setBackendHeath] = useState("not healthy");

  // Invoke the backend's healthcheck endpoint
  function backendHealthCheck() {
    API.get("/")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setBackendHeath("healthy");
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setBackendHeath("not healthy");
      });
  }

  // Check backend health every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      backendHealthCheck();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  /*
   * This return statement contains the HTML to be returned and rendered in the browser.
   */
  return (
    <div className="home">
      <div>
        <h2>Question of the Day</h2>
      </div>
      <p>{QOTD}</p>
    </div>
  );
}

export default HomePage;
