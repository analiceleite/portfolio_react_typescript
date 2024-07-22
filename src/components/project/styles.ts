import styled from "styled-components";

export const Card = styled.div `
  border: 1px solid ${props => props.theme.corBorda};
  padding: 16px;
`;

export const LinkButton = styled.a `
  color: ${props => props.theme.corFundo};
  font-size: 14px;
  text-decoration: none;
  background-color: ${props => props.theme.corFundoBotao};
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  cursor: pointer;
`
