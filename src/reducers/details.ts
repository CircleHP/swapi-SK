import { GET_DETAILS, GET_DETAILS_ERROR} from 'actions/actionTypes';

export interface TDetails {
    data: any,
}

const initialState = {
    data: null,
}

export default (state: TDetails = initialState, action: any) => {
    switch (action.type) {
        case GET_DETAILS:
            return {
                ...state,
                data: action.payload,
            };

        case GET_DETAILS_ERROR:
            return action.payload;

        default:
                return state;
    }
}