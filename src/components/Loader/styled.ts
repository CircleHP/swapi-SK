import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`;

export const Head = styled.div`
    width: 80px;
    height: 80px;
    background-image: url('/images/head.png');
    background-size: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    margin-right: -6px;
    animation: flip 1.6s infinite;

    @keyframes flip {
        0% { transform: translateY(0) }
        50% { transform: translateY(16px) }
        100% { transform: translateY(0) }
    }
`;

export const Body = styled.div`
    width: 150px;
    height: 150px;
    background-image: url('/images/rest.png');
    background-size: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    animation: rotate 4s infinite;

    @keyframes rotate {
        0% { transform: rotate(0) }
        100% { transform: rotate(1080deg) }
    }
`;

