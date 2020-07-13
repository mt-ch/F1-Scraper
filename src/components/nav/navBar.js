import React, { Component } from 'react'
import { AppBar, Toolbar } from '@material-ui/core';

import './navBar.css';

//Assets
import logo from '../../assets/logo.png';

export class navBar extends Component {
    render() {
        return (
            <AppBar position="static" style={{ background: '#FFFFFF00', boxShadow: 'none'}}>
                <Toolbar className="toolbar">
                    <img className="logo" src={logo}/>
                    <h4>Scraper</h4>
                </Toolbar>    
            </AppBar>
        )
    }
}

export default navBar
