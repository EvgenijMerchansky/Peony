import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './Authorization';
import Admin from './Admin';

import Header from './Header';

class FRside extends Component{
    render() {
        return(
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={Header}/>
                        <Route path="/admin" component={Dashboard}/>
                        <Route path="/authorized/:id" component={Admin}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default FRside;