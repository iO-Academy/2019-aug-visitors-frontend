import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import {LandingPage} from './Components/LandingPage';
import {VisitorSignInPage} from './Components/VisitorSignInPage';
import {AdminLoginPopUp} from "./Components/AdminLogInPopUp";

import './index.css';
import {AdminPage} from "./Components/AdminPage";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/visitors" component={VisitorSignInPage} />
                        <Route exact path="/admin" component={AdminPage} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Routing />, document.getElementById('root'));

