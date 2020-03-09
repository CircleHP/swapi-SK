import { GET_PEOPLE, GET_PEOPLE_ERROR, SHOW_NEXT, SHOW_NEXT_ERROR, SET_SEARCH_KEY } from 'actions/actionTypes';

export interface TPeople {
    count: number | null;
    next: string | null;
    previous: string | null;
    searchKey: string;
    results: Array<{
        name: string,
        height: string,
        mass: string;
        hair_color: string,
        skin_color: string,
        eye_color: string,
        birth_year: string,
        gender: string,
        homeworld: string,
        films: Array<string>,
        species: Array<string>,
        vehicles: Array<string>,
        starships: Array<string>,
        created: string,
        edited: string,
        url: string
    }> | null,
    searchResults: any;
};

const initialState = {
    count: null,
    next: 'https://swapi.co/api/people/?format=json',
    previous: null,
    searchKey: '',
    results: null,
    searchResults: null,
};

export default (state: TPeople = initialState, action: any) => {
    switch (action.type) {
        case GET_PEOPLE:
            return {
                ...action.payload,
                results: state.results ? [...state.results, ...action.payload.results] : action.payload.results,
            }

        case GET_PEOPLE_ERROR:
            return {
                ...state,
            };

        case SET_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload,
                // searchResults:
            };

        default:
            return initialState;
    };
};