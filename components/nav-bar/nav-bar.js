import Link from "next/link";
import { NavBarContainer, NavBarLink, StyledLink } from "./styles";


export default function Navbar() {
  return (
    <NavBarContainer>
      <NavBarLink href="/">
        <StyledLink>Home</StyledLink>
      </NavBarLink>
      <NavBarLink href="/info/info/sayhello">
        <StyledLink>Contact Us</StyledLink>
      </NavBarLink>
      <NavBarLink href="/list">
        <StyledLink>Blog Posts</StyledLink>
      </NavBarLink>
    </NavBarContainer>
  );
}
