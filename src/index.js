import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

import {LandingPage} from './Components/LandingPage';

import './index.css';


import visitorSignIn from './Components/LandingPage/index';

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={LandingPage}/>
                        {/*<Route path="/visitor" component={VisitorSignInPage}/>*/}
                        {/*<Route path="/landingPage" component={LandingPage}/>*/}
                        {/*<Route component={NotFound}/>*/}
                    </Switch>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Routing />, document.getElementById('root'));

