import { bindActionCreators, Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { TReduxState } from 'reducers';
import { store } from 'redux-store';
import * as actionCreators from './all';

export type Dispatch = ThunkDispatch<TReduxState, any, Action>;

const actions: typeof actionCreators = bindActionCreators(actionCreators, store.dispatch);

export default actions;