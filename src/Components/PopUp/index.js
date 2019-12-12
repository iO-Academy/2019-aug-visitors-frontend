import React, { Component } from "react";
import {Icon} from "../Icon";
import {Message} from "../Message";
import "./index.css";

export class PopUp extends Component {

    constructor(props) {
        super(props)
        this.state = {'visibility' : 'd-none'}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({'visibility': nextProps.visibility})
    }

    render() {
        return (
            <div className={this.state.visibility}>
                <div className="background-container">
                    <div className="popup-container">
                        <Icon className="icon"/>
                        <Message className="message-text" text="Visitor sign-in successful!" />
                        <img src="checkbox.gif" />
                    </div>
                </div>
             </div>
        )
    }
}