import React from "react";
import Image from "next/image";
import images from "@/utils/images";

const Gallery = () => {
  return (
    <div className="flex justify-center relative pt-20 lg:pt-[1rem] md:pt-[3.7rem] sm:pt-[3.7rem] my-20 z-10 ">
      <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center">
        <h1 className="uppercase tracking-widest text-center mb-10 font-bold ">
          <span className="text-center tracking-widest pb-7 text-xl md:text-3xl lg:text-4xl">Gallery</span>
        </h1>
        <div className="lg:columns-3 md:columns-3 sm:columns-2 columns:1 gap-4 mx-auto p-2 md:p-3 lg:p-5 ">
          {images.map((imageUrl, index) => (
            <div key={index} className="break-inside-avoid ">
              <Image
                src={imageUrl}
                alt={`Image ${index}`}
                layout="intrinsic"
                className=" mb-4 rounded-xl "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
