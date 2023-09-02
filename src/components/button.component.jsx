import { styled,css } from "styled-components";

export const Button = styled.button`
    border-radius: 2px;
    max-height: 40px;
    padding: 6px;
    width: 100px;
    font-size: large;  
    ${props => props.primary && css`
        background-color: #1d7f00;
        border-color: #1f8600;
    `} 
    ${props => props.danger && css`
        background-color: #9a0000;
        border-color: #bb0000
    `}
`

