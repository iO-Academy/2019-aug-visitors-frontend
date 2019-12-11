import React from "react";

export class TextInput extends React.Component {
    render() {
        return (
            <input onKeyUp={this.props.action} type="text" name={this.props.value} />
        )
    }
}