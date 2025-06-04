import { ErrorMessage, Field } from "formik";
import { FC } from "react";
import { string } from "yup";

interface InputProps {
    name : string,
    label : string,
    type? : string,
    inputClassName? : string,
    labelClassName? : string,
    errorClassName? : string
}

const Input : FC<InputProps> = ({
    name,
    label,
    type = 'text',
    inputClassName,
    labelClassName,
    errorClassName
}) => {

    return (
        <>
            <label htmlFor={name} className={`block text-sm font-medium text-gray-600 mb-1 ${labelClassName ?? ''}`}>
                {label}
            </label>
            <Field
                id={name}
                name={name}
                type={type}
                className={`
                w-full
                px-4 py-3
                rounded-full
                bg-[#e0e5ec]
                text-gray-700
                placeholder-gray-500
                shadow-[inset_4px_4px_8px_#c5c9cc,_inset_-4px_-4px_8px_#ffffff]
                focus:outline-none
                focus:ring-2
                focus:ring-blue-300
                transition duration-200 ease-in-out
                ${inputClassName ?? ''}
                `}
            />
            <ErrorMessage
                name={name}
                className={`text-red-500 text-sm mt-1 ${errorClassName ?? ''}`}
                component="div"
            />
        </>

    );

}


export default Input;