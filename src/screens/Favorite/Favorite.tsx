import React from 'react';
import { connect } from 'react-redux';

import { getFavorite } from 'selectors';
import { TReduxState} from 'reducers';

import ListItem from '../PeopleList/ListItem';

interface TConnectedProps {
    favorite: any;
}

const Favorite: React.FunctionComponent<TConnectedProps> = ({ favorite }) => {
    return (
        <div>
            {
                favorite ? favorite.map((item: any, i: number) => (
                    <ListItem entityData={item} key={i}/>
                ))
                :
                <div>Nothing here :c</div>
            }
        </div>
    );
};

export default connect((state: TReduxState) => ({
    favorite: getFavorite(state),
}))(Favorite);