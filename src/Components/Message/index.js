import React from "react";

export class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {'msg': this.props.text}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({'msg':nextProps.text})
    }

    render() {
        return (
            <div>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}