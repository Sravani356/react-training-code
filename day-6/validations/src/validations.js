import { useState } from "react";

function Validations() {
  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    errorMsg: "",
  });

  function updateValue(event) {
    setError({ ...error, [event.target.name]: event.target.value });
  }

  function validatePassword() {
    const payload = {
      email: error.email,
      password: error.password,
      confirmPassword: error.confirmPassword,
    };

    fetch("http://localhost:3000/userData", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (error.password === error.confirmPassword) {
      setError({
        ...error,
        errorMsg: " ",
      });
    } else {
      setError({
        ...error,
        errorMsg: "Passwords did not Match!",
      });
    }
  }
  return (
    <div className="container">
      <h1>User Form</h1>
      <div className="row">
        <div className="col-25">
          <label>Email:</label>
        </div>
        <div className="col-75">
          <input
            name="email"
            id="email"
            value={error.email}
            type="text"
            placeholder="Enter your Email"
            onChange={updateValue}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Password:</label>
        </div>
        <div className="col-75">
          <input
            name="password"
            id="textpassword"
            value={error.password}
            type="password"
            onChange={updateValue}
            placeholder="Enter Your Password"
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label>Confirm Password:</label>
        </div>
        <div className="col-75">
          <input
            name="confirmPassword"
            id="txt-confirmPassword"
            value={error.confirmPassword}
            onChange={updateValue}
            type="password"
            placeholder="Confirm Your Password"
          ></input>
        </div>
      </div>

      <button onClick={validatePassword}>submit</button>
      {/* <label>{validatePassword}</label> */}
      <p className="text-danger">{error.errorMsg}</p>
    </div>
  );
}

export default Validations;
