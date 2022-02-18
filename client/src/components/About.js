import React from "react";
import "./about.css";

function About() {
  return (
    <div>
      <nav>Nav</nav>
      <h1 class="header"> About Us Header</h1>
      <div class="squareFull">
        <h1>Hello</h1>
        <p>Somethig about us, we are so awesome.</p>
      </div>
      <div>
        <h1 class="header"> Our Mission</h1>
        <div class="square80">
          <h1>Mission statement</h1>
          <p>Our mission is so awesome.</p>
        </div>
        <h1 class="header"> Our Team</h1>
        <div class="squareGrid">One</div>
        <div class="squareGrid">Two</div>
        <div class="squareGrid">Three</div>
        <div class="squareGrid">four</div>
        <div class="squareGrid">five</div>
        <div class="squareGrid">six</div>
      </div>
    </div>
  );
}

export default About;
