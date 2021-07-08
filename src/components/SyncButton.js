import React from "react";
import styled from "styled-components";

const AuthButtonStyled = styled.button`
  padding: 1rem;
  background: #456fda;
  color: white;
  border: none;
  border-radius: 0.3rem;
`;

export const SyncButton = ({title, handleClick }) => {
    return <AuthButtonStyled onClick={handleClick}> { title }</AuthButtonStyled>
}