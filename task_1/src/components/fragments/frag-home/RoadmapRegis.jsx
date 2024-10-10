import React from 'react'
import Roadmap from "../../../assets/image/roadmap.svg"

const RoadmapRegis = () => {
  return (
    <div className='w-full px-20 flex flex-col items-center gap-8 bg-[#F5F8FA] py-6'>
        <span className='text-[2.5rem] font-semibold text-center'>Alur Pengajuan Sertifikasi Industri Hijau</span>
        <div className="w-full h-auto">
            <img src={Roadmap} alt="" className='w-full' />
        </div>
    </div>
  )
}

export default RoadmapRegis