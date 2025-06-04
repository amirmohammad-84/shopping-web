'use client';

import { useState, Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'


const navigationTwo = [
  { name: 'سوالات متداول', href: '/FAQ' },
  { name: 'قوانین و مقررات', href: '/conditions' },
]
const navigationThree = [
  { name: 'صفحه اصلی', href: '/' },
  { name: 'محصولات', href: '/products' },
  { name: 'درباره ما', href: '/about' },
  // { name: 'مقالات', href: '/articles' },
  { name: 'تماس با ما', href: '/contact' },
]

export default function Footer() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <footer className="bg-amber-950 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    
                    <div>
                        <h3 className="font-cursive text-2xl mb-4">چای و قهوه</h3>
                        <p className="mb-4">لورم ایپسوم متن ساختگی با تولید</p>
                        <p>چای و قهوه. حق ناشر محفوظ است ©</p>
                    </div>
                    
                    
                    <div>
                        <h4 className="font-semibold text-lg mb-4">دسترسی سریع</h4>
                        <ul className="space-y-2">
                            {navigationThree.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block rounded-md py-1 text-base font-semibold text-white hover:bg-amber-700"
                                // onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                        </ul>
                    </div>
                    
                    
                    <div>
                        <h4 className="font-semibold text-lg mb-4">اطلاعات</h4>
                        <ul className="space-y-2">
                            {navigationTwo.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block rounded-md py-1 text-base font-semibold text-white hover:bg-amber-700"
                                // onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                        </ul>
                    </div>
                    
                    
                    <div>
                        <h4 className="font-semibold text-lg mb-4">اطلاعات تماس</h4>
                        <address className="not-italic">
                            <p className="mb-2">لورم ایپسوم متن ساختگی</p>
                            <p className="mb-2">تولید ساختگی</p>
                            <p className="mb-2">Email: <a href="mailto:randomEmail@gmail.com" className="hover:text-amber-300">randomEmail@gmail.com</a></p>
                            <p className='mb-2'>Phone: <a href="tel:09912382497" className="hover:text-amber-300">09912382497</a></p>
                        </address>
                    </div>
                </div>
                
                {/* <div className="border-t border-amber-800 mt-12 pt-8 text-center text-sm text-gray-400">
                    <p>All images used are for demonstration purposes only. All content is property of Coffee & Tea unless otherwise noted.</p>
                </div> */}
            </div>
        </footer>
  )
}
