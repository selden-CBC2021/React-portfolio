import React from "react";
import PIC from "../assets/images/index";

function About() {
  return (
    <div class="section clearfix">
      <div class="container mt-3">
        <div class="row">
          <div class="col-md-12">
            <h2 class="text-center" id="About">About</h2>
          <br/>
            <div class="row">
            <div class="col-sm-3">
              <img src={PIC.drewProfile} class="rounded-circle col-sm-8 " alt="screenshot of Drew"/>
            </div>
            <div class="col-sm-9">
            <p>Greetings! I am a full-stack web developer skilled in HTML, CSS, and JavaScript. I also possess a knowledge of various frameworks and tools that are used in today's software engineering and technology. I am also a Michigan State University alumni with a Bachelor's degrees in Human Biology and Criminal Justice. 
            </p>
            <p>On a more personal note I am a quick learner, adapt in nearly any situation, and can help solve problems with critical thinking skills and an eye for detail. I excel at planning and data analysis while usually being able to see the big picture before it's been made clear.
            </p>
            <p>In addition, I can also adapt in any team environment and get along with others when working in a group setting.</p>
            <p>Here is a list of my current technical skills.</p>
            <ul class="skills list-inline">
              <li>
                <img src={PIC.html} alt="HTML5" title="HTML5"/>
              </li>
              <li>
                <img src={PIC.css} alt="css3" title="css3"/>
              </li>
              <li>
                <img src={PIC.javascript} alt="javascript" title="javascript"/>
              </li>
              <li>
                <img src={PIC.graphql} alt="graphql" title="graphql"/>
              </li>
              <li>
                <img src={PIC.mongodb} alt="mongodb" title="mongodb"/>
              </li>
              <li>
                <img src={PIC.nodejs} alt="node-js" title="node-js"/>
              </li>
              <li>
                <img src={PIC.git} alt="git" title="git"/>
              </li>
            </ul>
              
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default About;