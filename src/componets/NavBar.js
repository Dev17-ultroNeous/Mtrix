import React from "react";
import {
    NavLink
} from "react-router-dom";

const navStyle = ({ isActive }) => {
    return {
        fontWeight: isActive ? 'bold' : 'normal'
    }
}

const NavBar = () => {
    return (
        <div className="Navbar">
            <NavLink style={navStyle} to="/">Home </NavLink>
            <NavLink style={navStyle} to="/form">Form </NavLink>
            <NavLink style={navStyle} to="/todolist">TodoList </NavLink>

        </div>
    )

}

export default NavBar;