import styled from "styled-components";
import { Link } from "react-scroll";

export const Buttons = styled.div`
  display: grid;
  grid-template-areas: "De De De Ca Ca" "Su Su Di Di Di";
  justify-items: stretch;
  align-items: stretch;
  height: 100vh;
  width: 95%;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 100%;
    grid-template-areas: "De De" "Su Ca" "Di Di";
    grid-auto-columns: 50% 50%;
  }
`;

export const DesignArea = styled.div`
  grid-area: De;
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 20px 0 10px 0;
`;

export const CameraArea = styled(DesignArea)`
  grid-area: Ca;
  text-align: center;
  padding: 10px 0 10px 10px;
`;

export const ChargeArea = styled(DesignArea)`
  grid-area: Su;
  padding: 10px 10px 20px 0;
`;

export const DisplayArea = styled(DesignArea)`
  grid-area: Di;
  padding: 10px 0 20px 0;
`;

export const Button = styled.div<{ IMG_URL: string; IMG_POS?: string }>`
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  background-color: #f5f3f3;
  border-radius: 30px;
  background-image: url(${(props) => props.IMG_URL});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: ${(props) => (props.IMG_POS ? props.IMG_POS : "center")};
  cursor: pointer;
  position: relative;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #d7d6fe,
      #f4d1f2,
      #f4baac,
      #f6e6c2,
      #f6e6c2,
      #f4baac,
      #f4d1f2,
      #d7d6fe
    );
    position: absolute;
    top: -7px;
    left: -7px;
    background-size: 450%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 14px);
    height: calc(100% + 14px);
    animation: glowing 30s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 30px;
  }
  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    left: 0;
    top: 0;
    border-radius: 30px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    min-height: 150px;
  }
`;

export const ButtonLink = styled(Link)<{ IMG_URL: string; IMG_POS?: string }>`
  text-align: right;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  background-color: #f5f3f3;
  border-radius: 30px;
  background-image: url(${(props) => props.IMG_URL});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: ${(props) => (props.IMG_POS ? props.IMG_POS : "center")};
  cursor: pointer;
  position: relative;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #d7d6fe,
      #f4d1f2,
      #f4baac,
      #f6e6c2,
      #f6e6c2,
      #f4baac,
      #f4d1f2,
      #d7d6fe
    );
    position: absolute;
    top: -7px;
    left: -7px;
    background-size: 450%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 14px);
    height: calc(100% + 14px);
    animation: glowing 30s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 30px;
  }
  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    left: 0;
    top: 0;
    border-radius: 30px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  @media (max-width: 768px) {
    background-size: 90% auto;
    background-position: bottom;
  }
`;

export const ButtonTitle = styled.div<{ POS?: string }>`
  font-weight: 700;
  text-align: ${(props) => (props.POS ? props.POS : "left")};
  margin: 10px;
`;
export const ButtonText = styled.div<{ POS?: string }>`
  text-align: ${(props) => (props.POS ? props.POS : "left")};
  margin: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;
