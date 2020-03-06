import { TReduxState } from '../reducers';

export const getPeoplesData = (state: TReduxState) => state.people?.results;
export const hasMore = (state: TReduxState): string => state.people?.next;