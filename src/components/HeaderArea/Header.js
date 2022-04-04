import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {

    return (
        <div>
        <ul className="headerArea">
          <li className="header"><NavLink to="/"  className="Navlink">Dashboard</NavLink></li>
          <li className="header"><NavLink to="/addRecord" className="Navlink">Add Student</NavLink></li>
        </ul>
        </div>
    )
}

export default Header;