import React from "react";
import password from "../../assets/images/screenshots/password-screenshot.jpg";

//make an array of objects for each project
function Portfolio() {
  const projectArray = [
    {
      id: 1,
      name: "project 1",
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
      image: password,
      description: "",
    },
    {
      id: 3,
      name: "project 3",
      deployLink: "",
      github: "",
      image: password,
      description: "",
    },
    {
      id: 4,
      name: "project 4",
      deployLink: "",
      github: "",
      image: password,
      description: "",
    },
    {
      id: 5,
      name: "project 5",
      deployLink: "",
      github: "",
      image: password,
      description: "",
    },
    {
      id: 6,
      name: "project 6",
      deployLink: "",
      github: "",
      image: password,
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
                <div className="card" key={project.id}>
                  <div className="card-body">
                    <div className="text-center">
                        {project.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
