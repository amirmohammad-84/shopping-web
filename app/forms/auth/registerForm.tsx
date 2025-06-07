import { withFormik } from "formik";
import Router from "next/router";
import * as yup from "yup";

import InnerRegisterForm from "../../components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "../../contracts/auth";
import ValidationError from "../../exceptions/validationError";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

const registerFormValidationSchema = yup.object().shape({
  name: yup.string().required().min(4).max(255),
  phone: yup.string().required().min(8).matches(phoneRegExp, "the phone format is not correct"),
});

interface RegisterFormProps {}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
  mapPropsToValues: (props) => ({
    name: "",
    phone: "",
  }),
  validationSchema: registerFormValidationSchema,
  handleSubmit: async (values, { setFieldError }) => {
    try {
      const res = await fetch("https://shop-backend-3b26.onrender.com/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 200) {
        Router.push("/auth/login");
      } else if (res.status === 422 && data.errors) {
        Object.entries(data.errors).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      } else {
        console.error("Unexpected error:", data);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  },
})(InnerRegisterForm);

export default RegisterForm;
