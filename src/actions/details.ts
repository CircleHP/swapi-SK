import { GET_DETAILS, GET_DETAILS_ERROR, ADD_TO_FAVORITE} from 'actions/actionTypes';

export const getDetails = (id: number) => {
    return (dispatch: any) => {
        return fetch(`https://swapi.co/api/people/${id}/`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_DETAILS, payload: data}))
            .catch(() => dispatch({type: GET_DETAILS_ERROR, payload: 'API-Error. Application is not available'}))
    };
};

export const addToFavorite = ( item: any ) => {
    return (dispatch: any) => {
        dispatch({ type: ADD_TO_FAVORITE, payload: item})
    };
};