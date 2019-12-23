import React from 'react';
import { Grid } from '@material-ui/core';
import Segment from './Segment';
import { withWrapper } from './../hoc/withWrapper';

const Ticket = (props) => {
    const { ticket } = props;
    const segmentsElements = ticket.segments.map(segment => <Segment segment={segment}/>)
    return (
        <Grid container>
            <Grid container>
                <Grid item xs={6}>
                    <p>{ticket.price} P</p>
                </Grid>
                <Grid item xs={6}>
                    <img src={`http://pics.avs.io/99/36/${ticket.carrier}.png`} alt="company-logo"/>
                </Grid>
            </Grid>
            {segmentsElements}
        </Grid>
    );
}

export default withWrapper(Ticket);