import { useState } from "react";

function Checkbox() {
  const [check, setCheck] = useState({
    isStandard: false,
    published: false,
    isLoggedin: false,
    successLinkRoute: false,
    allowEdit: false,
    allowMultiple: false,
    showGrid: false,
    allowDelete: false,
    allowPrint: false,
    allowComments: false,
    showAttachments: false,
    allowIncompleteForms: false,
  });

  function updateCheckBox(event) {
    setCheck({ ...check, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={check.isStandard}
          id="flexCheckDefault"
          name="isStandard"
          onChange={updateCheckBox}
        />
        <label className="form-check-label" for="flexCheckDefault">
          is Standard
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={check.published}
          id="flexCheckChecked"
          name="published"
          onChange={updateCheckBox}        
        />
        <label Name="form-check-label" for="flexCheckChecked">
          Published
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={check.isLoggedin}
          id="flexCheckChecked1"
          name="isLoggedin"
          onChange={updateCheckBox}        

        />
        <label className="form-check-label" for="flexCheckChecked1">
          Login Required
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={check.successLinkRoute}
          id="flexCheckDefault"
          name="successLinkRoute"
          onChange={updateCheckBox}        
        />
        <label classname="form-check-label" for="flexCheckDefault">
          Route to Success Link
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={check.allowEdit}
          id="flexCheckDefault2"
          name="allowEdit"
          onChange={updateCheckBox}        
        />
        <label className="form-check-label" for="flexCheckDefault2">
          Allow Edit
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={check.allowMultiple}
          id="flexCheckDefault3"
          name="allowMultiple"
          onChange={updateCheckBox}        
        />
        <label className="form-check-label" for="flexCheckDefault3">
          Allow Multiple
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={check.showGrid}
          id="flexCheckDefault4"
          name="showGrid"
          onChange={updateCheckBox}              
        />
        <label className="form-check-label" for="flexCheckDefault4">
          Show as Grid
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={check.allowDelete}
          id="flexCheckDefault5"
          name="allowDelete"
          onChange={updateCheckBox}
        />
        <label classname="form-check-label" for="flexCheckDefault5">
          Allow Delete
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={check.allowPrint}
          onChange={updateCheckBox}        
          id="flexCheckDefault6"
          name="allowPrint"
        />
        <label className="form-check-label" for="flexCheckDefault6">
          Allow Print
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={check.allowComments}
          id="flexCheckDefault7"
          name="allowComments"
          onChange={updateCheckBox}        

        />
        <label className="form-check-label" for="flexCheckDefault7">
          Allow Comments
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={check.showAttachments}
          id="flexCheckDefault8"
          name="showAttachments"
          onChange={updateCheckBox}        

        />
        <label className="form-check-label" for="flexCheckDefault8">
          Show Attachments
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value={check.allowIncompleteForms}
          id="flexCheckDefault9"
          name="allowIncompleteForms"
          onChange={updateCheckBox}        

        />
        <label className="form-check-label" for="flexCheckDefault9">
          Allow incomplete Forms
        </label>
      </div>
    </div>
  );
}

export default Checkbox;
