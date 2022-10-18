import { BannerFrete } from "../../shared/components/bannerDesconto";
import { BannerPrincipal } from "../../shared/components/BannerPrincipal";
import { BodyProducts, Container, ContainerGrid } from "./styled";
import Products from "../../assets/data/index";
import { Card } from "../../shared/components/Card";

export const Home = () => {
  return (
    <Container>
      <BannerFrete texto={"Ganhe R$10,00 de desconto no frete"} />
      <h1 className="title">JordanShoes</h1>
      <BannerPrincipal />
      <BodyProducts>
        <h2>Destaques</h2>
        <p>
          Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado
        </p>

        <ContainerGrid>
          {Products.map((item) => (
            <Card key={item.id} img_product={item.imagem} />
          ))}
        </ContainerGrid>
        
      </BodyProducts>
      <BannerFrete texto={"Todos os diretos reservados"} />
    </Container>
  );
};
