import React from "react";
import Project from "../Components/ProfileProject";
import teamData from "../Assets/2024/Project/data";

function Projects() {
  return (
    <>
      <div className="container">
      </div>
      <div className="ProjectGrid">
        {teamData.map((team, index) => (
          <Project key={index} team={team} />
        ))}
      </div>
    </>
  );
}

export default Projects;
