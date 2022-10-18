import { Container } from "./styled";


export const Card = ({ img_product }) => {
  return (
    <>
      <Container>
        <img src={img_product} alt="Imagem de calçado" />
      </Container>
    </>
  );
};
