import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { TReduxState } from 'reducers';
import { getPeoplesData, hasMore, hasPrevious, getNextPageLink, getSearchResults } from 'selectors';
import actions from 'actions';
import * as s from './styled';
import Loader from 'components/Loader';
import ListItem from './ListItem';

interface TConnectedProps {
    peopleData: any;
    hasPrevious: boolean;
    hasMore: boolean;
    nextPageLink: string | null;
    searchResults: any;
}

const PeopleList: React.FunctionComponent<TConnectedProps> = ({ peopleData, hasPrevious, hasMore, nextPageLink, searchResults }) => {
    if(!peopleData ) {
        // @ts-ignore
        actions.getPeople(nextPageLink)
        return <Loader />
    }

    console.log(searchResults)

    return (
        <s.Container>
            <InfiniteScroll
                pageStart={0}
                // @ts-ignore
                loadMore={() => actions.getPeople(nextPageLink)}
                hasMore={hasMore}
                useWindow={true}
                loader={<Loader />}
            >
                <s.PeopleList>
                    {
                        peopleData.map((hero: any, i: number) => (
                            <ListItem key={i} entityData={hero} />
                        ))
                    }
                </s.PeopleList>
            </InfiniteScroll >
        </s.Container>
    );
};

export default connect((state: TReduxState) => ({
    hasMore: hasMore(state),
    hasPrevious: hasPrevious(state),
    peopleData: getPeoplesData(state),
    nextPageLink: getNextPageLink(state),
    searchResults: getSearchResults(state),
}))(PeopleList);