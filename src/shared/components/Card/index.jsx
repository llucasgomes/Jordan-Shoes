import { useState } from "react";
import { Container } from "./styled";
// import image_background from "../../../assets/image/wallpaper.jpeg";

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
