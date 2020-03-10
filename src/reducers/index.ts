import { combineReducers } from 'redux';
import people, { TPeople } from './people';
import details, { TDetails } from './details';

export interface TReduxState {
    people: TPeople,
    details: TDetails,
}

const mainReducer = combineReducers({
    people,
    details,
});

export default mainReducer;