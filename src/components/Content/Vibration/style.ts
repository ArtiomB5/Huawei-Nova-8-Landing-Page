import styled from "styled-components";

export const Vibration = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100%;
  }
`;

export const Vibration__imgs = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: left;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Vibration__text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  height: 100%;
  width: 50%;
  padding: 20px;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
`;

export const Vibration__img_wrapper = styled.div<{ IMG_URL: string }>`
  background-image: url(${(props) => props.IMG_URL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;

  @media (max-width: 768px) {
    width: 65%;
    background-size: auto 110%;
  }
`;

export const Vibration__img = styled.img`
  display: block;
  height: 90%;
  width: auto;

  @media (max-width: 768px) {
    width: 50%;
    height: auto;
  }
`;
