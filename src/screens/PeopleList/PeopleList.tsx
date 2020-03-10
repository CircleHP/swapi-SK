import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { TReduxState } from 'reducers';
import { getPeoplesData, hasMore, hasPrevious, getNextPageLink, getItemsBySearchPhrase, getErrorMessage } from 'selectors';
import actions from 'actions';
import * as s from './styled';
import ListItem from './ListItem';
import Loader from 'components/Loader';
import people from 'reducers/people';

interface TConnectedProps {
    peopleData: any;
    hasPrevious: boolean;
    hasMore: boolean;
    nextPageLink: string | null;
    searchResults: any;
    error: string | null;
}

const PeopleList: React.FunctionComponent<TConnectedProps> = ({ peopleData, hasMore, nextPageLink, searchResults, error }) => {
    if(!peopleData) {
        // @ts-ignore
        actions.getPeople(nextPageLink);
        return null;
    }

    console.log(searchResults);

    return (
        <s.Container>
            <InfiniteScroll
                pageStart={0}
                // @ts-ignore
                loadMore={() => actions.getPeople(nextPageLink)}
                hasMore={hasMore}
                useWindow={false}
            >
                {searchResults.length === 0 && !error ?
                <s.PeopleList>
                    {
                        peopleData.map((hero: any, i: number) => (
                            <ListItem key={i} entityData={hero} />
                        ))
                    }
                </s.PeopleList>
                : searchResults ?
                <s.PeopleList>
                    {
                        searchResults.map((hero: any, i: number) => (
                            <ListItem key={i} entityData={hero} />
                        ))
                    }
                </s.PeopleList>
                :
                <div>{error}</div>
                }
            </InfiniteScroll >
            {peopleData.length !== 87 && <Loader />}
        </s.Container>
    );
};

export default connect((state: TReduxState) => ({
    hasMore: hasMore(state),
    hasPrevious: hasPrevious(state),
    peopleData: getPeoplesData(state),
    nextPageLink: getNextPageLink(state),
    searchResults: getItemsBySearchPhrase(state),
    error: getErrorMessage(state),
}))(PeopleList);