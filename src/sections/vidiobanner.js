import React from "react";
import videoBanner from "../images/5950368-hd_1920_1080_25fps.mp4"; // Replace with the actual path to your video
import { Link } from "react-router-dom";
// 6658171-uhd_4096_2160_25fps
// 4940682-hd_1920_1080_24fps
export default function VidioImage() {
  return (
   <div className="pt-16" data-aos="zoom-out" data-aos-once="false">
     <div className="relative md:h-screen md:px-10 px-5 py-0 md:pt-10 ">
      <video
        src={videoBanner}
        autoPlay
        loop
        muted
        className="w-full object-cover h-full rounded-xl inset-0 filter brightness-90"
      />

      <div className="absolute md:top-12 top-5 left-0 right-0 z-20 md:pt-36 flex flex-col justify-center items-center text-white md:text-xl text-md md:p-4">
        <p className="font-lora font-bold md:text-7xl text-xl md:px-24 px-10 text-center text-white">
          Gardez le contrôle sur vos repas avec <span className=" text-verte font-serif md:text-6xl text-3xl">NutriShare</span>{" "}
        </p>
        <div className="flex md:flex-row flex-col justify-center items-center md:space-x-10 md:pt-10 pt-2 md:space-y-0 space-y-2">
          <Link to='/under'>
          <button className="md:w-96 md:py-3 text-sm py-1 md:px-0 px-6 border-2 font-serif bg-verte border-solid border-verte text-graylight rounded-full">
          Analyser Mes Repas{" "} 
          </button>
          </Link>
      <Link to='/under'>
      <button className="md:w-96 md:py-3 py-1 text-sm md:px-0 px-6 bg-white font-serif text-gray rounded-full">
                       Découvrir NutriShare{" "}

          </button>
      </Link>
          
         
        </div>
      </div>
    </div>
   </div>
  );
}
