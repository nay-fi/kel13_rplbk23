// eslint-disable-next-line

import styled, { css, ThemeProvider } from 'styled-components';

export default styled.input`
font-family: 'arial';
font-size:1rem;
border:2px solid;
border-radius:5px;
padding:7px 10px;
background:white;
${(props) =>
        props.border &&
        css`
border-color:${(props) => props.border}; `}
color:black; `;