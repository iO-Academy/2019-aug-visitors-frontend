import React from "react";

export class Instructions extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.instructions}</p>
            </div>
        )
    }
}