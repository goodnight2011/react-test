import {Component} from 'react';
import * as React from "react";
import  './Nav.css';

class Nav extends Component{

    constructor(props){
        super(props);
        this.state = {
           items: ["one", "two", "three"]
        }
    }
    render(){
        return (
            <ul>
                {this.state.items.map((item, cnt) => <li key={cnt}>{item}</li>)}
            </ul>
        ) ;
    }
}
export default Nav;
