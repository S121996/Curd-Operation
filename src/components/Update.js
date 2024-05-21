import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";




const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setContact(localStorage.getItem("contact"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault()
    console.log("Id...", id);
    axios.put(
      `https://664b1152a300e8795d441633.mockapi.io/crudoperation/${id}`
    ,
      {
        name: name,
        email: email,
        contact: contact,
      }
    ).then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            value={name}
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            value={email}
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact</label>
          <input
            value={contact}
            type="number"
            className="form-control"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
      <Link to="/read">
      <button className="btn btn-secondary mx-2"
          
          >
            Back
          </button></Link>
      </form>
    </>
  );
};

export default Update;
