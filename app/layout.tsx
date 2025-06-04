'use client';

import '../styles/globals.css'
import { Provider } from 'react-redux'

import { store } from './../app/store';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Vazirmatn } from 'next/font/google'
import Header from './components/layouts/header';



const vazirmatn = Vazirmatn({ subsets: ['arabic'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body className={`${vazirmatn.className} bg-gray-100 w-full overflow-x-hidden`}>
        <Header />
        <div className='w-full'>
          <Provider store={store}>
            {children}
            <ToastContainer 
              position="bottom-right"
              autoClose={5000}
            />
          </Provider>
        </div>
       </body>
    </html>
  )
}
