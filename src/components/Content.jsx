import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Grid, withStyles } from '@material-ui/core';
import Tabs from './Tabs';
import Tickets from './Tickets';
import { getSearchIdThunkCreator } from './../redux/app-reducer';
import { filteredTicketsDataSelector } from './../redux/app-selectors';

const styles = theme => ({
    
});

class Content extends React.Component {
    componentDidMount() {
        this.props.getSearchId();
    }

    render() {
        const { props: { classes, ticketsData } } = this;
        return (
            <Grid>
                <Tabs />
                {ticketsData && <Tickets ticketsData={ticketsData}/>}
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ticketsData: filteredTicketsDataSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchId: () => dispatch(getSearchIdThunkCreator()),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles))(Content);