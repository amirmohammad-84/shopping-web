import { Form, FormikProps } from "formik"
import { LoginFormValuesInterface } from "../../contracts/auth"
import Input from "../shared/form/input"

const InnerLoginForm = (props : FormikProps<LoginFormValuesInterface>) => {
    return (
        <Form className="p-8 rounded-3xl shadow-[8px_8px_16px_#c5c9cc,_-8px_-8px_16px_#ffffff] bg-[#e0e5ec] max-w-sm mx-auto space-y-6">
            <div>
                <Input
                name="phone"
                type="text"
                label="Phone Number"
                />
            </div>

            <div>
                <Input
                name="password"
                type="password"
                label="Password"
                />
            </div>

            <div>
                <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                Login
                </button>
            </div>
        </Form>

    )
}

export default InnerLoginForm;