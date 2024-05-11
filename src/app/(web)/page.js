'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import user from '../../../schemaTypes/auth/user'

export default function Home() {
  const { data, status } = useSession()
  console.log('Session Data:', data)

  // Handling the loading state
  if (status === 'loading') {
    return <p>Loading...</p>
  }

  return <div>Home: {data?.user ? data.user.name : 'No User Yet.'}</div>
}
