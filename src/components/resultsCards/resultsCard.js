import React, { Component } from 'react'
import { Card, CardContent, styled, Typography} from '@material-ui/core'
import AusRes from './ausRes';
import './css/resultsCard.scss';

const MyCard = styled(Card)({
    background: '#00000032',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B'
})

export class resultsCard extends Component {
    render() {
        return (
            <div id="card">
                <MyCard>
                    <div id="bg">
                        <CardContent>
                            <div id="grid-container-results">
                                <section id="title">
                                    <h2><strong>Results</strong></h2>
                                </section>
                                <section id="results">
                                    <AusRes/>
                                </section>
                            </div>
                        </CardContent>
                    </div>
                </MyCard>
            </div>
        )
    }
}

export default resultsCard
