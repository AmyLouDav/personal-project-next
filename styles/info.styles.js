import styled from "styled-components";
import "@nextcss/reset";
import {
  Tablet,
  Laptop,
  PrimaryFont,
  PrimaryColour,
  SecondaryFont,
} from "../lib/constants.js";


export const Container = styled.div`
  max-width: 1000px;
  margin: 80px auto 100px auto;
`;

export const ContentContainer = styled.div`
  margin: 0 auto 100px auto;
  max-width: 300px;
`;

export const InfoPageImg = styled.div`
  margin-top: 30px;
`;

export const StyledH1 = styled.h1`
  font-size: 45px;
  font-family: ${PrimaryFont};
  color: ${PrimaryColour};
  font-weight: lighter;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  text-transform: ${(isUppercase) =>
    isUppercase ? "uppercase" : "capitalize"};

  @media (min-width: ${Tablet}) {
    font-size: 50px;
    text-transform: capitalize;
  }

  @media (min-width: ${Laptop}) {
    font-size: 80px;
    text-transform: capitalize;
  }
`;

export const StyledImg = styled.img`
  display: flex;
  justify-content: center;

  @media (min-width: ${Tablet}) {
    width: 300px;
    height: 500px;
  }
`;

export const StyledText = styled.div`
  color: ${PrimaryColour};
  font-family: ${SecondaryFont};
  margin-top: 30px;
  a {
    color: ${PrimaryColour};
    text-decoration: none;
  }
`;

export const TextContainer = styled.div`
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  width: 100%;
`;
