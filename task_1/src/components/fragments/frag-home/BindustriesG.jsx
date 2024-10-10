import React from 'react'
import Brt1 from "../../../assets/image/brt1.svg"
import Brt2 from "../../../assets/image/brt2.svg"
import Brt3 from "../../../assets/image/brt3.svg"

const BindustriesG = () => {
  return (
    <div className='w-full px-20 flex flex-col items-center gap-8'>
        <span className='text-[2.5rem] font-semibold text-center'>Manfaat Sertifikasi Industri Hijau <br/>
        bagi Perusahaan</span>
        <div className="grid grid-cols-3 gap-4 w-full">
            <div className="h-[20rem] flex flex-col gap-2 justify-start items-center">
                <img src={Brt1} alt="" className='w-[6rem] h-[6rem]' />
                <span className='text-[1.2rem] font-semibold'>Peningkatan Citra Perusahaan</span>
                <span className='text-[1rem] font-extralight text-center'> Citra perusahaan akan bertambah di mata konsumen, mitra bisnis, dan masyarakat karena menunjukan komitmen perusahaan yang bertanggung jawab lingkungan.</span>
            </div>
            <div className="h-[20rem] flex flex-col gap-2 justify-start items-center">
                <img src={Brt2} alt="" className='w-[6rem] h-[6rem]' />
                <span className='text-[1.2rem] font-semibold'>Unggul dari Pesaing</span>
                <span className='text-[1rem] font-extralight text-center'> Perusahaan mendapat keunggulan lebih dari pesaing karena konsumen mulai semakin peduli terhadap lingkungan.</span>
            </div>
            <div className="h-[20rem] flex flex-col gap-2 justify-start items-center">
                <img src={Brt3} alt="" className='w-[6rem] h-[6rem]' />
                <span className='text-[1.2rem] font-semibold'>Efisiensi Energi & Biaya</span>
                <span className='text-[1rem] font-extralight text-center'> Mengurangi konsumsi sumber daya alam yang berlebih. Selain bermanfaat bagi lingkungan, hal ini dapat mengurangi biaya operasional jangka panjang perusahaan.</span>
            </div>
        </div>
    </div>
  )
}

export default BindustriesG