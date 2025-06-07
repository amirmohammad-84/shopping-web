import { withFormik } from "formik";
import { NextRouter } from "next/router";
import * as yup from "yup";
import InnerPhoneVerify from "../../components/auth/innerPhoneVerifyForm";
import { PhoneVerifyFormValuesInterface } from "../../contracts/auth";
import ValidationError from "../../exceptions/validationError";
import { storeLoginToken } from "../../helpers/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const phoneVerifyFormValidationSchema = yup.object().shape({
  code: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "فقط میتوانید عدد وارد کنید")
    .length(6),
});

interface PhoneVerifyFormProps {
  token?: string;
  clearToken: () => void;
  router: AppRouterInstance;
}

const PhoneVerifyForm = withFormik<
  PhoneVerifyFormProps,
  PhoneVerifyFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    code: "",
    token: props.token || "",
  }),
  validationSchema: phoneVerifyFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await fetch(
        "https://shop-backend-3b26.onrender.com/auth/login/verify-phone",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      if (res.status === 200) {
        storeLoginToken(data?.user?.token);
        await props.router.push("/");
        props.clearToken();
      } else if (res.status === 422) {
        // Validation error from backend
        if (data.errors) {
          Object.entries(data.errors).forEach(([key, value]) =>
            setFieldError(key, value as string)
          );
        }
      } else {
        console.error("Unexpected error:", data);
      }
    } catch (error) {
      console.log("Network or unexpected error:", error);
    }
  },
})(InnerPhoneVerify);

export default PhoneVerifyForm;
