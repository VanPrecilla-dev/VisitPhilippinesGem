import React from "react";
import CTAButton from "../clientComponents/CTAButton";
import Image from "next/image";

import { IMG_SRC_HOME, BG_IMG_ISLAND_BEACH } from "@/constant";

const Home = () => {


  return (
    <>
      <div style={BG_IMG_ISLAND_BEACH} className="">
        <section
          className="max-container padding-container flex flex-col
     gap-5 py-5 pb-32 md:gap-20 lg:pt-35 lg:px-5 xl:flex-col"
        >
          <div className="bg-[#364C40] bg-opacity-50  rounded-md md:max-w-6xl mx-auto mt-10 mb-0">
            <h1 className="lg:text-6xl text-4xl text-white text-center my-10 tracking-widest px-auto">
              Welcome to Your Gateway to Philippine Wonders!
            </h1>
            <p className="lg:regular-24 regular-20 text-white  tracking-widest mx-20 text-justify ">
              Discover the hidden gems of the Philippines – a tropical paradise
              waiting to be explored. From pristine beaches to vibrant
              festivals, your adventure begins here.
            </p>
          </div>
          <div className="flex flex-col flexCenter w-full relative md:max-w-6xl mx-auto sm:flex-row">
            <CTAButton type="button" title="Explore Now" w={96} />
          </div>
          <div className=" overflow-hidden">
            <div className="w-full  flex flex-row gap-8  mx-auto justify-between lg:animate-none animate-infinite-scroll  ">
              {IMG_SRC_HOME.map((item) => (
                <Image
                  src={item.src}
                  width={300}
                  height={300}
                  key={item.key}
                  alt={item.label}
                  className="rounded-3xl duration-500 lg:hover:scale-125"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
