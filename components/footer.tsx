
import * as React from 'react'
import Image from 'next/image';
import logo from "../public/assets/footerlogo.png"

const Footer = () => {
  return (
    <div className='bg-[#001A1A] px-[10rem] py-[22px]'>
      <Image src={logo} alt="logo" />
    </div>
  )
}

export default Footer