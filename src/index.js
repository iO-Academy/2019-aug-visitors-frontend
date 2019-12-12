import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import {LandingPage} from './Components/LandingPage';
import {VisitorSignInPage} from './Components/VisitorSignInPage';
import {PopUpPage} from "./Components/PopUp";

import './index.css';


class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route exact path="/visitors" component={VisitorSignInPage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Routing />, document.getElementById('root'));

