import styled from 'styled-components';

export const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    color: #fff;
    font-size: 36px;
`;

export const BIO = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: #fff;
    font-size: 18px;
    margin-top: 15px;

    & > div {
        margin-bottom: 5px;
    }
`;

export const RestBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: #fff;
`;

export const Category = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const CategoryHeader = styled.div`
    width: 100%;
    height: 50px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Data = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    color: #ffffff;
    font-size: 14px;

    & > div {
        margin-bottom: 5px;
    }
`;

export const AddToFavorite = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #fff;
    margin-left: 25px;
    transition: all .25s;

    &:hover {
        background: #ffe300;
    }
`;

export const Name = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;