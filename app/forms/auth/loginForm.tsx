import { withFormik } from "formik";
import * as yup from "yup";

import InnerLoginForm from "../../components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "../../contracts/auth";
import ValidationError from "../../exceptions/validationError";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { toast } from "react-toastify"; // ✅ اضافه شد

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

interface LoginFormProps {
  setToken: (token: string) => void;
  router: AppRouterInstance;
}

const loginFormValidationSchema = yup.object().shape({
  phone: yup.string().required().min(8).matches(phoneRegExp, "the phone format is not correct"),
});

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => ({
    phone: "",
  }),
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await fetch("https://shop-backend-3b26.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 200) {
        props.setToken(data.token);

        toast.success(`کد تایید شما: ${data.code}`, {
          position: "top-right",
          autoClose: 5000,
        });

        props.router.push("/auth/login/step-two");
      } else if (res.status === 422 && data.errors) {
        Object.entries(data.errors).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      } else {
        toast.error("خطا در ورود. لطفاً دوباره تلاش کنید.");
        console.log("Unexpected response:", data);
      }
    } catch (error) {
      toast.error("خطا در ارتباط با سرور.");
      console.log("Network error:", error);
    }
  },
})(InnerLoginForm);

export default LoginForm;
