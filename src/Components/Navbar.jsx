import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar backdrop-blur-lg bg-white/30 z-50 fixed">
            <div className="navbar-start">
                
                <Link to='/' className="btn btn-ghost text-xl">Coffee Book</Link>
            </div>
           
            <div className="navbar-end gap-4 lg:gap-10 mx-4">
                <NavLink 
                className={({isActive})=> `font-bold ${isActive ? 'text-warning' : "hover:text-warning"}`}
                 to='/'>Home</NavLink>
                <NavLink
                className={({isActive})=> `font-bold ${isActive ? 'text-warning' : "hover:text-warning"}`}
                 to='/coffees'>Coffees</NavLink>
                <NavLink 
                className={({isActive})=> `font-bold ${isActive ? 'text-warning' : "hover:text-warning"}`}
                to='/dashboard'>Dashboard</NavLink>
            </div>
        </div>
    );
};

export default Navbar;