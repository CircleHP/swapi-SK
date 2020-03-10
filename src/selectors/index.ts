import { TReduxState } from '../reducers';

export const getPeoplesData = (state: TReduxState) => state.people?.results;
export const hasPrevious = (state: TReduxState) => state.people.previous ? true : false;
export const hasMore = (state: TReduxState): boolean => state.people.next ? true : false;
export const getNextPageLink = (state: TReduxState): string | null => state.people.next;
export const getSearchResults = (state: TReduxState) => state.people?.searchResults;
export const getItemsBySearchPhrase = (state: TReduxState) => state.people.results ? state.people.results.filter((item: any) => item.name === state.people.searchKey) : [];