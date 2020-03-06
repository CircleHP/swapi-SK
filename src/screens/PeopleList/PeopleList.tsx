import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { TReduxState } from 'reducers';
import { getPeoplesData, hasMore } from 'selectors';
import actions from 'actions';

interface TConnectedProps {
    peopleData: any;
    hasMore: boolean;
}

const PeopleList: React.FunctionComponent<TConnectedProps> = ({ peopleData, hasMore }) => {
    useEffect(() => {
        actions.getPeople();
    }, []);

    if(!peopleData) {
        return null;
    }

    return (
        <div>
            {
                peopleData.map((hero: any, i: number) => (
                    <div key={i}>{hero.name}</div>
                ))
            }
        </div>
    );
};

export default connect((state: TReduxState) => ({
    hasMore: hasMore(state),
    peopleData: getPeoplesData(state),
}))(PeopleList);