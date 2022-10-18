import { useState } from "react";
import { Container } from "./styled";



export const Card = ({ img_product }) => {
  const [image, setImage] = useState("");
  setImage(img_product);

  return (
    <>
      <Container>
        <img src={image} alt="Imagem de calçado" />
      </Container>
    </>
  );
};
