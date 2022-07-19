import React from "react";
import { MOCK_PROJECTS } from "./mockProjects";
import ProjectList from "./ProjectList";

function Projectpage() {
  return (
    <>
      <h1>Projects</h1>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
}

export default Projectpage;
