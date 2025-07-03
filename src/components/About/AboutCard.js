import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">DENNIS BUNDI </span>
            from <span className="purple"> Kianyaga, Kenya.</span>
            <br />
            I am currently a student at the University of Embu.
            <br />
            I am pursuing Bachelor of Education (Arts) and web development in Udemy.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching New Skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Debbugging
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dennis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
