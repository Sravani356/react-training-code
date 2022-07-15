import { useState } from "react";
import Checkbox from "./checkbox";

function WebForm() {
  const [form, setForm] = useState({
    Title: "Contact Support",
    Route: "Support",
    docType: "Issue",
    module: "",
  });

  function updateValue(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function SaveIt() {
    const payload = {
      Title: form.Title,
      Route: form.Route,
      docType: form.docType,
      module: form.module,
    };

    fetch("http://localhost:3000/webForms", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  //fetch code is to be written here//

  return (
    <>
      {/* <div className="Card">
       <div className="card-body m-5"> */}
      <div className="container mt-1">
        <div className="row">
          <div className="col-6">
            <label for="exampleFormControlInput1" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="fw-bold form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the Title"
              value={form.Title}
              onChange={updateValue}
              name="Title"
            ></input>
            <div className="mt-3">
              <label for="route" className="form-label">
                Route:
              </label>
              <input
                type="text"
                className="form-control"
                id="route"
                placeholder="Enter Route"
                value={form.Route}
                onChange={updateValue}
                name="Route"
              />
            </div>
            <div className="mt-3">
              <label for="doctype" className="form-label">
                Select DocType:
              </label>
              <input
                type="text"
                className="fw-bold form-control"
                id="doctype"
                placeholder="Document Type"
                value={form.docType}
                onChange={updateValue}
                name="docType"
              />
            </div>
            <div className="mt-3">
              <label for="module" className="form-label">
                Module:
              </label>
              <input
                type="text"
                className="form-control"
                id="module"
                placeholder="Module"
                value={form.module}
                onChange={updateValue}
                name="module"
              />
            </div>
            <div className="mt-5">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={SaveIt}
              >
                Save
              </button>
            </div>
          </div>
          <div className="col-6 mt-3">
            <Checkbox />
          </div>
        </div>
      </div>
    </>
  );
}

export default WebForm;
