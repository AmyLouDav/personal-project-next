import styled from "styled-components";
import { Tablet, Laptop, PrimaryFont, PrimaryColour } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";

export const StyledH1 = styled.h1`
  font-size: 40px;
  font-family: ${PrimaryFont};
  color: ${PrimaryColour};
  font-weight: lighter;
  display: flex;
  justify-content: center;
  margin: 40px 0 0;

  @media ${Tablet} {
    font-size: 50px;
  }

  @media ${Laptop} {
    font-size: 60px;
  }
`;

export const StyledA = styled.a`
  color: ${PrimaryColour};
  ${"" /* font-family: ${PrimaryFont}; */}
  text-decoration: none;
  
  margin-top: 50px;
  list-style-type: none;
  &:hover,
  &:focus {
    color: pink;
  }
`;

export const StyledLi = styled.li`
  list-style-type: none;
`;

export const StyledLink = styled(Link)`
  color: ${PrimaryColour};
  text-decoration: none;
  list-style: none;
  font-weight: bold;
  margin-top: 50px;
  list-style-type: none;
  &:hover,
  &:focus {
    color: pink;
  }
`;

export const StyledImg = styled(Image)`
  width: 200px;
  height: 300px;
  object-fit: cover;
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const LinkCardContainer = styled.div`
  @media ${Tablet} {
    display: inline-block;
    height: 300px;
    width: 300px;
  }

  @media ${Laptop} {
    display: inline-block;
    height: 300px;
    width: 300px;
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 80px auto 100px auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListImage = styled.img`
  width: 100px;
  
`;