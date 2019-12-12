import React, { Component } from "react";
import "./index.css";
import {AdminLoginPopUp} from "../AdminLogInPopUp";
import {AdminPanel} from "../AdminPanel";
const html_specialchars = require('html-specialchars');


export class AdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'auth': false,
            'popUpVisibility': ''
        }
    }

    SetAuth = (authStatus) => {
        this.setState({
            'auth': authStatus,
            'popUpVisibility': 'd-none'
        })
    }


    render = () => {
        return (
            <div>
                <main className="main-container">
                    <AdminLoginPopUp authStatus={this.SetAuth} visibility={this.state.popUpVisibility} />

                    <AdminPanel authorised={this.state.auth}/>

                </main>
            </div>
        )
    }
}