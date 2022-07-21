import React, {SyntheticEvent} from "react";
import { Project } from "./Project";



interface ProjectFormProps {
  onSave: (project: Project) => void;
  onCancel: () => void; //adding a cancel button
}

function ProjectForm({ onSave, onCancel } : ProjectFormProps) {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(new Project({ name: 'Updated Project'}))
  }

  return (
    <>
      <form className="input-group vertical" onSubmit={handleSubmit}>
        <label htmlFor="name">Project Name</label>
        <input type="text" placeholder="Enter Name" name="name"></input>
        <label htmlFor="description">Project Description</label>
        <textarea placeholder="Enter Description" name="description" />
        <label htmlFor="name">Project Name</label>
        <input type="text" placeholder="Enter Name" name="name"></input>
        <label htmlFor="budget">Project Name</label>
        <input type="number" placeholder="Enter budget" name="budget"></input>
        <label htmlFor="isActive">isActive?</label>
        <input type="checkbox" name="isActive"></input>
        <div className="input-group">
          <button className="primary bordered medium">Save</button>
          <span />
          <button type="button" className="bordered medium" onClick={onCancel}>
            cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default ProjectForm;
