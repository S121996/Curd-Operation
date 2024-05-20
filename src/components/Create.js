import React, { useState } from "react";
import axios from 'axios'
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header = { "Access-Control-Allow-origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click")
    axios.post("https://664b1152a300e8795d441633.mockapi.io/crudoperation", {
      name: name,
      email: email,
      header,
    });
  };
  return (
    <>
      <h2>Create</h2>
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
