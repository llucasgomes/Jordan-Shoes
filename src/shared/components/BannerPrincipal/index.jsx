import { Container } from "./styled";
import image_background from "../../../assets/image/wallpaper.jpeg";

export const BannerPrincipal = () => {
  return (
    <>
      <Container>
        <img src={image_background} alt="Imagem BackGround" />
        <h2>A melhor loja de Jordan</h2>
        <p>
          O tênis Jordan é fruto de uma velha e forte
          <br />
          parceria entre Nike e o jogador Michael Jordan
        </p>
      </Container>
    </>
  );
};
