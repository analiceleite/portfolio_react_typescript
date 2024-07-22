import styled from "styled-components";
import { P } from "../../components/paragraph/styles";

export const Description = styled (P) `
  margin-top: 24px;
  margin-bottom: 40px;
`

export const ButtonTheme = styled.button `
  font-weight: bold;
  border-radius: 12px;
  padding: 8px;
  color: ${props => props.theme.corFundo};
  background-color: ${props => props.theme.corPrincipal};
  cursor: pointer;
`

export const SidebarContainer = styled.div `
  position: sticky;
  top: 80px;
  padding: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
