import { useState } from "react";
import { Container } from "./styled";
// import image_background from "../../../assets/image/wallpaper.jpeg";

export const Card = ({ img_product }) => {
  const [image, setImage] = useState("");
  setImage(img_product);

  return (
    <>
      <Container>
        <img
          src="https://github.com/llucasgomes/Jordan-Shoes/blob/main/src/assets/image/7.png"
          alt="Imagem de calçado"
        />
      </Container>
    </>
  );
};
