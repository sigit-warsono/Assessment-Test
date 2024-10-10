import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Faq = () => {
  const dataUmum = [
    {
      id: 1,
      title: "Berapa lama proses sertifikasi akan berlangsung?",
      description:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.",
    },
    {
      id: 2,
      title: "Who should use the app?",
      description:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.",
    },
    {
      id: 3,
      title: "Who should use the app?",
      description:
        "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.",
    },
  ];

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const [select, setSelect] = useState("umum");
  const [selectDrop, setSelectDrop] = useState(1);
  return (
    <div className="flex flex-col gap-8 pt-28 justify-center items-center">
      <span className="text-[2.5rem] font-semibold text-center">
        FAQ Sertifikasi
      </span>
      <div className="p-4 bg-[#F5F8FA] rounded-lg">
        <span
          className={`${
            select === "umum"
              ? "bg-[#17A39D] rounded-md text-white"
              : "bg-[#F5F8FA] cursor-pointer"
          } p-3`}
          onClick={() => setSelect("umum")}
        >
          Umum
        </span>
        <span
          className={`${
            select === "prosedur"
              ? "bg-[#17A39D] rounded-md text-white"
              : "bg-[#F5F8FA] cursor-pointer"
          } p-3`}
          onClick={() => setSelect("prosedur")}
        >
          Prosedur
        </span>
        <span
          className={`${
            select === "kebijakan"
              ? "bg-[#17A39D] rounded-md text-white"
              : "bg-[#F5F8FA] cursor-pointer"
          } p-3`}
          onClick={() => setSelect("kebijakan")}
        >
          Kebijakan
        </span>
      </div>
      <div className="w-[80%] flex flex-col gap-1">
        {dataUmum.map((data, index) => (
          <div
            className="flex flex-col gap-2 rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] p-3"
            key={index}
          >
            <div className="flex justify-between items-center">
              <span className="text-[1.3rem] font-semibold">{data.title}</span>
              {data.id === selectDrop ? (
                <FiX
                  className="text-[#17A39D] cursor-pointer"
                  onClick={() => setSelectDrop(0)}
                />
              ) : (
                <FiPlus
                  className="text-[#17A39D] cursor-pointer"
                  onClick={() => setSelectDrop(data.id)}
                />
              )}
            </div>
            {selectDrop === data.id && (
              <div className="w-full font-extralight">{data.description}</div>
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center flex-col gap-4 absolute mt-[25rem] z-50">
        <span className="font-semibold text-[2rem]">
          Sudah Siap Menjadi Bagian dari Industri Hijau?
        </span>
        <button className="p-2 rounded-md bg-[#17A39D] text-white px-4">
          Ambil Sertifikasi
        </button>
      </div>
      <div style={{ height: "30vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Faq;
