import React from "react";
import "./style.css";
import logo from "./GoogleBookSearch.png";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-primary sticky-top">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="btn-group" role="group" aria-label="Basic example">
      <a href="/"><button type="button" className="btn btn-secondary btn-homePage">Search</button></a>
      <a href="/saved"><button type="button" className="btn btn-secondary btn-savedPage">Saved</button></a>
    </div>
    </nav>
  );
}

export default Nav;
