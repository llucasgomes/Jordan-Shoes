import { useState } from "react";
import { Container } from "./styled";
import image_background from "../../../assets/image/wallpaper.jpeg";

export const Card = ({ img_product }) => {
  const [image, setImage] = useState(img_product);

  return (
    <>
      <Container>
        <img src={image_background} alt="Imagem de calçado" />
      </Container>
    </>
  );
};
