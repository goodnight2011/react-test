import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './nav/Nav.js'

function orders() {
    return (
        <p>orders section</p>
    );
}

function receipts() {
    return (<p>receipts section</p>);
}

function net() {
    return (<p>net section</p>);
}

class App extends Component {
    render() {
        const items = [
            {
                name: 'Orders',
                link: '/orders',
                component: orders
            },
            {
                name: 'Receipts',
                link: '/receipts',
                component: receipts
            },
            {
                name: 'Net',
                link: '/net',
                component: net
            },
        ];
        return (
            <Nav items={items}/>
        );
    }
}

export default App;
