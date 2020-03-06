import { GET_PEOPLE, GET_PEOPLE_ERROR } from './actionTypes';

export const getPeople = () => {
    return (dispatch: any) => {
        return fetch(`https://swapi.co/api/starships/?format=json`)
            .then((res) => res.json())
            .then((data) => dispatch({type: GET_PEOPLE, payload: data}))
            .catch((error) => dispatch({type: GET_PEOPLE_ERROR, error}))
    };
};