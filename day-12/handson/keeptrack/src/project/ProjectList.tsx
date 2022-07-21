import React from 'react';
import { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './projectForm';


interface ProjectListProps { //to define the props that come into the component
  projects: Project[];
  onSave: (project: Project) => void;
}

function ProjectList({ projects, onSave }: ProjectListProps) {

  const [projectBeingEdited, setProjectBeingEdited] = useState({})
  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);  
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  };

  return (
      <>
      <div className="row">
          {projects.map((project) => (
              <div key={project.id} className="cols-sm">
          {/* <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>
          <ProjectForm/> */}
          {project === projectBeingEdited ? (
            <ProjectForm onSave={onSave} onCancel={cancelEditing} />
          ) : (
            <ProjectCard project={project} onEdit={handleEdit}/>
          )}
          </div>
          ))}

    </div>
    </>
  );
}

export default ProjectList;