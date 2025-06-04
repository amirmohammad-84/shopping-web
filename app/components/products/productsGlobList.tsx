'use client'

import Link from "next/link";
import ReactCustomPaginate from "../shared/reactCutsomPaginate";
import { useQueryState } from "next-usequerystate";
import { useEffect, useState } from "react";
import Image from "next/image";
import getProductsListTwo from "../../pagesAsync/productsGetProductList";

export default function ProductsGlobList({ productListData }: { productListData: any }) {
  const [productsList, setProductsList] = useState(productListData?.data ?? []);
  const [page, setPage] = useQueryState('page');
  const [perPage, setPer_Page] = useQueryState('per_page');

  useEffect(() => {
    getProductsListByChangePage();
  }, [page, perPage]);

  const getProductsListByChangePage = async () => {
    const productsData = await getProductsListTwo({ page: page ?? '1', per_page: perPage ?? '12' });
    setProductsList(productsData?.data);
  };

  const onPageChangeHandler = ({ selected }: { selected: number }) => {
    setPage(String(selected + 1));
  };

  return (
    <div className="flex mt-16 mx-16 gap-6">
      {/* Product List Section */}
      <div className="w-full lg:w-3/4">
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {productsList?.map((product: any) => (
            <li
              key={product.id}
              className="max-w-md mx-auto flex flex-col rounded-md overflow-hidden shadow-md hover:shadow-lg bg-white"
            >
              <div className="relative">
                <Image
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover"
                  src="/slideOne.jpg"
                  alt="Product Image"
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                  SALE
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow text-start">
                <h3 className="text-lg font-medium mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.body}
                </p>
                <div className="flex items-center justify-between mt-auto pt-2 border-t">
                  <span></span>
                  <Link
                    href={`/products/${product?.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm"
                  >
                    مشاهده
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <ReactCustomPaginate
            pageCount={productListData?.total_page}
            page={page ? parseInt(page) || undefined : undefined} // ✅ اصلاح ارور TypeScript
            onPageChangeHandler={onPageChangeHandler}
          />
        </div>
      </div>

      {/* Filter Section */}
      <div className="hidden lg:block w-1/4">
        <div className="bg-[#f5f1ec] rounded-md shadow-md p-4">
          <h2 className="text-[#4e342e] text-md font-bold mb-4 border-b border-[#8d6e63] pb-2">فیلتر محصولات</h2>

          {/* فیلتر کتگوری */}
          <div className="mb-4">
            <h3 className="text-[#6d4c41] text-sm font-semibold mb-2">دسته‌بندی</h3>
            <ul className="space-y-1 text-sm text-[#4e342e]">
              <li><input type="checkbox" id="turk" className="ml-2" /><label htmlFor="turk">قهوه ترک</label></li>
              <li><input type="checkbox" id="espresso" className="ml-2" /><label htmlFor="espresso">اسپرسو</label></li>
              <li><input type="checkbox" id="france" className="ml-2" /><label htmlFor="france">فرانسه</label></li>
            </ul>
          </div>

          {/* فیلتر شکر */}
          <div className="mb-4">
            <h3 className="text-[#6d4c41] text-sm font-semibold mb-2">شکر</h3>
            <ul className="space-y-1 text-sm items-center text-[#4e342e]">
              <li><input type="checkbox" id="with-sugar" className="ml-2" /><label htmlFor="with-sugar">با شکر</label></li>
              <li><input type="checkbox" id="without-sugar" className="ml-2" /><label htmlFor="without-sugar">بدون شکر</label></li>
            </ul>
          </div>

          {/* محدوده قیمت */}
          <div>
            <h3 className="text-[#6d4c41] text-sm font-semibold mb-2">محدوده قیمت</h3>
            <input
              type="range"
              min="0"
              max="500"
              className="w-full accent-[#795548]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
