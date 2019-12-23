import React from 'react';
import { compose } from 'redux';
import { withStyles, Grid } from '@material-ui/core';
import logo from './../img/logo.png';

const styles = theme => ({
    wrapper: {
        textAlign: 'center',
    }
});

const Logo = (props) => {
    const { classes } = props;
    return (
        <Grid className={classes.wrapper}>
            <img src={logo} alt='logo'/>
        </Grid>
    );
}


export default compose(withStyles(styles))(Logo);