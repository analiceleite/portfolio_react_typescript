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
  color: #eee;
  background-color: #282a35;
  cursor: pointer;
`

export const SidebarContainer = styled.div `
  position: sticky;
  top: 80px;
  padding: 0;
`
