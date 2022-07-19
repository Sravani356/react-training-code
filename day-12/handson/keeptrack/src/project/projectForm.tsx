import React from "react";

function ProjectForm() {
  return (
    <>
      <form className="input-group vertical">
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
          <button type="button" className="bordered medium">
            cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default ProjectForm;
