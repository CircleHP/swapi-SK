import React from 'react';

import * as s from './styled';

interface TOwnProps {
    entityData: any;
}

const ListItem: React.FunctionComponent<TOwnProps> = ({ entityData }) => {
    return (
        <s.CardContainer>
            {entityData.name}
        </s.CardContainer>
    );
};

export default ListItem;