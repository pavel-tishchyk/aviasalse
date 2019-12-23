import React from 'react';
import { withStyles, FormControlLabel, Checkbox} from '@material-ui/core';
import { compose } from 'redux';

const styles = theme => ({
    
});

const FilterItem = (props) => {
        const { classes, filter, handleChange } = props;
        return (
            <FormControlLabel
            control={
            <Checkbox 
                checked={filter.enabled}
                onChange={() => handleChange(filter.id)}/>
            }
            label={filter.name}
            />
        );
}

export default compose(withStyles(styles))(FilterItem);