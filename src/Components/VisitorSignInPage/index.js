import React, { Component } from "react";
import {Link} from "react-router-dom";
import {Logo} from "../Logo";
import "./index.css";
import {Message} from "../Message";
import {Instructions} from "../Instructions";
import {TextInput} from "../TextInput";
import {Button} from "../Button";

const html_specialchars = require('html-specialchars');

export class VisitorSignInPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'forename': '',
            'surname': '',
            'company': '',
            'errorMsg': ''
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
                    console.log('visitor registered');
                })
        } else {
            this.setState({'errorMsg': 'Forename and Surname are required for registration. Please try again.'})
        }

    }

    render() {
        return (
            <div>
                <Logo className="visitorSignInLogo" />
                <Instructions />
                <TextInput action={this.SetForename} name="forename" max="50" min="1" />
                <TextInput action={this.SetSurname} name="surname" max="50" min="1"  />
                <TextInput action={this.SetCompany} name="company" max="50" min="0"  />
                <Button action={this.SignInVisitor} className="btn btn-success" value={"Submit"}  />
                <Message text={this.state.errorMsg} />
                <Link to="/" className="btn btn-secondary back">Back</Link>
            </div>
        )
    }
}