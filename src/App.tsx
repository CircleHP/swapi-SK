import React from 'react';
import styled from 'styled-components';
import { Switch, Route} from 'react-router-dom';

import Favorite from './screens/Favorite';
import PeopleList from './screens/PeopleList';

import Header from './components/Header';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: 'Poller One', cursive;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
`;

const App: React.FunctionComponent = () => {
    return (
        <Container>
            <Header />

            <Content>
                <Switch>
                    <Route exact path='/favorite' render={() => <Favorite />} />
                    <Route exact path='/people-list' render={() => <PeopleList />} />
                    {/* <Route exact path='people-list/:id' render={() => <Details />} /> */}
                </Switch>
            </Content>
        </Container>
    );
};

export default App;
