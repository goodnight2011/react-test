import {Component} from 'react';
import * as React from "react";
import './Nav.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {items: props.items || []};
    }

    render() {
        return (
            <Router>
                <ul className="list">
                    {this.state.items.map((item, cnt) => <Link to={item.link}>
                        <li className="item" key={cnt}>{item.name}</li>
                    </Link>)}
                    {this.state.items.map(item => <Route path={item.link} component={item.component}/>)}
                </ul>
            </Router>
        );
    }
}

export default Nav;
