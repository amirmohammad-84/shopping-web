'use client';

import { withFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as yup from "yup";
import InnerProductForm from "../../../components/admin/products/innerProductForm";
import { CreateProductInterface } from "../../../contracts/admin/products";

import ValidationError from "../../../exceptions/validationError";
import { CreateProduct } from "../../../services/product";
import { useEffect, useState } from "react";

const validationSchema = yup.object().shape({
    title : yup.string().required().min(4).max(255),
    category_id : yup.number().required(),
    price : yup.string().min(0),
    description : yup.string().required().min(4).max(6000)
});

interface ProductFormProps {
    router: ReturnType<typeof useRouter>;
}

const FormWrapper = () => {
    const router = useRouter();
    const [FormComponent, setFormComponent] = useState<JSX.Element | null>(null);

    useEffect(() => {
        const FormikForm = withFormik<ProductFormProps , CreateProductInterface>({
            mapPropsToValues : () => ({
                title : '',
                category_id : '',
                price : 0,
                description : ''
            }),
            validationSchema: validationSchema,
            handleSubmit : async (values , { setFieldError }) => {
                try {
                    console.log(values);
                    await CreateProduct(values);
                    router.push('/admin/products');
                    toast.success('محصول مورد نظر با موفقیت ثبت شد')
                } catch (error) {
                    if(error instanceof ValidationError) {
                        Object.entries(error.messages).forEach(([key , value]) => 
                            setFieldError(key , value as string)
                        );
                        return;
                    }

                    toast.error('متاسفانه مشکلی در ثبت محصول وجود دارد.')
                    console.log(error)
                }
            }
        })(InnerProductForm);

        setFormComponent(<FormikForm router={router} />);
    }, [router]);

    return FormComponent;
};

export default FormWrapper;
