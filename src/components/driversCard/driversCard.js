import React, { Component } from 'react'
import { Card, CardContent, styled } from '@material-ui/core'

const MyCard = styled(Card)({
    // backgroundImage: `url(${bgTexture})`,
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // Height: 100,
    // Width: 100,
    background: 'grey',
    marginLeft: -5,
    marginRight: -5,
    marginTop: 15,
    marginBottom: 20,
    padding: 20
});

export class driversCard extends Component {
    render() {
        return (
            <MyCard>
                <CardContent>
                    <h2>
                        Drivers
                    </h2>
                </CardContent>
            </MyCard>
        )
    }
}

export default driversCard
