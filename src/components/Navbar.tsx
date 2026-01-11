import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between'>
      <Link href="/" className='flex items-center'>
      <Image src="/logo.png" alt="" width={36} height={36} className='w-6 h-6 md:w-9 md:h-9' />
      <p className='text-md font-medium tracking-wider'>TrendLama</p>
      </Link>
      <div className=''>right</div>
    </nav>
  )
}

export default Navbar