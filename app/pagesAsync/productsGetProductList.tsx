const getProductsListTwo = async ({ page, per_page }: { page: string; per_page: string }) => {
    let res = await fetch(`https://shop-backend-3b26.onrender.com/api/products?page=${page}&per_page=${per_page}`);

    if (!res.ok) {
        throw new Error('something went wrong');
    }

    return res.json();
}

export default getProductsListTwo;
