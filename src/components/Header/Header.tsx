import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import actions from 'actions';

import * as s from './styled';

const Header: React.FunctionComponent = () => {
    const [searchKey, setSearchKey] = useState('');

    const handleChange = (e: any) => {
        setSearchKey(e.target.value);
        actions.setSearchKey(searchKey)
    };

    return (
        <s.Container>
            <s.Logo>
                <Link to="/" />
            </s.Logo>
            <s.SearchContainer>
                <input type='text' placeholder='Dart Vader' onChange={(e) => handleChange(e)}/>
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