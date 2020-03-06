import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { TReduxState } from 'reducers';
import { hasMore } from 'selectors';
import actions from 'actions';

interface TConnectedProps {
    hasMore: any;
}

const PeopleList: React.FunctionComponent<TConnectedProps> = ({ hasMore }) => {
    useEffect(() => {
        actions.getPeople();
    }, [])

    return (
        <div>
            People list
        </div>
    );
};

export default connect((state: TReduxState) => ({
    hasMore: hasMore(state),
}))(PeopleList);