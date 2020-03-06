import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    background: #231f20;
`;

export const Logo = styled.div`
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/images/logo.png');
    background-size: 60%;
    background-position: 50% 50%;
    background-repeat: no-repeat;

    a {
        width: 50%;
        height: 100%;
        cursor: pointer;
    }
`;

export const SearchContainer = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        width: 100%;
        height: 30px;
        align-self: center;
        border: none;
        padding: 0 10px;
    }
`;

export const RoutesGroup = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: auto;
    color: #fff;
    font-size: 14px;
    user-select: none;
    font-weight: 500;
    overflow: hidden;
`;

export const RoutesLink = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 4px solid transparent;
    transition: all .25s;

    &:hover {
        cursor: pointer;
        border-bottom: 4px solid #ffe300;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`;