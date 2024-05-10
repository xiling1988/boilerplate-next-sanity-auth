'use client'
import { useContext, useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  LightBulbIcon,
  MoonIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import ThemeContext from '@/app/context/themeContext'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Rockstars', href: '/rockstars' },
  { name: 'Knowledge Hub', href: '/knowledge-hub' },
]

export default function Header() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      {/* <header className='fixed bg-white opacity-80 shadow-lg rounded-xl inset-x-0 top-3 left-2 right-2 z-50'> */}

      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 bg-white opacity-90 shadow-2xl border rounded-xl inset-x-0 md:mt-9 left-2 right-2 z-50'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image
              height={100}
              width={100}
              className='h-12 w-auto'
              src='/logo.svg'
              alt=''
            />
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-20'>
          <>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 text-${
                  item.href === '/rockstars' ? 'nexusRed underline' : 'gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* BUTTON FOR DARK THEME */}
            <button
              className={`text-sm h-8 w-8 font-semibold leading-6 text-gray-900'`}
            >
              {darkTheme ? (
                <LightBulbIcon
                  className='text-gray-900'
                  onClick={() => {
                    setDarkTheme(false)
                    localStorage.removeItem('theme')
                  }}
                />
              ) : (
                <MoonIcon
                  onClick={() => {
                    setDarkTheme(true)
                    localStorage.setItem('theme', true)
                  }}
                />
              )}
            </button>
          </>
        </div>
      </nav>

      {/* </header> */}

      <header>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <Image
                  height={100}
                  width={100}
                  className='h-10 w-auto'
                  src='/logo.svg'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-${
                        item.href === '/rockstars'
                          ? 'nexusRed underline'
                          : 'gray-900'
                      } hover:bg-gray-50`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  )
}
