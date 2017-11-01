import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from '../Authorization';
import Admin from '../Admin';

class Panel extends Component{
    render() {
        console.log(this);
        return(
            <div>
                <Router>
                    <div>
                        <Route exact path="/admin" component={Dashboard}/>
                        <Route path="/panel" component={Admin}/>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Panel;