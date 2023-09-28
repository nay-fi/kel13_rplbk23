import styled, { css } from 'styled-components';

export default styled.button`
    font-family: 'arial';
    font-size:1rem;
    border:none;
    border-radius:5px;
    padding:7px 10px;
    background:green;
    margin:20px 10px;
    ${(props) => props.background && css`
    background:${(props) => props.background}; `}
    color:white;
    &:hover{
        text-decoration:underline;
    }
    &:active {
        background: #61dafb;
      }
`;