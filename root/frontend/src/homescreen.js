import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/user'
import Charity from './components/charity'
import Home from './components/home'
import SignUp from './components/signup'

class Homescreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            maps_part: []
        }
    }

    componentWillMount() {

    }
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/user' component={User} />
                        <Route exact path='/charity' component={Charity} />
                        <Route exact path='/signup' component={SignUp}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Homescreen;