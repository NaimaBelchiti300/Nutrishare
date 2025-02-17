import React from "react";
import videoBanner from "../images/5950368-hd_1920_1080_25fps.mp4"; // Replace with the actual path to your video
import { Link } from "react-router-dom";
// 6658171-uhd_4096_2160_25fps
// 4940682-hd_1920_1080_24fps
export default function VidioImage() {
  return (
   <div className="pt-16">
     <div className="relative h-screen px-10 py-0 pt-10 ">
      <video
        src={videoBanner}
        autoPlay
        loop
        muted
        className="w-full object-cover h-full rounded-xl inset-0 filter brightness-90"
      />

      <div className="absolute top-12 left-0 right-0 z-20 pt-36 flex flex-col justify-center items-center text-white text-xl p-4">
        <p className="font-lora font-bold text-7xl px-24 text-center text-white">
          Gardez le contrôle sur vos repas avec <span className=" text-verte font-serif text-6xl">NutriShare</span>{" "}
        </p>
        <div className="flex justify-center items-center space-x-10 pt-10">
          <Link to='/under'>
          <button className="w-96 py-3 border-2 font-serif bg-verte border-solid border-verte text-graylight rounded-full">
          Analyser Mes Repas{" "} 
          </button>
          </Link>
      <Link to='/under'>
      <button className="w-96 py-3 bg-white font-serif text-gray rounded-full">
                       Découvrir NutriShare{" "}

          </button>
      </Link>
          
         
        </div>
      </div>
    </div>
   </div>
  );
}
