import styled from 'styled-components';

export const Contaiener = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    font-size: 42px;
    padding: 20px 0;
    user-select: none;
`;

export const ButtonsGroup = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
`;

export const BBContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.div`
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 1px solid #ffe300;

    a {
        text-decoration: none;
        color: #ffe300;
    };

    & + & {
        margin-left: 10px;
    };
`;