import styled from 'styled-components';

export const CardContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    background: #231f20;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    transition: all .25s;

    a {
        text-decoration: none;
        color: #fff;
    };

    &:hover {
        cursor: pointer;
        color: #231f20;
        background: #ffe300;
    };
`;