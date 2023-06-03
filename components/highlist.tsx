import * as React from 'react'
import arrowimg from "../public/assets/arrow.png"
import Image from 'next/image';


type Props = {
  highlist: any
}

const Highlights: React.FC<Props> = ({ highlist }) => {

  return (
    <section className='' >
      <h2 className='text-[16px] font-bold text-[#001A1A]'>Highlist</h2>
      <div className=' cardset sm:grid sm:grid-cols-3 gap-6 pt-4'>
      {highlist?.map((data:any , index:any)=>{
       return(
        <div key={index} className='card'>
        <img src={data.image} alt={data.title} />
         <div className='p-5'>
         <h4 className='text-[24px] text-[#008080] text-bold'>{data.title}</h4>
          <p className='text-[16px] font-normal text-[#001A1A]'>{data.description}</p>
          <Image className='bg-[#E6F2F2] float-right rounded-[999px] p-[10px] w-[33px] cursor-pointer' src={arrowimg} alt="arrow image" />
          </div>
      </div>
       )

      })}
      </div>
      

    </section>
  )
}

export default Highlights