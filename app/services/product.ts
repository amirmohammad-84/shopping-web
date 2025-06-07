import { CreateProductInterface } from "../contracts/admin/products";
import Cookies from "universal-cookie";

const API_URL = "https://shop-backend-3b26.onrender.com";
const cookie = new Cookies();

const authHeaders = () => {
  const token = cookie.get("token");
  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };
};

export async function GetProducts({ page = 1, per_page = 5 }) {
  const res = await fetch(`${API_URL}/products?page=${page}&per_page=${per_page}`, {
    headers: authHeaders()
  });
  const data = await res.json();
  return {
    products: data?.data,
    total_page: data?.total_page
  };
}

export async function GetSignleProduct({ productId }: { productId: number }) {
  const res = await fetch(`${API_URL}/products/${productId}`, {
    headers: authHeaders()
  });
  return await res.json();
}

export async function CreateProduct(values: CreateProductInterface) {
  const res = await fetch(`${API_URL}/products/create`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      ...values,
      body: values.description,
      category: values.category_id
    })
  });
  return await res.json();
}

export async function UpdateProduct(productId: number, values: CreateProductInterface) {
  const res = await fetch(`${API_URL}/products/${productId}/update`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      ...values,
      body: values.description,
      category: values.category_id
    })
  });
  return await res.json();
}

export async function DeleteProduct(productId: number) {
  const res = await fetch(`${API_URL}/products/${productId}/delete`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({})
  });
  return await res.json();
}
