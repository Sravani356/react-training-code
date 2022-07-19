import React from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './projectForm';


interface ProjectListProps { //to define the props that come into the component
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  return (
      <>
      <div className="row">
          {projects.map((project) => (
              <div key={project.id} className="cols-sm">
          <ProjectCard project={project}></ProjectCard>
          <ProjectForm/>
          </div>
          ))}

    </div>
    </>
  );
}

export default ProjectList;