import styled from "styled-components";

export const AppGallery = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AppGallery__imgs = styled(AppGallery)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 90%;
    height: 60%;
  }
`;

export const AppGallery__text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    height: 40%;
    text-align: center;
  }
`;

export const AppGallery__img = styled.img`
  height: auto;
  width: 40%;

  @media (max-width: 768px) {
  }
`;

export const AppGallery__link_box = styled.div`
  padding: 30px;
`;

export const AppGallery__link = styled.a<{ IMG_URL: string }>`
  &::before {
  }
`;
