import React, { useState } from "react";
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const header = { "Access-Control-Allow-origin": "*" };
  const history =useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click")
    axios.post("https://664b1152a300e8795d441633.mockapi.io/crudoperation", {
      name: name,
      email: email,
      contact:contact,
      header,
    })
    .then(()=>{
      history("/read");
    })
  };
  return (
    <>
    <div className="d-flex justify-content-between m-2">
      <h2>Create</h2>
      <Link to="/read">
      <button className="btn btn-primary">Show Data</button>
      </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact</label>
          <input
            type="number"
            className="form-control"
            aria-describedby="numberHelp"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
