import React from 'react';
import { Link } from 'react-router-dom';

import * as s from './styled';

const Welcome: React.FunctionComponent = () => {
    return (
        <s.Contaiener>
            Welcome on SWAPI
            <s.ButtonsGroup>
                Discover other pages here or in header :3
                <s.BBContainer>
                    <s.Button>
                        <Link to="/people-list">
                            People list
                        </Link>
                    </s.Button>

                    <s.Button>
                        <Link to="/favorite">
                            Favorite
                        </Link>
                    </s.Button>
                </s.BBContainer>
            </s.ButtonsGroup>
        </s.Contaiener>
    );
};

export default Welcome;