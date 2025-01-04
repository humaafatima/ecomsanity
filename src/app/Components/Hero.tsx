"use client"
import Image from "next/image";
import lamp from "@/app/assets/lamp.png";
import sofa from "@/app/assets/sofa.png";

export default function Hero() {
  return (
    <div className="flex flex-wrap items-center w-full h-auto bg-[rgba(242,240,255,1)] px-4 md:px-16 py-8">
     
      <div className="flex justify-center mb-8 md:mb-0 md:w-1/4">
        <Image src={lamp} alt="Lamp" width={387} height={387} className="w-[200px] md:w-[300px] lg:w-[387px] h-auto"/>
      </div>

      <div className="flex flex-col items-center md:items-start justify-center md:w-2/4 px-4 md:px-0 text-center md:text-left">
        <p className="font-Lato text-sm md:text-lg text-[rgba(251,46,134,1)] mb-2">
          Best Furniture For Your Castle...
        </p>
        <h1 className="font-Josephin text-3xl md:text-5xl font-bold text-black leading-snug">
          New Furniture Collection
          <br />
          Trends in 2020
        </h1>
        <p className="font-satoshi text-sm md:text-lg text-[rgba(138,143,185,1)] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <button
          onClick={() => alert("Button clicked!")}
          className="w-[120px] md:w-[157px] h-[40px] md:h-[45px] mt-6 text-white font-Lato bg-[rgba(251,46,134,1)]"
        >
          Shop Now
        </button>
      </div>

     
      <div className="flex justify-center md:w-1/4 mt-8 md:mt-0">
        <Image src={sofa} alt="Pink Sofa" width={706} height={689} className="w-[250px] md:w-[400px] lg:w-[706px] h-auto rounded"/>
      </div>
    </div>
  );
}
