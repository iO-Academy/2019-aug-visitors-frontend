import React, { Component } from "react";
import {Link} from "react-router-dom";
import {Logo} from "../Logo";
import "./index.css";
import {Message} from "../Message";
import {Instructions} from "../Instructions";
import {TextInput} from "../TextInput";
import {Button} from "../Button";
import {Greeting} from "../Greeting";
import {PopUp} from "../PopUp";

const html_specialchars = require('html-specialchars');

export class VisitorSignInPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'forename': '',
            'surname': '',
            'company': '',
            'errorMsg': '',
            'popupVisibility': 'd-none'
        }
    }

    SetForename = (e) => {
        let forename = e.target.value;
        this.setState({'forename': forename});
    }

    SetSurname = (e) => {
        let surname = e.target.value;
        this.setState({'surname': surname});
    }

    SetCompany = (e) => {
        let company = e.target.value;
        this.setState({'company': company});
    }

    ValidateRequiredInput = (input) => {
        var result = false;
        if (input.length >= 1 && input.length <= 50) {
            result = true;
        }
        return result;
    }

    ValidateOptionalInput = (input) => {
        var result = false;
        if (input.length <= 50) {
            result = true;
        }
        return result;
    }

    SignInVisitor = () => {
        let valForename = this.ValidateRequiredInput(this.state.forename.trim());
        let valSurname = this.ValidateRequiredInput(this.state.surname.trim());
        let valCompany = this.ValidateOptionalInput(this.state.company.trim());

        if (valForename && valSurname && valCompany) {
            this.setState({'errorMsg': ''});
            let visitorData = {
                'forename': html_specialchars.escape(this.state.forename),
                'surname': html_specialchars.escape(this.state.surname),
                'company': html_specialchars.escape(this.state.company)
            }
            fetch('http://localhost:3001/visitors', {
                method: 'POST',
                body: JSON.stringify(visitorData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(response => {
                    if (response.success) {
                        this.setState({'popupVisibility':''})
                        setTimeout(() => {
                            window.location = "/";
                        }, 2000);
                    } else {
                        this.setState({'errorMsg': response.msg})
                    }
                })
        } else {
            this.setState({'errorMsg': 'Forename and Surname are required for registration. Please try again.'})
        }
    }

    render() {
        return (
            <div>
                <header>
                    <div className="banner">
                        <Logo className="logo" />
                    </div>
                </header>

                <main className="main-container">
                    <div className="sign-in-greeting-container">
                        <Greeting className="greeting-text" value="Visitor Sign-In"/>
                    </div>
                    <div className="sign-in-input-container">
                        <TextInput action={this.SetForename} name="forename" max="50" min="1" placeholderText="Forename"/>
                        <TextInput action={this.SetSurname} name="surname" max="50" min="1" placeholderText="Surname" />
                        <TextInput action={this.SetCompany} name="company" max="50" min="0" placeholderText="Company (optional)" />
                        <div className="instructions-container">
                            <Instructions instructions="Please enter your forename and surname. The company name is optional."/>
                        </div>
                        <div className="sign-in-button-container">
                            <Button action={this.SignInVisitor} className="btn btn-success sign-in-button" value={"Submit"}  />
                        </div>
                        <Message className="text-danger errorMsg" text={this.state.errorMsg} />
                    </div>
                </main>

                <footer>
                    <div className="back-to-home-link">
                        <Link to="/" className="btn btn-secondary back">Back</Link>
                    </div>
                </footer>

                <PopUp message="Visitor sign-in successful!" visibility={this.state.popupVisibility}></PopUp>

            </div>
        )
    }
}