import React from "react";
import PropTypes from "prop-types";

function Project({ team }) {
  return (
    <div className="Team">
      <div className="Name">
        <h1>{team.name}</h1>
      </div>
      <img src={team.img} alt={team.name} />
      <div className="Objective">
        <p>{team.bio}</p>
      </div>
      <div className="carousel">
        {/*  carousel  */}
      </div>
    </div>
  );
}

Project.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired
  }).isRequired
};

export default Project;
