import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 30px;

    button {
        background: none;
        border: none;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 50px;
`

export const Title = styled.div`
    width: 100%;
    border-bottom: 1px solid #000D80;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

    h3 {
        color: #000D80;
        position: relative;
        top: 28px;
        background: #FFF;
        padding: 0 20px;
    }
`