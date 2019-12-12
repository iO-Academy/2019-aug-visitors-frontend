import React, { Component } from "react";
import "./index.css";
import {TextInput} from "../TextInput";
import {Button} from "../Button";
import {Message} from "../Message";

const html_specialchars = require('html-specialchars');


export class AdminLoginPopUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'pin': '',
            'errorMsg': ''
        }
    }

    SetPin = (e) => {
        let pin = e.target.value;
        this.setState({'pin': pin});
    }

    ValidatePin = (pin) => {
        return (pin.length === 4);
    }


    SubmitPin = () => {
        let pin = this.ValidatePin(this.state.pin.trim());

        if (pin) {
            this.setState({'errorMsg': ''});
            let pin = {'pin': html_specialchars.escape(this.state.pin)}
            fetch('http://localhost:3002/verifyPin', {
                method: 'POST',
                body: JSON.stringify(pin),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => {
                    sessionStorage.token = response.data;
                })
        } else {
            this.setState({'errorMsg': 'Pin is incorrect. Please try again.'})
        }
    }

    render() {
        return (
            <div>
                <main className="main-container">
                    <div className="admin-pin-container">
                        <TextInput action={this.SetPin} name="pin" max="4" min="4" placeholderText="Enter 4-digit pin"/>
                        <Button action={this.SubmitPin} className="btn btn-success sign-in-button" value={"Submit"}  />
                        <Message className="text-danger errorMsg" text={this.state.errorMsg} />
                    </div>
                </main>
            </div>
        )
    }
}