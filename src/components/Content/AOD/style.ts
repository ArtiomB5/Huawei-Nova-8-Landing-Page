import styled from "styled-components";

export const AOD = styled.div`
  display: flex;
  flex-direction: row-reverse;
  max-width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const AOD__imgs = styled(AOD)`
  justify-content: center;
  padding-right: 5%;
  align-items: center;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const AOD__text = styled.div`
  text-align: right;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    width: 90%;
    height: 30%;
    text-align: center;
    margin: 0 auto;
  }
`;

export const AOD__img = styled.img`
  height: auto;
  width: 40%;
`;
