import React, { Component } from 'react'
import { Card, CardContent, styled, Typography} from '@material-ui/core'
import ScrollingTab from './scrollingTab';
import './resultsCard.css';

const MyCard = styled(Card)({
    background: '#00000032',
    borderStyle: 'solid',
    borderWidth: 'medium',
    borderColor: '#0000004B'
})

export class resultsCard extends Component {
    render() {
        return (
            <div className="card">
                <MyCard>
                    <CardContent>
                        <div className="grid-container-results">
                            <section className="title">
                                <Typography variant="h4">Results</Typography>
                            </section>
                            <section className="results">
                                <ScrollingTab/>
                            </section>
                        </div>
                    </CardContent>
                </MyCard>
            </div>
        )
    }
}

export default resultsCard
