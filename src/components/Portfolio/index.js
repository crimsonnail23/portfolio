import React from "react";
import Card from 'react-bootstrap/Card';
import password from "../../assets/images/screenshots/password-screenshot.jpg";


//make an array of objects for each project
function Portfolio() {
  const projectArray = [
    {
      id: 1,
      name: "Password Generator",
      deployLink: "",
      github: "",
      image: password,
      description: "",
    },
    {
      id: 2,
      name: "project 2",
      deployLink: "",
      github: "",
      image: '',
      description: "",
    },
    {
      id: 3,
      name: "project 3",
      deployLink: "",
      github: "",
      image: '',
      description: "",
    },
    {
      id: 4,
      name: "project 4",
      deployLink: "",
      github: "",
      image: '',
      description: "",
    },
    {
      id: 5,
      name: "project 5",
      deployLink: "",
      github: "",
      image: '',
      description: "",
    },
    {
      id: 6,
      name: "project 6",
      deployLink: "",
      github: "",
      image: '',
      description: "",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Portfolio</h2>

          <hr />
          <div className="row">
            {projectArray.map((project) => {
              return (
                <Card key={project.id}>
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Img src={project.image} width="500"/>
                    
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
