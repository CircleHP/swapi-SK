import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

const PeopleList: React.FunctionComponent<any> = () => {
    useEffect(() => {
        actions.getPeople();
    }, [])

    return (
        <div>
            People list
        </div>
    );
};

export default connect((state: any) => ({

}))(PeopleList);