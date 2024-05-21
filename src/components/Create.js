import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState({});
  const header = { "Access-Control-Allow-origin": "*" };
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    
    // Name validation: non-empty and only letters and spaces
    if (!name.trim()) {
      errors.name = 'Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.name = 'Name can only contain letters and spaces';
    }

    // Contact number validation: must be a 10-digit number
    if (!contact.trim()) {
      errors.contact = 'Contact number is required';
    } else if (!/^\d{10}$/.test(contact)) {
      errors.contact = 'Contact number must be a 10-digit number';
    }

    // Email validation: standard email format
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Email is invalid';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      axios.post("https://664b1152a300e8795d441633.mockapi.io/crudoperation", {
        name: name,
        email: email,
        contact: contact,
        header,
      })
      .then(() => {
        navigate("/read");
      });
    } else {
      alert('Form has errors.');
    }
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
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">Contact</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="numberHelp"
            onChange={(e) => setContact(e.target.value)}
          />
          {errors.contact && <p style={{ color: 'red' }}>{errors.contact}</p>}
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
