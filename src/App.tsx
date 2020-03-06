import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: 'Poller One', cursive;
`;

const App: React.FunctionComponent = () => {
    return (
        <Container>
            <Header />
        </Container>
    );
};

export default App;
