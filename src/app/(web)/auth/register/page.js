'use client'

import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signUp } from 'next-auth-sanity/client'

const initialData = {
  name: '',
  email: '',
  password: '',
}
export default function Auth() {
  const [formData, setFormData] = useState(initialData)
  const { data } = useSession()

  console.log('HEEEELLLOOOOOO')
  console.log('DATA:', data)

  const router = useRouter()
  console.log('FormData:', formData)

  function handleInputChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  async function loginHandler() {
    try {
      await signIn()
      // push user to home page
      router.push('/')
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const user = await signUp(formData)
      if (user) {
        toast.success('Success! Please sign in.')
        router.push('/auth')
      }
      console.log(formData)
    } catch (error) {
      console.log(error)
      toast.error(`Something went wrong: ${error}`)
    } finally {
      setFormData(initialData)
    }
  }

  return (
    <>
      <div className='flex min-h-full h-screen flex-1'>
        <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <h2 className='mt-20 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                Become an SGS Member
              </h2>
              <p className='mt-2 text-sm leading-6 text-gray-500'>
                Already a member?{' '}
                <Link
                  href='/auth'
                  className='font-semibold text-indigo-600 hover:text-indigo-500 underline'
                >
                  Sign In Here
                </Link>
              </p>
            </div>

            <div className='mt-5'>
              <div>
                <form
                  onSubmit={handleSubmit}
                  method='POST'
                  className='space-y-6'
                >
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      First Name
                    </label>
                    <div className='mt-2'>
                      <input
                        id='name'
                        name='name'
                        type='text'
                        autoComplete='name'
                        value={formData.name}
                        required
                        onChange={handleInputChange}
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Email address
                    </label>
                    <div className='mt-2'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        value={formData.email}
                        required
                        onChange={handleInputChange}
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Password
                    </label>
                    <div className='mt-2'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        value={formData.password}
                        required
                        onChange={handleInputChange}
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 rounded  border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        htmlFor='remember-me'
                        className='ml-3 block text-sm leading-6 text-gray-700'
                      >
                        Remember me
                      </label>
                    </div>

                    <div className='text-sm leading-6'>
                      <a
                        href='#'
                        className='font-semibold text-indigo-600 hover:text-indigo-500'
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type='submit'
                      className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src='https://images.pexels.com/photos/6542389/pexels-photo-6542389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
          />
        </div>
      </div>
    </>
  )
}
