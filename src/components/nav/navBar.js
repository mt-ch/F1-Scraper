import React, { Component } from 'react'
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../../assets/logos/logo.png';

export class navBar extends Component {
    render() {
        return (
            <AppBar position="static" style={{ background: '#FFFFFF00', boxShadow: 'none'}}>
                <Toolbar id="toolbar">
                    <img id="logo" src={logo} alt={'f1'}/>
                    <p><strong>Scraper</strong></p>
                </Toolbar>    
            </AppBar>
        )
    }
}

export default navBar
