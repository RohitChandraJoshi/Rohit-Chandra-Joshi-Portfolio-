import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const imageSize = project.size || {}; // Use the size property if available

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img
        src={project.image}
        alt={project.name} // Provide meaningful alt text for the image
        style={{
          width: imageSize.width || "auto",
          height: imageSize.height || "auto",
        }}
      />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {project.githubLink && (
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      )}
    </div>
  );
}

export default ProjectDisplay;
