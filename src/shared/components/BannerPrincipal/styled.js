import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100vw;
  height: 378px;
  padding-left: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h2 {
    font-size: 32px;
    color: #f9f9f9;
    font-family: var(--Montserrat);
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    color: #f9f9f9;
    font-family: var(--Montserrat);
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
  }
  img {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    left: 0;
    background: #181818;
    filter: opacity(90%) brightness(0.4);
  }
`;
