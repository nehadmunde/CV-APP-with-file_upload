import React from 'react';
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
  <h4 className="alert alert-dark text-center" >
    <a class="navbar-brand" href="">CV Project</a>
    </h4>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
          <Link to="/">Create CV</Link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/register">
          <Link to="/cv">View CV</Link>
          </a>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;