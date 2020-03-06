import React from 'react';

import * as s from './styled';

const Header: React.FunctionComponent = () => {
    return (
        <s.Container>
            <s.Logo />
            <s.SearchContainer>
                <input type='text' placeholder='Dart Vader' />
            </s.SearchContainer>
            <s.RoutesGroup>
                <s.RoutesLink>
                    Favorite
                </s.RoutesLink>
                <s.RoutesLink>
                    People list
                </s.RoutesLink>
            </s.RoutesGroup>
        </s.Container>
    );
};

export default Header;