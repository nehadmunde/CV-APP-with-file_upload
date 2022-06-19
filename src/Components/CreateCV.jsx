import React from "react";
import { useState } from "react";
import axios from 'axios'

const CreateCV = () => {
    const [data,setData]=useState({
        // profile:"",
        name:"",
        email:"",
        phone:0,
        ug:"",
        pg:""
    });

    const [img,setImg]=useState('')

const onFileChange=(e)=>{
   setImg(e.target.files[0]);
}

    const onDataChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }


    const configAxios = {
        headers: {
            'content-type': 'multipart/form-data',
        }
    }
    
    const formData = new FormData()
    
    const onSubmitHandle=async()=>{
        
        formData.append("file",img);
        formData.append("name",data.name)
        formData.append("email",data.email)
        formData.append("phone",data.phone)
        formData.append("ug",data.ug)
        formData.append("pg",data.pg)
        await axios.post('http://localhost:9012/Api',formData,configAxios)
        .then(res=>{
            alert("Data Submited.");
        }).catch(err=>{
            console.log(err);
        })
    }

  return (
    <div className="container mt-5">
      <h1 className="alert alert-dark text-center">Create CV</h1>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Profile Picture :
        </label>
        <input class="form-control" 
        type="file" name="file" 
        id="formFile"
        onChange={onFileChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          aria-describedby="emailHelp"
          placeholder="Enter Name Here"
          onChange={onDataChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter email Here"
          onChange={onDataChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Phone No.
        </label>
        <input
          type="Number"
          className="form-control"
          name="phone"
          aria-describedby="emailHelp"
          placeholder="Enter Phone No. Here"
          onChange={onDataChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Educational Details : (Graduation)
        </label>
        <input
          type="text"
          className="form-control"
          name="ug"
          aria-describedby="emailHelp"
          placeholder="Enter Graduation Details Here"
          onChange={onDataChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Educational Details : (Post-Graduation)
        </label>
        <input
          type="text"
          className="form-control"
          name="pg"
          placeholder="Enter Post-Graduation Details  Here"
          onChange={onDataChange}
        />
      </div>

      <button type="submit" className="btn btn-dark" onClick={onSubmitHandle}>
        Submit
      </button>
    </div>
  );
};

export default CreateCV;
