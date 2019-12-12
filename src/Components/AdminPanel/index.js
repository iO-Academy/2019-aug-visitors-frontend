import React, { Component } from "react";
import "./index.css";
import {CurrentVisitors} from "../CurrentVisitors";

export class AdminPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'visibility': 'd-none',
            'authorised': false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({'authorised': nextProps.authorised})
        if (nextProps.authorised) {
            this.setState({'visibility': ''});
        }
    }


    render = () => {
        return (
            <div className={this.state.visibility}>
                <CurrentVisitors authorised={this.state.authorised} />
            </div>
        )
    }
}