import React, { Component } from 'react'
import { Card, CardContent, styled} from '@material-ui/core'
import ScrollingTab from './scrollingTab';
import './resultsCard.css';

const MyCard = styled(Card)({

})

export class resultsCard extends Component {
    render() {
        return (
            <MyCard>
                <CardContent>
                    <div className="grid-container-results">
                        <section className="title">
                            <h1>Results</h1>
                        </section>
                        <section className="results">
                            <ScrollingTab/>
                        </section>
                    </div>
                </CardContent>
            </MyCard>
        )
    }
}

export default resultsCard
