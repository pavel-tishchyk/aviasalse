import React from 'react';
import { compose } from 'redux';
import { Grid, withStyles, Tabs, Tab } from '@material-ui/core';

const styles = theme => ({
    tab: {
        width: '50%',
    },
});

const TabsComponent = (props) => {
    const { classes } = props;
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid xs={12}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab label="Самый дешёвый" classNane={classes.tab}/>
                <Tab label="Самый быстрый" classNane={classes.tab}/>
            </Tabs>
        </Grid>
    );
}

export default compose(withStyles(styles))(TabsComponent);