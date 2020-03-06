import { GET_PEOPLE, GET_PEOPLE_ERROR } from '../actions/actionTypes';

interface TPeople {};

const initialState = {};

export default (state: TPeople = initialState, action: any) => {
    switch (action.type) {
        case GET_PEOPLE:
            return action.payload;

        case GET_PEOPLE_ERROR:
            return {
                ...state,
            };

        default:
            return initialState;
    };
};