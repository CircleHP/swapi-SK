import { combineReducers } from 'redux';
import people from './people';

export interface TReduxState {
    people: any,
}

const mainReducer = combineReducers({
    people,
});

export default mainReducer;