'use client';

import { useState, Fragment } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'صفحه اصلی', href: '/' },
  { name: 'محصولات', href: '/products' },
  { name: 'درباره ما', href: '/about' },
  // { name: 'مقالات', href: '/articles' },
  { name: 'تماس', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#1e293b] text-white shadow-md h-16 flex items-center justify-between px-6 md:px-8 z-50">

      {/* لاگین سمت چپ */}
      <div className="w-1/5 text-center">
        <Link
          href="/auth/login"
          className="hover:text-amber-500 transition-colors font-semibold ml-4"
        >
          ورود
        </Link>
        <Link
          href="/auth/register"
          className="hover:text-amber-500 transition-colors font-semibold"
        >
          ثبت‌نام
        </Link>
      </div>

      {/* لینک‌ها وسط */}
      <nav className="hidden lg:flex gap-6 w-3/5 justify-center text-lg font-semibold">

        {/* دراپ‌داون داشبورد */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="inline-flex items-center hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded">
            داشبورد
            <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Menu.Items className="absolute mt-2 w-40 origin-top-left rounded-md bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/admin"
                      className={`block px-4 py-2 text-sm ${active ? 'bg-amber-500 text-white' : ''}`}
                    >
                      داشبورد ادمین
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/user"
                      className={`block px-4 py-2 text-sm ${active ? 'bg-amber-500 text-white' : ''}`}
                    >
                      داشبورد دانشجو
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* سایر لینک‌ها */}
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="hover:text-amber-500 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* لوگو سمت راست */}
      <div className="w-1/5 flex justify-center">
        <Link href="/">
          <Image
            src="/headerIcon.png"
            alt="لوگو"
            width={48}
            height={48}
            priority
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* موبایل منو (دکمه) */}
      <div className="lg:hidden flex justify-center items-center">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="باز کردن منوی اصلی"
        >
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {/* موبایل منو (دیالوگ) */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-black/50" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full max-w-xs overflow-y-auto bg-[#1e293b] px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">لوگو</span>
              <Image
                src=""
                alt="لوگو"
                width={48}
                height={48}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="بستن منو"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-6 space-y-4">

            {/* دراپ‌داون موبایل برای داشبورد */}
            <Menu as="div" className="relative">
              <Menu.Button className="w-full flex justify-between items-center rounded-md bg-gray-700 px-4 py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500">
                داشبورد
                <ChevronDownIcon className="h-5 w-5" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 max-h-0"
                enterTo="opacity-100 max-h-40"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 max-h-40"
                leaveTo="opacity-0 max-h-0"
              >
                <Menu.Items className="mt-1 space-y-1 overflow-hidden rounded-md bg-gray-700">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/admin"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-amber-500' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        داشبورد ادمین
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/user"
                        className={`block px-4 py-2 text-sm ${active ? 'bg-amber-500' : 'text-white'}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        داشبورد دانشجو
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* لینک‌های اصلی */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-semibold text-white hover:bg-amber-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* لینک ورود / ثبت نام موبایل */}
            <Link
              href="/auth/login"
              className="block rounded-md px-3 py-2 text-base font-semibold text-white hover:bg-amber-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              ورود / ثبت‌نام
            </Link>

          </nav>
        </Dialog.Panel>
      </Dialog>

    </header>
  )
}
