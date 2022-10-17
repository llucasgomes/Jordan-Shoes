import { useState } from "react";
import { Container } from "./styled";

export const Card = ({ img_product }) => {
  const [image, setImage] = useState(img_product);

  return (
    <>
      <Container>
        <img src="https://github.com/llucasgomes/Jordan-Shoes/blob/main/src/assets/image/1.png" alt="Imagem de calçado" />
      </Container>
    </>
  );
};
