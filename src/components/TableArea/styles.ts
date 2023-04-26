import styled from 'styled-components'

export const Container = styled.table`
    margin-top: 10px;
    width: 100%;
    padding: 5px 10px;
    box-shadow: 0 0 5px #ccc;

    @media screen and (max-width: 400px) {
        font-size: .8rem;
    }
`

export const TableHead = styled.th<{width?: number}>`
    padding: 4px 12px;
    text-align: center;
    width: ${props => props.width ? `${props.width}px` : `auto`};
`