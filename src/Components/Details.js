import React from "react";
import "./Details.css";
import { useState } from "react";



const Details = () => {
  

    const [data,setData] = useState([]);
  const [userData, setUserdata] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    address: "",
  });

  const getUserdata = (e) => {
    const { value, name } = e.target; 

    setUserdata(() => {
      return {
        ...userData,
        [name]: value,
      };
    });
  };

  const addUserdata = (e) =>{
           e.preventDefault();
           const { name, email,mobilenumber } = userData;

           if (name === "") {
            alert("Enter name")
           } else if (email === "") {
            alert("Enter Email")
          
           } else if (!email.includes("@")) {
            alert("Enter Valid Email")
           
           } else if (mobilenumber.length<11) {
            alert("Enter valid Mobile Number ")
           } 
            else {
               
               localStorage.setItem("USER",JSON.stringify( [...data,userData] ));
               
   
           }

 }
    const user=localStorage.getItem("USER")
       console.log(user)
    


  return (
    <div className="signup">
      <form>
        <div>
    
        </div>
        <div className="mb-3">
          <div className="mb-3">
            <label  className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={getUserdata}
              name="name"
            />
          </div>
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={getUserdata}
            name="email"
          />
         
        </div>
        
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword3"
            onChange={getUserdata}
            name="mobilenumber"
          />
        </div>
        <div className="mb-3">
            <label  className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={getUserdata}
              name="name"
            />
          </div>

        <button
          type="submit"
          className="btn btn-secondary"
          onClick={addUserdata}
        >
         Submit
        </button>
      </form>
     
    </div>
  );
};

export default Details;
