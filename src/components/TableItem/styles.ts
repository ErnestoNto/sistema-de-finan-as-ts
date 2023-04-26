import styled from "styled-components";

export const Container = styled.tr`
    padding: 5px 10px;
    text-align: center;
`

export const Category = styled.div<{color: string}>`
    padding: 5px;
    background-color: ${props => props.color};
    color: #fafafa;
    display: flex;
    justify-content: center;
`