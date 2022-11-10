import styled from "@emotion/styled";
import colors from "../../styles/colors";
import * as React from "react";
import { Link } from "react-router-dom";

export const StyledNavBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 64px;
  width: 100%;
  gap: 10rem;
  background-color: ${colors.white};
  padding: 12px 100px;
  offset: 0px, 2px rgba(0, 0, 0, 0.2);
  align-items: center;
`;
export const StyledButton = styled.button`
  display: flex;
  width: fit-content;
  border-radius: 16px;
  padding: 8px 16px 8px 16px;
  align-items: center;
  gap: 9px;
  border-color: ${colors.pink};
  background-color: ${colors.white};
  cursor: pointer;
`;
function NabvarForm() {
  return (
    <StyledNavBar>
      <Link to="/InterfaceAlta">
        <StyledButton>Alta</StyledButton>
      </Link>
      <Link to="/InterfaceBaja">
        <StyledButton>Baja</StyledButton>
      </Link>
      <Link to="/InterfaceCambio">
        <StyledButton>Cambio</StyledButton>
      </Link>
      <Link to="/InterfaceConsulta">
        <StyledButton>Consulta</StyledButton>
      </Link>
    </StyledNavBar>
  );
}

export default NabvarForm;
