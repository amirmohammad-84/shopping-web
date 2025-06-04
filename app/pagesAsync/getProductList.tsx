

const getProductsList = async ({
  page,
  per_page,
}: {
  page: string;
  per_page: string;
}) => {
  let res = await fetch(
    `http://localhost:5000/api/products?page=${page}&per_page=${per_page}`
  );

  if (!res.ok) {
    throw new Error("something went wrong");
  }

  return res.json();
};



export default getProductsList