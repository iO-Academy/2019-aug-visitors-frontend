import React from "react";

export class Icon extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <img src={"logo-academy-a.svg"} />
            </div>
        )
    }
}