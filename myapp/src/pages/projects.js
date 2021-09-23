import React from "react";
import PIC from "../assets/images/index";

function Projects() {
  return (
    <div>
<div class="container text-center mt-4 mb-4" id="Work">
  <h1>Portfolio</h1>
    </div>
    <div class="row">
    <div class="col">
      <div class="card border ml-2 mr-2">
        <img src={PIC.repost} class="card-img-top" alt="rePost Project"/>
       
        <div class="card-body text-center">
          <h5 class="card-title">rePost Group Project</h5>
          <p class="card-text">A simple blog post. Tumblr clone that uses the model, view, controller structure.</p>
          <a href="https://repostproject.herokuapp.com/" class="card-link">View</a>
          <a href="https://github.com/selden-CBC2021/rePost">GitHub</a>
        </div>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2" id="projects">
  <div class="col mb-4">
    <div class="card">
      <img src={PIC.covid}class="card-img-top" alt="Covid19 risk assessment"/>
      
      <div class="card-body">
        <h5 class="card-title">Covid19Risk-VaccineAssessment</h5>
        <p class="card-text">An app showing the global and U.S. covid cases/deaths</p>
        <a href="https://mxdragon.github.io/Covid19Risk-VaccineAssessment/">View</a>
        <a href="https://github.com/MXDragon/Covid19Risk-VaccineAssessment">GitHub</a>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src={PIC.weather} class="card-img-top" alt="Weather Dashboard"/>
      <div class="card-body">
        <h5 class="card-title">Weather-Dashboard</h5>
        <p class="card-text ">Simple Weather app showing current conditions and 5-day forecast of any city in the US. Uses OpenWeather Api.</p>
        <a href="https://selden-cbc2021.github.io/Weather-Dashboard/">View</a>
        <a href="https://github.com/selden-CBC2021/Weather-Dashboard">GitHub</a>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src={PIC.fitness} class="card-img-top" alt="Fitness tracker"/>
      <div class="card-body">
        <h5 class="card-title">Fitness Tracker</h5>
        <p class="card-text">An app that keeps track of your exercises and workouts. </p>
        <a href="https://thawing-wave-27284.herokuapp.com/?id=614b8a8baf10840016248306">View</a>
        <a href="https://github.com/selden-CBC2021/NoSQL-Workout-Tracker">GitHub</a>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src={PIC.workdayScheduler} class="card-img-top" alt="Event planner"/>
      <div class="card-body">
        <h5 class="card-title">Event Planner</h5>
        <p class="card-text">Simple app that that can track your working day</p>
        <a href="https://stark-reef-03061.herokuapp.com/">View</a>
        <a href="https://github.com/selden-CBC2021/ExpressNoteTaker">GitHub</a>
      </div>
    </div>
  </div>
</div>

  </div>
 
  );
  
}

export default Projects;