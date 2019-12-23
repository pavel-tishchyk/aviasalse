import React from 'react';
import { connect } from 'react-redux';
import { Grid, withStyles, Typography, FormGroup } from '@material-ui/core';
import { withWrapper } from '../hoc/withWrapper';
import { compose } from 'redux';
import FilterItem from './FilterItem';
import { setFilterData } from './../redux/app-reducer';
import { filterDataSelector } from './../redux/app-selectors';

const styles = theme => ({
    
});

const Filter = (props) => {
        const { classes, filterData, setFilter } = props;

        const handleChange = (filterId) => {
            const changedFilterData = filterData.map(filter => { 
                if(filterId !== filter.id) return filter;
                return {...filter,
                    enabled: !filter.enabled
                }  
            })
            // console.log(changedFilterData);
            setFilter(changedFilterData);
        }

        const itemElements = filterData.map(filter => <FilterItem key={filter.id} filter={filter} handleChange={handleChange}/>);
        return (
            <Grid container direction="column">
                <Typography>Количество пересадок</Typography>
                <FormGroup column>
                    {itemElements}
                </FormGroup>
            </Grid>
        );
}

const mapStateToProps = (state) => {
    return {
        filterData: filterDataSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (filterData) => dispatch(setFilterData(filterData))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withWrapper,
    withStyles(styles))(Filter);