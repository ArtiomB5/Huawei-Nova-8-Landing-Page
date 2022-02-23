import styled from "styled-components";

export const RingsOfSaturn = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background: rgb(234, 249, 254);
  background: linear-gradient(
    90deg,
    rgba(234, 249, 254, 1) 0%,
    rgba(241, 245, 234, 1) 46%,
    rgba(249, 244, 225, 1) 84%
  );
`;

export const Text = styled.div`
  position: absolute;
  z-index: 3;
  width: 33%;
  top: 40%;
  left: 2%;

  @media (max-width: 768px) {
    top: 5%;
    left: 5%;
    width: 90%;
    text-align: center;
  }
`;

export const Image1 = styled.img`
  position: absolute;
  left: 33%;
  width: auto;
  height: 75%;
  z-index: 2;
  transform: rotate(-15deg) scaleX(2) scaleY(2);
  animation-name: rotation1;
  animation-duration: 7s;
  animation-fill-mode: forwards;

  @keyframes rotation1 {
    0% {
      transform: rotate(-15deg) scaleX(2) scaleY(2);
      top: 115%;
    }
    100% {
      transform: rotate(0deg) scaleX(1) scaleY(1);
      top: 15%;
    }
  }

  @media (max-width: 768px) {
    top: 40%;
    left: 13%;
    width: auto;
    height: 55%;
    transform: rotate(0deg) scaleX(1) scaleY(1);
    animation-name: none;
  }
`;

export const Image2 = styled.img`
  position: absolute;
  left: 40%;
  width: auto;
  height: 75%;
  z-index: 1;
  transform: rotate(-15deg) scaleX(2) scaleY(2);
  animation-name: rotation2;
  animation-duration: 10s;
  animation-fill-mode: forwards;

  @keyframes rotation2 {
    0% {
      transform: rotate(-15deg) scaleX(2) scaleY(2);
      top: -111%;
    }
    100% {
      transform: rotate(0deg) scaleX(1) scaleY(1);
      top: 10%;
    }
  }

  @media (max-width: 768px) {
    top: 40%;
    left: 28%;
    width: auto;
    height: 55%;
    z-index: 1;
    transform: rotate(0deg) scaleX(1) scaleY(1);
    animation-name: none;
  }
`;
