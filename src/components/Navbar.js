import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <Link to="/">Home</Link> 
                <Link to="/health">Health</Link>
                <Link to="/business">Business</Link>
                <Link to="/sports">Sports</Link>
                <Link to="/science">Science</Link>
                <Link to="/technology">Tech</Link>
            </div>
        )
    }
}

export default Navbar
