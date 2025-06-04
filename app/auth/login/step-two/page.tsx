'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import PhoneVerifyForm from '../../../forms/auth/phoneVerifyForm'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { selectPhoneVerifyToken, updatePhoneVerifyToken } from '../../../store/auth';
import Image from 'next/image';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Verify phone",
  description: "Verify phone",
};


const PhoneVerify = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const token = useAppSelector(selectPhoneVerifyToken);

    const clearPhoneVerifyToken = () => {
        dispatch(updatePhoneVerifyToken(undefined))
    }

    useEffect(() => {
        if(token === undefined) {
            router.push('/auth/login')
        }

        return () => {
            clearPhoneVerifyToken();
        }
    },[token]);

    return (
        <>
            <div className="relative min-h-screen bg-[#e0e5ec] flex flex-col justify-center px-4 overflow-hidden">
                {/* SVG background */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <svg
                        className="fixed -top-32 -left-32 opacity-20"
                        width="400"
                        height="400"
                        viewBox="0 0 400 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="200" cy="200" r="200" fill="#cbd5e1" />
                    </svg>

                    <svg
                        className="fixed -bottom-32 -right-32 opacity-10"
                        width="400"
                        height="400"
                        viewBox="0 0 400 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="400" height="400" rx="100" fill="#a3b1c6" />
                    </svg>
                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
                    
                    <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-800">
                        Login Phone Verify
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10">
                    <div className="w-full rounded-3xl shadow-[8px_8px_16px_#c5c9cc,_-8px_-8px_16px_#ffffff] bg-[#e0e5ec] p-10 space-y-6">
                        <PhoneVerifyForm token={token} clearToken={clearPhoneVerifyToken} router={router} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhoneVerify;
