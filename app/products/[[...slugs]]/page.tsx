import React from "react";

interface Props {
  params: {
    slugs: string[];
  };
}

const ProductsPage = ({ params: { slugs } }: Props) => {
  console.log(slugs);
  return <div>ProductsPage {slugs}</div>;
};

export default ProductsPage;
