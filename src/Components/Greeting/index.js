import React from "react";

export class Greeting extends React.Component {
    render() {
        return (
                <h2 className={this.props.className} >{this.props.value}</h2>
        )
    }
}