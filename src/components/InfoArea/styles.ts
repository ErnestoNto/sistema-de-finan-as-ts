import styled from "styled-components";

export const Container = styled.section`
    margin-top: -40px;
    background-color: #fafafa;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 400px) {
        flex-direction: column;
    }
`

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 10px;

    svg{
        cursor: pointer;
        flex: 1;
    }
`

export const MoneyArea = styled.div`
    flex: 2;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 400px) {
        justify-content: space-between;
        gap: 8px;
    }
`