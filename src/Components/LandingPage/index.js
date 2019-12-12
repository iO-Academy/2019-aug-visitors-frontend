import React, { Component } from "react";
import {Link} from "react-router-dom";
import {Logo} from "../Logo";
import {Greeting} from "../Greeting";
import "./index.css";

export class LandingPage extends Component {

    render() {
        return (
            <div>
                <header>
                    <div className="banner">
                        <Logo className="logo"/>
                    </div>
                </header>

                <main className="main-container">
                    <div className="greeting-container">
                        <Greeting className="greeting-text" value="Welcome to Mayden Academy"/>
                    </div>
                    <div className="sign-in-button-container">
                        <Link to="/visitors" className="btn sign-in-button">Visitor Sign In</Link>
                    </div>
                </main>
                <footer>
                    <div className="admin-link">
                        <Link to="/admin" className="btn btn-secondary admin">Admin Sign In</Link>
                    </div>
                </footer>
            </div>
        )
    }
}