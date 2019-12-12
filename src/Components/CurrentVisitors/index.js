import React, { Component } from "react";
import "./index.css";

export class CurrentVisitors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'authorised': this.props.authorised,
            'visitors': []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({'authorised': nextProps.authorised})
        if (nextProps.authorised) {
            this.setState({
                'visitors': [{
                    'forename': 'Mike',
                    'surname': 'Jaguar',
                    'Company': 'Mayden Academy',
                    'timestamp': '1576158988670'
                }]
            })
            // call fetch request function
        }
    }

    // fetch


    render = () => {
        let visitors = [];
        this.state.visitors.map((visitor) => {
            let temp =  <tr>
                <th>{visitor.forename}</th>
                <th>{visitor.surname}</th>
                <th>{visitor.company}</th>
                <th>{visitor.timestamp}</th>
            </tr>
            visitors.push()
        })

        return (
            <div>
                <h2>Current Registered Visitors</h2>
                <table className="table">
                    <tr>
                        <th>Forename</th>
                        <th>Surname</th>
                        <th>Company</th>
                        <th>Time in</th>
                    </tr>
                </table>
            </div>
        )
    }
}