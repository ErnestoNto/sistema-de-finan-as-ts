import styled from "styled-components";

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5px;

    select,
    input,
    button{
        padding: 5px 10px;
        font-size: 1.2rem;
        width: 150px;
        outline: 0;
    }

    button{
        background-color: transparent;
        color: #000;
        border: 1px solid #65DEF1;
        transition: .3s ease-in;
    
        &:hover{
            border: 1px solid transparent;
            background-color: #65DEF1;
            color: #fafafa;
        }
    }


    @media screen and (max-width: 450px) {
        flex-direction: column;
        align-items: center;
        
        select,
        input,
        button{
            font-size: .9rem;
        }
    }
`