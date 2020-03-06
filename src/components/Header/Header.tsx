import React from 'react';
import { Link } from 'react-router-dom';

import * as s from './styled';

const Header: React.FunctionComponent = () => {
    return (
        <s.Container>
            <s.Logo>
                <Link to="/" />
            </s.Logo>
            <s.SearchContainer>
                <input type='text' placeholder='Dart Vader' />
            </s.SearchContainer>
            <s.RoutesGroup>
                <s.RoutesLink>
                    <Link to="/favorite">
                        Favorite
                    </Link>
                </s.RoutesLink>
                <s.RoutesLink>
                    <Link to="/people-list">
                        People list
                    </Link>
                </s.RoutesLink>
            </s.RoutesGroup>
        </s.Container>
    );
};

export default Header;