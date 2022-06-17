import React, { useState } from "react";
import { ReactDOM } from "react";
import "./App.css";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [state, setstate] = useState("AP");
  const [gender, setGender] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [declartion, setDeclaration] = useState(false);
  const [dOB, setDOB] = useState(new Date());
  const OnSubmitClick = (e) => {
    if (password !== confirmPassword) {
      alert("passwords do not match");
    }
    console.log("user name:", userName);
    console.log("password:", password);
    console.log("Confirm password:", confirmPassword);
    console.log("state:", state);
    console.log("gender:", gender);
    console.log("Is Admin?:", isAdmin);
    console.log("declaration:", declartion);
    console.log("DOB:", dOB);
  };
  return (
    <div className="formcomponents-centered">
      <div className="text-alligned">
        <h1>Create User</h1>
      </div>

      <div className="component-maxwidth">
        <Form.Label htmlFor="UserName">User Name</Form.Label>
        <Form.Control type="text" onChange={(e) => {setUserName(e.target.value);}} value={userName} id="UserName"/>
      </div>
      <div className="component-maxwidth">
        <Form.Check type="switch" onChange={(e) => {setIsAdmin(e.target.checked);}} value={isAdmin} id="custom-switch" label="Is Admin?"/>
      </div>
      <div className="component-maxwidth">
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control type="password" onChange={(e) => {setPassword(e.target.value);}} value={password} id="password"/>
      </div>
      <div className="component-maxwidth">
        <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
        <Form.Control type="password" onChange={(e) => {setConfirmPassword(e.target.value);}} value={confirmPassword} id="confirmPassword"/>
      </div>
      <div className="component-maxwidth">
        <Form.Label htmlFor="state">State</Form.Label>
        <Form.Select aria-label="Default select example" onChange={(e) => {setstate(e.target.value);}} value={state} id="state">
          <option value="AP">AP</option>
          <option value="Telangana">Telangana</option>
          <option value="Delhi">Delhi</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Other">Other</option>
        </Form.Select>
      </div>
      <div className="component-maxwidth">
        <Form>
          <Form.Label htmlFor="Male">Gender</Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check inline label="Male" name="genderCheck" onChange={(e) => {setGender(e.target.value);}} value="Male" type={type} id="Male"/>
              <Form.Check inline label="Female" name="genderCheck" onChange={(e) => {setGender(e.target.value);}} value="Female" type={type} id="Female"/>
              <Form.Check inline label="Others" name="genderCheck" onChange={(e) => {setGender(e.target.value);}} value="Others" type={type} id="Others"/>
            </div>
          ))}
        </Form>
      </div>
      <div className="component-maxwidth">
          <Form.Label>Upload Profile Picture</Form.Label>
          <Form.Control type="file" />
      </div>
      <div className="component-maxwidth">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" name="date_of_birth" onChange={(e) => {setDOB(e.target.value);}}/>
      </div>

      <div className="component-maxwidth">
        <Form.Check type="checkbox" onChange={(e) => {setDeclaration(e.target.checked);}} value={declartion} label="I agree to the terms and conditions" id="TandC"/>
      </div>
      <div className="center">
        <Button variant="primary" disabled={!declartion} onClick={(e) => { OnSubmitClick(e.target.value);}}>
          Create Account
        </Button>
      </div>
    </div>
  );
}

export default App;
