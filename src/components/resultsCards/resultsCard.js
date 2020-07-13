import React, { Component } from 'react'
import { Card, CardContent, styled, ButtonGroup, Button, Grid } from '@material-ui/core'
import ScrollingTab from './scrollingTab';
import '../standingsCard/standingsCard.css';
import bgTexture from '../../assets/textureCard.jpg';

const MyCard = styled(Card)({
    
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    background: '#00000032',
    marginLeft: -5,
    marginRight: -5,
    marginTop: 15,
    marginBottom: 15,
    padding: 10,
    maxWidth: 500,

})

export class resultsCard extends Component {
    render() {
        return (
            <MyCard>
                <CardContent>
             
                            <h2 className='title'>
                                Results
                            </h2>
                 
                    <ScrollingTab/>
                </CardContent>
            </MyCard>
        )
    }
}

export default resultsCard
