import React from "react";
import Card from 'react-bootstrap/Card';
import password from "../../assets/images/screenshots/password-screenshot.jpg";
import noteTaker from "../../assets/images/screenshots/note-taker-screenshot-02.jpg";
import textEditor from "../../assets/images/screenshots/pwa-text-editor-screenshot.jpg";
import quiz from "../../assets/images/screenshots/quiz-screenshot-1.jpg";
import planner from "../../assets/images/screenshots/daily-planner-screenshot-01.jpg";
import dream from "../../assets/images/screenshots/dream-or-nightmare-screenshot.png";

//this page will feature a handful of projects i worked on over the past few months.

function Portfolio() {
  //made an array of objects for each project, that will be looped through map() and then render with the correct information.
  const projectArray = [
    {
      id: 1,
      name: "Password Generator",
      deployLink: "https://crimsonnail23.github.io/password-generator/",
      github: "https://github.com/crimsonnail23/password-generator",
      image: password,
      description: "Answer a series of questions to create a unique and random password",
      alt: "screenshot of password generator",
    },
    {
      id: 2,
      name: "Note Taker",
      deployLink: "https://youn-note-taker.herokuapp.com/",
      github: "https://github.com/crimsonnail23/note-taker",
      image: noteTaker,
      description: "A simple app to take notes so you don't forget the random things you think.",
      alt:'screenshot of note taker application'
    },
    {
      id: 3,
      name: "J.A.T.E (aka Just Another Text Editor)",
      deployLink: "https://stark-brushlands-29369.herokuapp.com/",
      github: "https://github.com/crimsonnail23/PWA-text-editor",
      image: textEditor,
      description: "A simple JavaScript text editor",
      alt:'screenshot of a JavaScript text editor'
    },
    {
      id: 4,
      name: "JavaScript Shot Quiz",
      deployLink: "https://crimsonnail23.github.io/javascript-short-quiz/",
      github: "https://github.com/crimsonnail23/javascript-short-quiz",
      image: quiz,
      description: "A quick quiz to determine if you know JavaScript as well as you think you do",
      alt: 'screenshot of JavaScript Short Quiz application'
    },
    {
      id: 5,
      name: "Daily Planner",
      deployLink: "https://crimsonnail23.github.io/daily-planner/",
      github: "https://github.com/crimsonnail23/daily-planner",
      image: planner,
      description: "A daily planner that breaks down for your working hours",
      alt: 'screenshot of the daily planner application'
    },
    {
      id: 6,
      name: "Dream or Nightmare",
      deployLink: "https://enigmatic-bayou-10117.herokuapp.com/",
      github: "https://github.com/OmarDGreat/Dream-or-Nightmare",
      image: dream,
      description: "This is an application where users can post their dreams and other users can upvote or downvote them.",
      alt:'screenshot of Dream or Nightmare application'
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Portfolio</h2>

          <hr />
          <div className="row">
            {/* this will loop over the project array put the new data into the project argument. */}
            {projectArray.map((project) => {
              return (
                <Card key={project.id}>
                  <Card.Body>
                    {/* here is where the object information gets pulled to */}
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Img src={project.image} width="500" alt={project.alt}/>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Link href={project.github}>GitHub</Card.Link>
                    <Card.Link href={project.deployLink}>Deployed Application</Card.Link>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
