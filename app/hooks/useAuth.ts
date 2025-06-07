import useSWR from "swr";
import Cookies from "universal-cookie";
import { useAppDispatch } from ".";
import { updateUser } from "../store/auth";

const fetchUser = async () => {
  const cookie = new Cookies();
  const token = cookie.get("token");

  const res = await fetch("https://shop-backend-3b26.onrender.com/user", {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Failed to fetch user");
  }

  return await res.json();
};

const useAuth = () => {
  const dispatch = useAppDispatch();

  const { data, error } = useSWR("user_me", fetchUser);

  if (data?.data?.user) {
    dispatch(updateUser(data.data.user));
  }

  return {
    user: data?.data?.user,
    error,
    loading: !data && !error,
  };
};

export default useAuth;
