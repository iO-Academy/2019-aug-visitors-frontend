import React from "react";

export class Logo extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <img src="logo-academy.svg" />
            </div>
        )
    }
}


