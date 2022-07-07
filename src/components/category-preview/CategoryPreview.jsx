import ProductCard from "../product-card/ProductCard";

import {
  CategoryPreviewContainer,
  CategoryPreviewH2,
  CategoryPreviewLink,
  Preview,
} from "./CategoryPreviewStyle";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryPreviewH2>
        <CategoryPreviewLink to={title}>
          {title.toUpperCase()}
        </CategoryPreviewLink>
      </CategoryPreviewH2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
