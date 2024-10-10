import React from 'react'
import Crt from "../../../assets/image/crt1.svg"
import Crt2 from "../../../assets/image/crt2.svg"
import Lt1 from "../../../assets/image/lt1.svg"
import Lt2 from "../../../assets/image/lt2.svg"
import Lt3 from "../../../assets/image/lt3.svg"

const IndustriesGreen = () => {
  return (
    <div className='flex'>

        <div className="w-[20%] h-auto bg-[#F5F8FA] flex flex-col gap-16 justify-center items-center py-7">
            <div className="flex flex-col items-center">
                <span className="flex items-center gap-1 leading-tight">
                    <span className='text-[#0D6EFD] font-bold text-[3rem]'>35</span>
                    <img src={Crt} alt="" className='w-[2rem] h-[2rem]'/>
                </span>
                <div className='text-[1rem] text-[#495057] font-extralight'>Perusahaan Tersertifikasi</div>
            </div>
            <div className="flex flex-col items-center">
                <span className="flex items-center gap-1 leading-tight">
                    <span className='text-[#0D6EFD] font-bold text-[3rem]'>420</span>
                    <img src={Crt} alt="" className='w-[2rem] h-[2rem]'/>
                </span>
                <div className='text-[1rem] text-[#495057] font-extralight'>SIH Terbit</div>
            </div>
            <div className="flex flex-col items-center">
                <span className="flex items-center gap-1 leading-tight">
                    <span className='text-[#0D6EFD] font-bold text-[3rem]'>0.5%</span>
                    <img src={Crt2} alt="" className='w-[2rem] h-[2rem]'/>
                </span>
                <div className='text-[1rem] text-center text-[#495057] font-extralight'>Penghematan <br/> Karbon</div>
            </div>
        </div>
        <div className="w-[80%] h-auto flex flex-col items-center justify-center">
            <div className="w-[80%] h-auto flex flex-col items-center gap-6">
            <span className='text-[2.5rem] font-semibold'>Kenali Sertifikasi Industri Hijau</span>
            <div className="flex w-full flex-col gap-6">
                <div className="flex items-center gap-2">
                    <img src={Lt1} alt="" className='w-[4rem] h-[4rem]' />
                    <span className='text-[1.5rem] font-extralight'>Standar dalam mewujudkan Industri Hijau yang ditetapkan oleh Kementerian Perindustrian. </span>
                </div>
                <div className="flex items-center gap-2">
                    <img src={Lt2} alt="" className='w-[4rem] h-[4rem]' />
                    <span className='text-[1.5rem] font-extralight'>Pedoman untuk Perusahaan dalam menerapkan Industri Hijau yang bersifat sukarela. </span>
                </div>
                <div className="flex items-start gap-2">
                    <img src={Lt3} alt="" className='w-[4rem] h-[4rem]' />
                    <span className='text-[1.5rem] font-extralight'>Berkoordinasi dengan Kementerian, Lembaga Pemerintah lain, Asosiasi Industri, Perusahaan Industri & Lembaga terkait untuk menjamin standar sertifikasi sesuai untuk masing-masing bidang usaha. </span>
                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default IndustriesGreen