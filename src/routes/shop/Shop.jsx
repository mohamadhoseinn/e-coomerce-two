import { useContext } from "react";

import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../../components/product-card/ProductCard";

import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="shop-container">
      {products.map((producte) => (
        <ProductCard key={producte.id} product={producte} />
      ))}
    </div>
  );
};

export default Shop;
