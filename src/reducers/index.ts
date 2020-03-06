import { combineReducers } from 'redux';
import people, { TPeople } from './people';

export interface TReduxState {
    people: TPeople,
}

const mainReducer = combineReducers({
    people,
});

export default mainReducer;