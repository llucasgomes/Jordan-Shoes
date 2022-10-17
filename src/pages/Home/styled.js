import styled from "styled-components";

export const Container = styled.div`
  .title {
    width: 100%;
    text-align: center;
    color: #181818;
    font-family: var(--Montserrat);
    font-weight: 600;
    padding: 15px 0;
  }
`;

export const BodyProducts = styled.section`
  width: 100vw;
  height: auto;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 30px;
  h2 {
    font-family: var(--Montserrat);
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 19px;
  }
  p {
    font-family: var(--Montserrat);
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    color: #474747;
    margin-bottom: 19px;
  }
`;

export const ContainerGrid = styled.div`
  width: 100vw;

  display: grid;
  padding: 3em;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
