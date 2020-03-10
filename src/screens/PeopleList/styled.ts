import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
`;

export const PeopleList = styled.div`
    width: 600px;
    height: calc(100vh - 55px);
    overflow: auto;
`;