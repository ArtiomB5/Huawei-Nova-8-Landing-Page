import styled from "styled-components";

export const Selfie = styled.div`
  height: 100vh;
  width: 100%;
  animation-name: bgVisibility;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @keyframes bgVisibility {
    0% {
      background-color: black;
    }
    100% {
      background-color: white;
    }
  }
`;

export const Text = styled.div`
  height: 20%;
  width: 100%;
  text-align: center;
  animation-name: textVisibility;
  animation-duration: 6s;
  animation-fill-mode: forwards;

  @keyframes textVisibility {
    0% {
      color: black;
    }
    33% {
      color: white;
    }
    50% {
      color: white;
    }
    100% {
      color: black;
    }
  }
`;

export const Image = styled.img`
  height: auto;
  width: 100%;
  animation-name: imageScale;
  animation-duration: 4s;
  animation-fill-mode: forwards;

  @keyframes imageScale {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
