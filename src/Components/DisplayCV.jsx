import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

const DisplayCV=()=>{

    const [data,setData]=useState([]);
    const [updatedata,setupdatedata]=useState({
         file:"",
        name:"",
        email:"",
        phone:0,
        ug:"",
        pg:""
});
   
    const [flag,setFlag]=useState(false);

    useEffect(()=>{
      axios.get("http://localhost:9012/Api").then(res=>{
         setData(res.data);
      }).catch(err=>{
        console.log(err);
      })
    },[flag])
    
       const updateHandle=async(id)=>{
       await axios.get(`http://localhost:9012/Api/update/${id}`)
          .then(res=>{
            setupdatedata(res.data);
          }).catch(err=>{
            console.log(err);
          })
       }
    console.log("update",updatedata)
    return (
        <div className="container mt-5">
        <h1 className="alert alert-dark text-center">View CV</h1>
        <div className='row'>
         
        <div className="col-sm-10 offset-1 mt-5">
          
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone No.</th>
                    <th scope="col">Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                      {
                        data.map((ele,i)=>{
                        return(
                            <tr key={ i=1}>
                        <th scope="row" >{i+1}</th>
                        <td>{ele.name}</td>
                        <td>{ele.email}</td>
                        <td>{ele.phone}</td>
                        <td>
                            <button type="button" className="btn btn-info btn-sm"
                            data-bs-toggle="modal" data-bs-target="#editModel" onClick={()=>updateHandle(ele._id)}
                             >View CV</button>

                        </td>

                      </tr>
                        )
                        })
                      }
                </tbody>
              </table>
        </div>

        </div>
        <div className='row'>
        <div className='row'>
        {/* <!-- Modal --> */}
        <div className="modal fade" id="editModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">View CV</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      {/* model body */}
      <div className="modal-body">
      <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Profile Picture  :</label>
                    <img src={updatedata.file} alt="OOPs Sorry" height="70%" width="80%"></img>
                    </div>
      <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Name :</label>
                    <br/>
                    <label for="exampleInputEmail1" className="form-label" >{updatedata.name}</label>
                    </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email-ID</label>
                    <br/>
                    <label for="exampleInputEmail1" className="form-label" >{updatedata.email}</label>
                  </div> 
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone No.</label>
                    <br/>
                    <label for="exampleInputEmail1" className="form-label" >{updatedata.phone}</label>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Educational Details : (Graduation)</label>
                    <br/>
                    <label for="exampleInputEmail1" className="form-label" >{updatedata.ug}</label>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Educational Details : (Post-Graduation)</label>
                    <br/>
                    <label for="exampleInputEmail1" className="form-label" >{updatedata.pg}</label>
                  </div>  
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success" >Downlaod</button>
      </div>
    </div>
  </div>
</div>
     </div>
        </div>
        </div>

    )
}

export default DisplayCV;