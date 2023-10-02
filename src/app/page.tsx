import { stripe } from "@app/services/stripe";
import { hstack, vstack } from "@styled-patterns/*";
import Image from "next/image";

import { css } from "../../styled-system/css";

import { Something } from "./components/Something";

interface ProductTileProps {
  title: string;
  price: number;
  image: string;
}

const ProductTile = ({ title, price, image }: ProductTileProps) => (
  <div
    className={vstack({
      padding: 4,
      aspectRatio: "0.7",
      borderRadius: "10px",
      border: "4px solid #000",
      background: "#FFF",
      boxShadow: "4px 4px 0 0 #000",
      base: {
        width: "45%",
      },
      lg: {
        width: "20%",
      },
    })}
  >
    <Image
      className={css({
        width: "100%",
        aspectRatio: "1",
        borderTopRadius: "5px",
        objectFit: "contain",
      })}
      src={image}
      alt={title}
      width={200}
      height={200}
    />
    <p
      className={css({
        textStyle: "title",
        color: "black",
      })}
    >
      {title}
    </p>
    <p
      className={css({
        textStyle: "body",
        color: "black",
      })}
    >
      ${price / 100}
    </p>
  </div>
);

const ProductGrid = ({ children }: { children: React.ReactNode }) => (
  <div
    className={hstack({
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: 4,
      base: {
        width: "90%",
        flexWrap: "wrap",
      },
      lg: {
        width: "80%",
        maxWidth: "1200px",
      },
    })}
  >
    {children}
  </div>
);

const fetchProducts = async () => {
  const products = await stripe.products.list({ expand: ["data.default_price"] });
  return products.data;
};

export default async function Home() {
  const products = await fetchProducts();
  const priceIds = products.map((product) => product.metadata.priceId);
  return (
    <ProductGrid>
      {products.map(({ id, name, metadata, images }) => (
        <ProductTile key={id} title={name} price={180} image={images[0]} />
      ))}
      <Something />
    </ProductGrid>
  );
}
