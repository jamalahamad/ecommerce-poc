// components/Header.jsx
import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import './Header.css';
import "bootstrap/js/src/collapse.js"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const { user, logout } = useAuth();

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    console.log("cliciked=======")
    console.log("isNavCollapsed=======", isNavCollapsed)
    setIsNavCollapsed(!isNavCollapsed)
  }

  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Shopping Mall</Link>
    <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02" 
    class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} 
    >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" active = 'white' aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav me-right" >
          <li className="nav-item">
            <Link to="login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
            <Link to="signup" className="nav-link" >Signup</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="cart">Cart</Link>
            </li>
          </ul> 
    </div>
  </div>
</nav>


  );
};

export default Header;