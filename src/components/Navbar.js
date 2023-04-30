import React from "react";
import {useOutlet as Outlet,Link,useNavigate } from "react-router-dom"

export default function Navbar(props) { 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  {props.about}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/contact"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  {props.contact}
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}
