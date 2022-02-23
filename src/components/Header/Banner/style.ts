import styled from "styled-components";

export const Banner = styled.div`
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`;

export const BannerIMG = styled.div<{ linkL: string; linkS: string }>`
  background-image: url(${(props) => props.linkL});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    background-image: url(${(props) => props.linkS});
    background-size: 100% auto;
    background-position: center;
  }
`;
