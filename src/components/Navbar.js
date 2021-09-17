import React, { Component } from 'react'
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <a className="active" href="/">Home</a>
                <a href="/">Health</a>
                <a href="/">Business</a>
                <a href="/">Sports</a>
                <a href="/">Science</a>
                <a href="/">Tech</a>
            </div>
        )
    }
}

export default Navbar
