import React from 'react'
import Samsung from "../../../assets/image/partnership/samsung.svg"
import Nabati from "../../../assets/image/partnership/nabati.svg"
import Bbi from "../../../assets/image/partnership/bbi.svg"
import Lazada from "../../../assets/image/partnership/lazada.svg"
import Danano from "../../../assets/image/partnership/danone.svg"

const Parthnership = () => {
  return (
    <div className='w-full h-[20rem] flex items-center justify-center'>
        <div className="flex flex-col items-center gap-6">
            <span className='text-[2rem] font-semibold'>Telah diikuti oleh 35+ Perusahaan Terkemuka</span>
            <div className="flex items-center justify-around w-full">
                <img src={Samsung} alt="" className='w-[10rem] h-[7rem]' />
                <img src={Nabati} alt="" className='w-[10rem] h-[7rem]' />
                <img src={Bbi} alt="" className='w-[10rem] h-[7rem]' />
                <img src={Lazada} alt="" className='w-[10rem] h-[7rem]' />
                <img src={Danano} alt="" className='w-[10rem] h-[7rem]' />
                <img src={Samsung} alt="" className='w-[10rem] h-[7rem]' />
                <img src={Nabati} alt="" className='w-[10rem] h-[7rem]' />
                <img src={Danano} alt="" className='w-[10rem] h-[7rem]' />
                <img src={Bbi} alt="" className='w-[10rem] h-[7rem]' />
                <img src={Samsung} alt="" className='w-[10rem] h-[7rem]' />
            </div>
        </div>
    </div>
  )
}

export default Parthnership