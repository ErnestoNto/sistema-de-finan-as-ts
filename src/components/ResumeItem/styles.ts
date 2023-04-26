import styled from "styled-components";

export const MoneyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    h3{
        color: #ccc;
    }

    span{
        color: ${props => props.color};
    }
`