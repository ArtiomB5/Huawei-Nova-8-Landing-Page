import styled from "styled-components";

export const Charging = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Charging_imgs = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 60%;
    margin: 0 auto;
  }
`;

export const Charging_img = styled.div<{ IMG_URL: string }>`
  background-image: url(${(props) => props.IMG_URL});
  background-size: auto 66%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Charging_text = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 40%;
    margin: 0 auto;
    text-align: center;
  }
`;
