import styled from "styled-components";

export const SuperQuadCamera = styled.div<{ IMG_URL: string }>`
  background-image: url(${(props) => props.IMG_URL});
  background-size: auto 70%;
  background-repeat: no-repeat;
  background-position: right bottom;
  height: 100vh;

  @media (max-width: 768px) {
    background-size: 90% auto;
  }
`;

export const Text = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 70%;
`;
