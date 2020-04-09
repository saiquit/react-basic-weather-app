import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5 ">
        <a className="navbar-brand">Navbar</a>
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">Features</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
