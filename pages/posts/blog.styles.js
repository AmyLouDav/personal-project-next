import styled from "styled-components";
import {
  Tablet,
  Laptop,
  PrimaryFont,
  SecondaryFont,
  PrimaryColour,
} from "../../lib/constants";
import ReactMarkdown from "react-markdown";
import "@nextcss/reset";

export const StyledH1 = styled.h1`
  font-size: 20px;
  font-family: ${PrimaryFont};
  color: ${PrimaryColour};
  font-weight: lighter;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 30px;

  @media (${Tablet}) {
    font-size: 30px;
  }

  @media (${Laptop}) {
    font-size: 50px;
  }
`;

export const Wrapper = styled.img`
  width: 100%;
`;

export const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

export const StyledText = styled(ReactMarkdown)`
  color: black;
  font-size: 12px;
  font-family: ${SecondaryFont};
`;

export const TextContainer = styled.div`
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  margin: 0 auto 100px auto;
  max-width: 300px;
`;

export const H1Container = styled.div`
  display: flex;
  justify-content: center;
`;
