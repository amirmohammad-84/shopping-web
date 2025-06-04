// app/products/page.tsx

import { Metadata } from "next";
import ProductsGlobList from "../components/products/productsGlobList";
import getProductsListTwo from "../pagesAsync/productsGetProductList";

interface Props {
  searchParams: {
    page?: string;
    per_page?: string;
  };
}

export const metadata: Metadata = {
  title: "Products",
  description: "Browse the product list",
};

export default async function ProductsPage({ searchParams }: Props) {
  const page = searchParams.page ?? "1";
  const per_page = searchParams.per_page ?? "16";

  const productListData = await getProductsListTwo({
    page,
    per_page,
  });

  return (
    <div className="py-10">
      <h1 className="text-xl font-bold mb-6">Products List</h1>
      <ProductsGlobList productListData={productListData} />
    </div>
  );
}
