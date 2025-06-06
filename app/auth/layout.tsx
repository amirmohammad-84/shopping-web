'use client';

import { useRouter } from "next/navigation"
import { ReactNode } from "react"
import useAuth from "../hooks/useAuth"


interface Props {
    children : ReactNode
}

const GuestLayout = ({ children } : Props) => {
    const router = useRouter();
    const { user ,error , loading } = useAuth();

    if(user) {
        router.push('/');
        return <></>
    }

    return (
        <div className="w-full text-2xl">
            {children}
        </div>
    )
} 


export default GuestLayout;