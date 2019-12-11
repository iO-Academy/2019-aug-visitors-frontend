import React, { Component } from "react";
import {Link} from "react-router-dom";
import {Logo} from "../Logo";
import "./index.css";
import {SuccessMessage} from "../SuccessMessage";
import {Instructions} from "../Instructions";
import {TextInput} from "../TextInput";
import {Button} from "../Button";

export class VisitorSignInPage extends Component {
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

    SignInVisitor = () => {

        let visitorData = {
            'forename': this.state.forename,
            'surname': this.state.surname,
            'company': this.state.company
        }
        fetch('http://localhost:3001/visitor', {
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
    }



    render() {
        return (
            <div>
                <Logo className="visitorSignInLogo" />
                <SuccessMessage />
                <Instructions />
                <TextInput action={this.SetForename} name="forename"  />
                <TextInput action={this.SetSurname} name="surname"  />
                <TextInput action={this.SetCompany} name="company"  />
                <Button action={this.SignInVisitor} className="btn btn-success" value={"Submit"}  />
                <Link to="/" className="btn btn-secondary back">Back</Link>
            </div>
        )
    }
}