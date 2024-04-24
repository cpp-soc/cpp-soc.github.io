import React from "react";
import PropTypes from "prop-types";

function Project({ team }) {
  // Check if team.bio is a string, split it into lines if it is
  const bioLines = typeof team.bio === "string" ? team.bio.split('\n') : team.bio;

  return (
    <div className="Team">
      <div className="Name">
        <h1>{team.name}</h1>
      </div>
      <img src={team.img} alt={team.name} />
      <div className="Objective">
        {bioLines.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </div>
      <div className="carousel">
        {/* to be added */}
      </div>
    </div>
  );
}

Project.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    // rewrote because of how we handle bio stuff :/ fixed
    bio: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]).isRequired
  }).isRequired
};

export default Project;
