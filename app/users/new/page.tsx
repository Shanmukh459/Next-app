// 'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const NewPage = () => {
  // const router = useRouter()
  return (
    // <button 
    //   className='btn btn-primary'
    //   onClick={() => router.push('/users')}
    // >CREATE</button>
    <Link href='/users' className='btn btn-primary'>CREATE</Link>
  )
}

export default NewPage