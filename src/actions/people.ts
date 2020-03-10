import { GET_PEOPLE, GET_PEOPLE_ERROR, SET_SEARCH_KEY } from './actionTypes';

export const getPeople = (nextPage: string) => {
    return (dispatch: any) => {
        return fetch(nextPage)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_PEOPLE, payload: data}))
            .catch(() => dispatch({type: GET_PEOPLE_ERROR, payload: 'API-Error. Application is not available'}))
    };
};

export const setSearchKey = (searchKey: string) => {
    return (dispatch: any) => {
        dispatch({ type: SET_SEARCH_KEY, payload: searchKey})
    }
}