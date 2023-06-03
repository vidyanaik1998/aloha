import * as React from 'react'
import guider_img from "../public/assets/guider_img.png"
import Image from 'next/image';
import arrowimg from "../public/assets/arrow.png"
import { useRouter } from 'next/navigation';

type Props = {
  category: any
}

const Catergories: React.FC<Props> = ({ category }) => {
  const router = useRouter();

  return (
    <section className=' bg-[#E6F2F2]'>
      <div className='sm:grid grid-cols-2 gap-8 pt-4'>
        <div>
          <h2 className='text-[16px] font-bold text-[#001A1A]'>Catergories</h2>

          <div className='mt-3'>
            {category.map((data: any , index:any) => {
              return (
                <div key={index} onClick={() => router.push(`/activities/${data.name}`)}  className='bg-[#FFFFFF] cursor-pointer rounded-[8px] flex justify-between mt-2 px-3 py-3'>
                  <h4 className='text-[16px] font-semibold text-[#001A1A]'>{data.name}</h4>
                  <Image className='cursor-pointer p-[10px] w-[33px]' src={arrowimg} alt="arrow image" />

                </div>
              )
            })}
          </div>

        </div>
        <div>
          <h2 className=' sm:pt-0 pt-5 text-[16px] font-bold text-[#001A1A]'>Travel Guide</h2>
          <div className='flex mt-4 justify-between bg-[#FFFFFF] rounded-[8px] p-4'>
            <div>
              <h4 className='text-[24px] font-bold text-[#001A1A] '>Hadwin Malone</h4>
              <h6 className='text-[16px] font-normal text-[#001A1A]'>Guide since 2012</h6>
              <button className='border border-[#008080] rounded-[8px] mt-4 text-[16px] font-bold  text-[#008080] px-4  py-2'>Contact</button>
            </div>
            <Image src={guider_img} alt="guider imgae" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catergories