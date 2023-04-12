import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="title">
        <h2>
          <b>JobBox</b>
        </h2>
      </div>

      <div className="row">
        <div className="column">
          <div className="dropdown">
            <a className="col-1">Home</a>
            <a class="col-1">
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="dropdown1">
            <a class="col-1">Find a job</a>
            <a class="col-1">
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="dropdown2">
            <a class="col-1">Recruiters</a>
            <a class="col-1">
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="dropdown3">
            <a class="col-1">Candidates</a>
            <a class="col-1">
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="dropdown4">
            <a class="col-1">Blog</a>
            <a class="col-1">
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="dropdown5">
            <a class="col-1">Pages</a>
            <a class="col-1">
              <i class="fa fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <div class="column">
          <div className="rgstr">
            <a>Register</a>
          </div>
        </div>
        <div class="column">
          <button class="btn">Sign in</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
