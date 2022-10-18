import { Container } from "./styled";
import logo from "../../../assets/image/1.png";

export const Card = ({ img_product }) => {
  return (
    <>
      <Container>
        <img src={img_product} alt="Imagem de calçado" />
      </Container>
    </>
  );
};
