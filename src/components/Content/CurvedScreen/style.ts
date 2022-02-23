import styled from "styled-components";

export const CurvedScreen = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const Text = styled.div`
  text-align: center;
  padding: 20px 5px;
  height: 20%;
  width: 80%;
`;
export const Video = styled.div`
  height: 80%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
