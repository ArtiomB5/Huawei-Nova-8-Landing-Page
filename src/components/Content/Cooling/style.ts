import styled from "styled-components";

export const Cooling = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`;

export const Text = styled.div`
  text-align: center;
`;

export const Cooling__img = styled.img`
  width: 70%;
  height: auto;

  @media (max-width: 768px) {
    width: 120%;
  }
`;
