import styled from "styled-components";
import Image from 'next/Image';

export const Tablet = `768px`;
export const Laptop = `1024px`;
export const PrimaryColour = `#f25731`;
export const PrimaryFont = `Abril Fatface`;
export const SecondaryFont = `Signika`;

export const StyledH1 = styled.h1`
  font-size: 40px;
  font-family: ${PrimaryFont};
  color: ${PrimaryColour};
  font-weight: lighter;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media ${Tablet} {
    font-size: 50px;
  }

  @media ${Laptop} {
    font-size: 60px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledImg = styled(Image)`
  display: flex;
  justify-content: center;
`;

export const InfoPageImg = styled.div`
  margin-top: 30px;
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

export const Container = styled.div`
  max-width: 1000px;
  margin: 80px auto 100px auto;
`;

export const ContentContainer = styled.div`
  margin: 0 auto 100px auto;
  max-width: 300px;
`;

export const TextContainer = styled.div`
  margin: 0 auto;
`;