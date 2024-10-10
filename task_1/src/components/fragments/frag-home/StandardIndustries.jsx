import React from 'react'
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
const StandardIndustries = () => {
    const data=[
        {
            id: 1,
            title: "Industri Billet",
            subTitle : "12345・Industri Besi dan Baja Dasar",
            description : "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        },
        {
            id: 2,
            title: "Industri Bluem",
            subTitle : "Industri Besi dan Baja Dasar",
            description : "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        },
        {
            id: 3,
            title: "Industri Baja Ringan",
            subTitle : "Industri Besi dan Baja Dasar",
            description : "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        },
        {
            id: 4,
            title: "Industri Air Mineral",
            subTitle : "12345・Industri Makanan & Minuman Kemasan",
            description : "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        },
        {
            id: 5,
            title: "Industri Makanan Ringan",
            subTitle : "12345・Industri Makanan & Minuman Kemasan",
            description : "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        },
        {
            id: 6,
            title: "Industri Baja Ringan",
            subTitle : "Industri Besi dan Baja Dasar",
            description : "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        },
        {
            id: 7,
            title: "Industri Billet",
            subTitle : "12345・Industri Besi dan Baja Dasar",
            description : "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        },
        {
            id: 8,
            title: "Industri Bluem",
            subTitle : "Industri Besi dan Baja Dasar",
            description : "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        },
        {
            id: 9,
            title: "Industri Baja Ringan",
            subTitle : "Industri Besi dan Baja Dasar",
            description : "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
        }
    ]
  return (
    <div className='flex flex-col gap-5 bg-[#F5F8FA] py-6'>
        <span className='text-[2.5rem] font-semibold text-center'>Standard Industri Hijau</span>
        <div className="grid grid-cols-3 gap-5 px-20">
            {data.map((data, index)=>(
                <div className="bg-[#FFFFFF] rounded-md p-4 flex flex-col gap-4 justify-start items-start" key={index}>
                    <div className="flex flex-col">
                    <span className='text-[0.9rem] text-[#495057]'>{data.subTitle}</span>
                    <span className='font-semibold text-[1.4rem]'>{data.title}</span>
                    </div>
                    <div className="text-[1rem]">{data.description}</div>
                    <div className="w-full flex gap-2">
                        <button className='p-2 rounded-md border-[#17A39D] text-[#17A39D] border'>Ajukan Sertifikasi</button>
                        <button className='p-2 rounded-md bg-[#17A39D] text-white'>Baca Ketentuan</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="w-full flex justify-center items-center gap-2">
            <div className="w-[4rem] h-[4rem] rounded-full bg-[#17A39D] flex justify-center items-center"><GrFormPreviousLink className='text-white text-[1.8rem]'/></div>
            <div className="w-[4rem] h-[4rem] rounded-full bg-[#17A39D] flex justify-center items-center"><GrFormNextLink className='text-white text-[1.8rem]'/></div>
        </div>
    </div>
  )
}

export default StandardIndustries