import axios from "axios";
import React, { useEffect, useState } from "react";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://664b1152a300e8795d441633.mockapi.io/crudoperation")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
    .delete(`https://664b1152a300e8795d441633.mockapi.io/crudoperation${id}`)
    .then(
        () => {
          getData();
        }
      )
    
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Read Opertaion</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.contact}</td>
                  <td>
                    <button className="btn-success">Edit</button>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
