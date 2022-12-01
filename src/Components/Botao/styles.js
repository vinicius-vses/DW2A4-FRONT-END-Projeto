import styled from "styled-components";

export const BotaoCustomizado = styled.button`
 color: white;
 font-size: 20px;
 font-weight: bold;
 background-color: #205542;
 border: #6a6a6a;
 border-radius: 20px;
 padding: 16px 20px;
 width 100%;
 cursor: pointer;

 ${props => props.disabled === false && `
    &:hover {
        background-color: #C5F1E4;
        color: black;
    }
 `}

 ${props => props.disabled &&`
    opacity: 0.9
 `}
 `
