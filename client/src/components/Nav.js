import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
 
export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className="nav-links">
          <Link className="nav-style" to="/">
            <li>Home</li>
          </Link>
 
          <Link className="nav-style" to="/Dashboard">
            <li>Dashboard</li>
          </Link>
 
          <Link className="nav-style" to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    );
  }
}