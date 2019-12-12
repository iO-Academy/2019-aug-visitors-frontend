import React, { Component } from "react";
import "./index.css";
import {AdminLoginPopUp} from "../AdminLogInPopUp";
import {Message} from "../Message";
const html_specialchars = require('html-specialchars');

export class AdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = {'auth': false}
    }

    SetAuth = authStatus => {
        this.setState({'auth': authStatus});
        console.log('hi Mick J');
    }


    render = () => {
        return (
            <div>
                <main className="main-container">
                    <AdminLoginPopUp authStatus={this.setAuth} />
                    <h2>Current Registered Visitors</h2>
                    <table className="table">
                        <tr>
                            <th>Forename</th>
                            <th>Surname</th>
                            <th>Company</th>
                            <th>Time in</th>
                        </tr>

                    </table>
                </main>
            </div>
        )
    }
}