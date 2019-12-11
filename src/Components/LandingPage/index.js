import React, { Component } from "react";
// import {Button} from "../Button";
import {Link} from "react-router-dom";
import {Logo} from "../Logo";
import {Greeting} from "../Greeting";
import "./index.css";

export class LandingPage extends Component {

    adminAction = () => {
        console.log('Admin')
    }
    visitorAction = () => {
        console.log('visitor')
    }

    render() {
        return (
            <div>
                <Logo className="landingLogo"></Logo>
                <Greeting className="landingGreeting"></Greeting>
                <Link to="/visitors" className="btn btn-success visitor">Visitor Sign In</Link>
                <Link to="/admin" className="btn btn-secondary admin">Admin Sign In</Link>
            </div>
        )
    }
}