import React from "react";
import { BeatLoader } from "react-spinners";
const Spinner = () => {
  return (
    <div className="w-full h-screen fixed flex justify-center items-center bg-modal-black top-0 z-20">
      <BeatLoader color="#2866de" size={12} />
    </div>
  );
};

export default Spinner;
