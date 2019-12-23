import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Grid, withStyles } from '@material-ui/core';
import Ticket from './Ticket';

const styles = theme => ({
    
});

class Tickets extends React.Component {
    render() {
        const { props: { classes, ticketsData } } = this;
        const ticketsElements = ticketsData.map(ticket => <Ticket ticket={ticket}/>)
        return (
            ticketsData 
                ?<Grid>
                    {ticketsElements}
                </Grid>
                :<div></div>
        );
    }
}

export default compose(withStyles(styles))(Tickets);