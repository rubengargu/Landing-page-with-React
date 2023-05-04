import React from "react";

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
          <div className="container-fluid div position-relative">
            <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse position-absolute end-0 pe-5" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="#">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-secondary" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;