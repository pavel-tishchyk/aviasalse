import React from 'react';
import { Grid } from '@material-ui/core';

const Segment = (props) => {
    const { segment } = props;
    const parseTime = (start, end) => {
        const date = new Date(start);
        const hours = date.getUTCHours()
        const minutes = date.getUTCMinutes()
        const endDate = new Date(Date.parse(start) + end * 60000)
        const hoursEnd = endDate.getUTCHours()
        const minutesEnd = endDate.getUTCMinutes()
       
        return hours + ':' + minutes + '-' + hoursEnd + ':' + minutesEnd
    }
    //console.log(parseTime(segment.date, segment.duration));
    return (
        <Grid container>
            <Grid item xs={4}>
                <p>{segment.origin} - {segment.destination}</p>
                <p>{parseTime(segment.date, segment.duration)}</p>
            </Grid>
            <Grid item xs={4}>
                <p>В пути</p>
                <p>{Math.floor(segment.duration / 60)}ч {segment.duration % 60}м</p>
            </Grid>
            <Grid item xs={4}>
                <p>{segment.stops.length} пересадки</p>
                <p>{segment.stops.join(', ')}</p>
            </Grid>
        </Grid>
    );
}

export default Segment;