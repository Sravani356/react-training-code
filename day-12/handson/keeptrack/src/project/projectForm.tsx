import { SyntheticEvent, useState } from "react";
import { Project } from "./Project";
// import { useSaveProject } from "./store/projectActions";

import { useSaveProject} from './projectHook';

// import { useDispatch } from 'react-redux';
// import { ThunkDispatch } from 'redux-thunk';
// import { ProjectState } from './store/projectTypes';
// import { AnyAction } from 'redux';

interface ProjectFormProps {
  project: Project;
  // onSave: (project: Project) => void;
  onCancel: () => void; //adding a cancel button
}

function ProjectForm({
  project: initialProject,
  // onSave,
  onCancel,
}: ProjectFormProps) {
  
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    name: " ",
    description: " ",
    budget: " ",
  });

  // const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();

  const { mutate: saveProject, isLoading } = useSaveProject();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if(!isValid()) return;
    saveProject(project);
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;
    //if input is checkBox use checked
    //otherwise its type is text, number etc. So use value

    let updatedValue = type === "checkbox" ? checked : value;
    //if input type is number convert the updatedValue string to a +number
    if (type === "number") {
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;

    //need tp do functional update b/c
    // the new project state is based on the previous state
    // so, we can keep the project properties that aren;t being edited like project.id
    // the spread operator (...) is used to
    // spread the previous project properties and the new change

    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });

    setErrors(() => validate(updatedProject))
  };

  function validate(project: Project) {
    let errors: any = {name: '', description: '', budget:''};
    if(project.name.length === 0) {
      errors.name = 'Name is required';
    }

    if(project.name.length > 0 && project.name.length < 3) {
      errors.name = 'Name needs to be at least 3 characters.'; 
    }

    if(project.description.length === 0) {
      errors.description = 'Description is required.';
    }

    if(project.budget === 0) {
      errors.budget = 'Budget must be more than $0.';
    }

    return errors;
  }


  function isValid() {
    return (
      errors.name.length ===0 &&
      errors.description.length === 0 &&
      errors.budget.length ===0
    );
  }

  return (
    <>
      <form className="input-group vertical" 
      onSubmit={handleSubmit}
      aria-label="Edit a Project"
      name="ProjectForm">
        
      {isLoading && <span className="toast">Saving...</span>}
        <label htmlFor="name">Project Name</label>
        <input
        id="name"
          type="text"
          placeholder="Enter Name"
          name="name"
          value={project.name}
          onChange={handleChange}
        ></input>
        {errors.name.length > 0 && (
          <div className="card error" role="alert">
            <p>{errors.name}</p>
          </div>
        )}
      
        <label htmlFor="description">Project Description</label>
        <textarea
        id="description"
        aria-label="project description"
          placeholder="Enter Description"
          name="description"
          value={project.description}
          onChange={handleChange}
        />
        {errors.description.length > 0 && (
          <div className="card error" role="alert">
            <p>{errors.description}</p>
          </div>
        )}

        <label htmlFor="budget">Budget</label>
        <input
        id="budget"
          type="number"
          placeholder="Enter budget"
          name="budget"
          value={project.budget}
          onChange={handleChange}
        />
        {errors.budget.length > 0 && (
          <div className="card error" role="alert">
            <p>{errors.budget}</p>
          </div>
        )}
        <label htmlFor="isActive">isActive?</label>
        <input
        id=""
          type="checkbox"
          name="isActive"
          checked={project.isActive}
          onChange={handleChange}
        />
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
