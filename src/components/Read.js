import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark,setTabledark] =useState('');
  

  
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
    .delete(`https://664b1152a300e8795d441633.mockapi.io/crudoperation/${id}`)
    .then(
        () => {
          getData();
        }
      )
    
  }

  const setToLocalStorage=(id,name,email,contact)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("contact",contact)

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox"
  onClick={()=>{
    if(tabledark === 'table-dark')
      setTabledark("");
    else setTabledark("table-dark");
  }} />
</div>
      <div className="d-flex justify-content-between m-2">
      <h2>Read-Operaton</h2>
      <Link to="/">
      <button className="btn btn-success">Create</button>
      </Link>
      </div>
      <table className={`table ${tabledark}`}>
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
        {data.map((eachData,index) => {
          return (
            <>
              <tbody>
                <tr>
                  {/* <th scope="row">{eachData.id}</th> */}
                  <th scope="row">{index+1}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.contact}</td>
                  <td>
                    
                    <Link to="/update">
                    <button className="btn-success"
                    onClick={()=>setToLocalStorage(
                      eachData.id,eachData.name,eachData.email,eachData.contact
                    )}>Edit</button>
                    </Link>
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
