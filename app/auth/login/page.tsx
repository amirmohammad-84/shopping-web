'use client'

import { useAppDispatch } from '../../hooks';
import { updatePhoneVerifyToken } from '../../store/auth';
import LoginForm from '../../forms/auth/loginForm';
import { useRouter } from 'next/navigation';
import { ToastContainer } from 'react-toastify'; // ✅ اضافه شد
import 'react-toastify/dist/ReactToastify.css';  // ✅ استایل‌ها
import { Metadata } from 'next';



export const metadata: Metadata = {
  title: "Login",
  description: "Login Page",
};

const Login = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const setPhoneVerifyToken = (token: string) => {
        dispatch(updatePhoneVerifyToken(token));
    }

    return (
        <>
            <div className="relative min-h-screen bg-[#e0e5ec] flex items-center justify-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <svg className="fixed -top-32 -left-32 opacity-20" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="200" cy="200" r="200" fill="#cbd5e1" />
                    </svg>

                    <svg className="fixed -bottom-32 -right-32 opacity-10" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="400" height="400" rx="100" fill="#a3b1c6" />
                    </svg>
                </div>

                <div className="w-full max-w-md rounded-3xl shadow-[8px_8px_16px_#c5c9cc,_-8px_-8px_16px_#ffffff] bg-[#e0e5ec] p-10 space-y-6 z-10">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-800">
                        Login on Shopy
                    </h2>

                    <LoginForm setToken={setPhoneVerifyToken} router={router} />
                </div>
            </div>

            {/* ✅ toast notification container */}
            <ToastContainer />
        </>
    )
}

export default Login;
