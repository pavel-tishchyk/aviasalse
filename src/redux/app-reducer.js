import { getSearchId, getTickets } from './../api/api';

const SET_SEARCH_ID = 'SET-SEARCH-ID';
const SET_TICKETS_DATA = 'SET-TICKETS-DATA';
const SET_FILTER_DATA = 'SET-FILTER-DATA';

let initialState = {
    searchId: null,
    filterData: [
        {id: 0, name: 'Все', enabled: false, stops: -1}, 
        {id: 1, name: 'Без пересадки', enabled: true, stops: 0}, 
        {id: 2, name: '1 пересадка', enabled: false, stops: 1}, 
        {id: 3, name: '2 пересадки', enabled: false, stops: 2}, 
        {id: 4, name: '3 пересадки', enabled: false, stops: 3}, 
    ],
    ticketsData: null,
};

const appReducer = (appData = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_ID: {
            return {...appData,
                searchId: action.searchId,
            }
        }

        case SET_TICKETS_DATA: {
            return {...appData,
                ticketsData: action.tickets,
            }
        }

        case SET_FILTER_DATA: {
            return {...appData,
                filterData: action.filterData,
            }
        }

        default: return appData;
    }

}

export const setSearchId = (searchId) => {
    return {
        type: SET_SEARCH_ID, 
        searchId
    }
}

export const setTicketsData = (tickets) => {
    return {
        type: SET_TICKETS_DATA, 
        tickets
    }
}

export const setFilterData = (filterData) => {
    return {
        type: SET_FILTER_DATA, 
        filterData
    }
}


export const getSearchIdThunkCreator = () => (dispatch) => {
    return getSearchId().then(data => {
        dispatch(setSearchId(data.searchId));
        dispatch(getTicketsThunkCreator(data.searchId));
    });
}

export const getTicketsThunkCreator = (searchId) => (dispatch) => {
    return getTickets(searchId).then(data => {
        dispatch(setTicketsData(data.tickets));
    });
}

export default appReducer;