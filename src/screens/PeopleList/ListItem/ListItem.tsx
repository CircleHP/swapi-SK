import React from 'react';
import { Link } from 'react-router-dom';

import * as s from './styled';

interface TOwnProps {
    entityData: any;
}

const ListItem: React.FunctionComponent<TOwnProps> = ({ entityData }) => {
    return (
        <s.CardContainer>
            <Link to={`/people-list/${entityData.id}`}>
                {entityData.name}
            </Link>
        </s.CardContainer>
    );
};

export default ListItem;