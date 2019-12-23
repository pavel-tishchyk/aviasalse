import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    wrapper: {
        background: '#FFFFFF',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        padding: '20px',
        margin: '20px',
    }
})
 
export const withWrapper = (Component) => {

    class WrapperComponent extends React.Component {
        render () {
            const { props: { classes } } = this;
            return (
                <div className={classes.wrapper}>
                    <Component {...this.props} />
                </div>
            );
        }
    }

    return withStyles(styles)(WrapperComponent);
}
