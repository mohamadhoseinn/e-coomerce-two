import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { categoriesSelector } from "../../store/categories/category-selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(categoriesSelector);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
