import { GET_PEOPLE, GET_PEOPLE_ERROR, SET_SEARCH_KEY, ADD_TO_FAVORITE } from 'actions/actionTypes';

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
    error: string | null;
    favorite: any;
};

const initialState = {
    count: null,
    next: 'https://swapi.co/api/people/?format=json',
    previous: null,
    searchKey: '',
    results: null,
    searchResults: null,
    error: null,
    favorite: null,
};

export default (state: TPeople = initialState, action: any) => {
    switch (action.type) {
        case GET_PEOPLE:
            return {
                ...state,
                results: state.results ? [...state.results, ...action.payload.results] : action.payload.results,
            }

        case GET_PEOPLE_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        case SET_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload,
                // searchResults:
            };

        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorite: state.favorite ? [...state.favorite, action.payload] : [action.payload],
            }

        default:
            return state;
    };
};