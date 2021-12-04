import React from "react";
import styled, { keyframes } from "styled-components";
function Header() {
  return <Heading>Todo List</Heading>;
}

const animate = keyframes`
    0%{color:white};
    40%{color:lightgray};
    80%{color: black};
    100%{color:white};

`;
const Heading = styled.h1`
  font-family: monospace;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  font-weight: 400;
  font-style: italic;
  color: darkcyan;
  animation: ${animate} 3s infinite;
`;

export default Header;
