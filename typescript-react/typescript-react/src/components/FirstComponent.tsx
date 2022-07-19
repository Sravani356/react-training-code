
import * as React from "react";
let Logo ="https://logrocket-assets.io/static/home-hero-c97849b227a3d3015730e3371a76a7f0.svg";
export default class FirstComponent extends React.Component <{}> {
  render(){
    return (
      <div>
        <form>
        <div>
          <label>Name: </label>
          <input type="text" placeholder="Enter your name" ></input>
        </div>
        <div>
        <label>Mobile number: </label>
          <input type="text"placeholder="9876543210"></input>
        </div>
        <div>
        <label>OTP: </label>
          <input type="otp" placeholder="OTP"></input>
        </div>
        <div>
        Gender:
        </div>
        <div>
        <label>Male</label>
          <input type="radio" value="Male" name="gender"></input> 
          <label>Female</label>
          <input type="radio" value="female" name="gender"></input>
{/* we have to give same name for input tag for radio button */}
        </div>
        <div>
          <input type="button" value="submit"></input>
        </div>
        </form>
      </div>
    );
  }
}