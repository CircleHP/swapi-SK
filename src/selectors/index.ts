import { TReduxState } from '../reducers';

export const getPeoplesData = (state: TReduxState) => state.people?.results;
export const hasMore = (state: TReduxState): boolean => state.people.next ? true : false;