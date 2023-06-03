import * as React from 'react'
import Image from 'next/image';
import logo from "../public/assets/Aloha.png"
import menu from "../public/assets/menu_icon.png"
import close_icon from "../public/assets/close.png"
import { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className='header sm:flex hidden'>
                <div className='flex items-center gap-[65px] justify-between'>
                    <Image src={logo} alt="logo" />
                    <h2 className='text-[16px] font-normal text-[#001A1A]'>Home</h2>
                    <h2 className='text-[16px] font-normal text-[#001A1A]'>Surfing</h2>
                    <h2 className='text-[16px] font-normal text-[#001A1A]'>Hula</h2>
                    <h2 className='text-[16px] font-normal text-[#001A1A]'>Vulcano</h2>
                </div>
                <button className='bg-[#008080] text-[white] px-6 py-3 rounded-[8px] font-bold'>Book a trip</button>
            </div>
            <div className='bg-[white]   px-4 py-4 sm:hidden block'>
                <div className='flex  justify-between items-center'>
                    <Image src={logo} alt="logo" />
                    <Image src={menu} alt="menu" className='w-[37px]  object-cover' onClick={() => setOpen(!open)} />
                </div>
            </div>
            {open &&
                <div className='bg-[white] z-[999] w-[90%] min-h-[800px] right-[0] p-6 fixed top-[0]'>
                    <Image src={close_icon} className='float-right' alt="logo" onClick={() => setOpen(false)} />
                    <div className=''>
                        <h2 className='text-[20px] pt-20 font-normal text-[#001A1A]'>Home</h2>
                        <h2 className='text-[20px] pt-8 font-normal text-[#001A1A]'>Surfing</h2>
                        <h2 className='text-[20px] pt-8 font-normal text-[#001A1A]'>Hula</h2>
                        <h2 className='text-[20px] pt-8 font-normal text-[#001A1A]'>Vulcano</h2>
                        <button className='bg-[#008080] mt-10 text-[white] px-6 py-3 rounded-[8px] font-bold'>Book a trip</button>

                    </div>
                </div>
            }
        </>
    )
}

export default Header