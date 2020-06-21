import styled from 'styled-components';

export const Container = styled.div`
    width: 210px;
    height: 40px;
    background: ${props => props.actived ? '#E6963B' : '#000D80'};
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
        width: 25px;
        height: 25px;
    }

    span {
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 18px;
    }

    &:hover {
        background: #E6963B;
    }
`
