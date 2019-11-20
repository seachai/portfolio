import React from "react";

// Data
import ProjectData from "../data/ProjectData";

const ProjectDataMapped = () => {
  return (
    <>
      {ProjectData.map(data => (
        <section className="realestate">
          <div className="container">
            <div className="project-image" />
            <h1>{data.title}</h1>
            <div className="info">
              <div className="buttons">
                <a
                  href={data.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-desktop" /> View Project
                </a>
                <a
                  href={data.viewProject}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code" /> View Code
                </a>
              </div>
              <p>{data.summary}</p>
              <div className="challenges">
                <h3>Challenges</h3>
                <div className="list-shift">
                  <ul>{data.challenges}</ul>
                </div>
              </div>
            </div>

            <div className="tech">
              <h3>Technologies</h3>
              <div className="icons">{data.technologies}</div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

const ProjectPage = () => {
  return <ProjectDataMapped />;
};

export default ProjectPage;
