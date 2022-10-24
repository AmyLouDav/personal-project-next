import Link from "next/link";
import styled from "styled-components";

export const Tablet = `768px`;
export const Laptop = `1024px`;
export const PrimaryColour = `#f25731`;
export const PrimaryFont = `Abril Fatface`;
export const SecondaryFont = `Signika`;

export const NavBarLink = styled(Link)`
  margin-right: 40px;
  margin-top: 10px;
  padding-right: 30px;
  font-family: ${SecondaryFont};
`;

export const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: white;
  border-bottom: 1px solid ${PrimaryColour};
  padding: 14px;
  padding-left: 35px;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const StyledLink = styled.a`
  color: ${PrimaryColour};
  font-family: ${SecondaryFont};
  text-decoration: none;
  font-size: 13px;
  padding-right: 30px;
  font-weight: bold;
  list-style-type: none;
  &:hover,
  &:focus {
    color: pink;
  }
  &:active {
    color: violet;
  }
`;
