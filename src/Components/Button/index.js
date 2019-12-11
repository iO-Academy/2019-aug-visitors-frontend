import React, { Component } from "react";
import "./index.css";

export class Button extends Component {
    render () {
        return  (
            <button onClick={this.props.action}>{this.props.value}</button>
        )
    }
}