'use client';

import { withFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as yup from "yup";
import InnerProductForm from "../../../components/admin/products/innerProductForm";
import { CreateProductInterface } from "../../../contracts/admin/products";

import ValidationError from "../../../exceptions/validationError";
import { UpdateProduct } from "../../../services/product";
import Product from "../../../models/product";
import { KeyedMutator } from "swr";

const validationSchema = yup.object().shape({
    title : yup.string().required().min(4).max(255),
    category_id : yup.number().required(),
    price : yup.string().min(0),
    description : yup.string().required().min(4).max(6000)
});

interface ProductFormProps {
    product : Product,
    mutateProducts? : KeyedMutator<{
        products: any;
        total_page: any;
    }>
}

const EditProductFormWrapper = (props: ProductFormProps) => {
    const router = useRouter();

    const FormikComponent = withFormik<ProductFormProps , CreateProductInterface>({
        mapPropsToValues : ({ product }) => ({
            title : product.title,
            category_id : product.category ?? "",
            price : product.price,
            description : product.body
        }),
        validationSchema: validationSchema,
        handleSubmit : async (values , { setFieldError }) => {
            try {
                await UpdateProduct(props.product.id , values);

                if(props?.mutateProducts) {
                    props.mutateProducts();
                }

                router.push('/admin/products');
                toast.success('محصول مورد نظر با موفقیت ویرایش شد');

            } catch (error) {
                if(error instanceof ValidationError) {
                    Object.entries(error.messages).forEach(([key , value]) =>
                        setFieldError(key , value as string)
                    );
                    return;
                }

                toast.error('متاسفانه مشکلی در ویرایش محصول وجود دارد.');
                console.log(error);

                router.push('/admin/products'); // ریدایرکت در صورت ارور
            }
        }
    })(InnerProductForm);

    return <FormikComponent {...props} />;
};

export default EditProductFormWrapper;
