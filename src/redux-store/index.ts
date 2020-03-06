import { applyMiddleware, createStore } from 'redux';

import mainReducer from '../reducers';

export const store = createStore(mainReducer, applyMiddleware());