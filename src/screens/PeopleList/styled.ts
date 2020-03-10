import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    background: #333843;
`;

export const PeopleList = styled.div`
    width: 600px;
    height: calc(100vh - 55px);
    overflow: auto;
`;