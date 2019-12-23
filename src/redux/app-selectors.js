import { createSelector } from 'reselect';

export const filterDataSelector = (state) => state.appData.filterData;
export const ticketsDataSelector = (state) => state.appData.ticketsData;

export const stopsFilterSelector = createSelector(
    filterDataSelector,
    filterData => {
        const stopsFilter = filterData.filter(filter => filter.enabled).map(filter => {
            return filter.stops 
        })
        return stopsFilter;
    }
);

export const filteredTicketsDataSelector = createSelector(
    stopsFilterSelector,
    ticketsDataSelector,
    (stopsFilter, ticketsData) => {
        if(ticketsData === null) return ticketsData;
        const filteredTicketsData = ticketsData.filter(ticket => {
            return stopsFilter.indexOf(ticket.segments[0].stops.length) !== -1 
                && stopsFilter.indexOf(ticket.segments[1].stops.length) !== -1;
        })
        return filteredTicketsData;
    }
);