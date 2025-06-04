'use client';

import Link from "next/link";
import ReactCustomPaginate from "../shared/reactCutsomPaginate";
import Image from "next/image";



export default function ProductsList({ productsListData } : { productsListData : any}) {

    return (
        <>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {productsListData?.data?.map((product : any) => (
                    <li
                        key={product.id}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                    >
                    <div className="flex flex-1 flex-col items-start">
                        <Image width={400} height={400} className="mx-auto h-32 w-full flex-shrink-0 rounded-t-md object-cover" src="https://dummyimage.com/400x350" alt="" />
                        <div className="p-6 text-start">
                            <h3 className="text-sm text-gray-900 font-bold">{product.title}</h3>
                            <dl className="mt-1 flex flex-grow flex-col justify-between">
                                <dd className="text-sm text-gray-500">{product.body.substring(0,100)}</dd>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                            <div className="flex w-0 flex-1">
                                <Link
                                    href={`/products/${product?.id}`}
                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900 hover:text-indigo-700"
                                >
                                    see product
                                </Link>
                            </div>
                        </div>
                    </div>
                    </li>
                ))}
            </ul>


            <ReactCustomPaginate pageCount={productsListData?.total_page} page={1} onPageChangeHandler={() => {}} />
        </>
    )
}