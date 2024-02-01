import React from "react";
import Image from "next/image";
import CTAButton from "../clientComponents/CTAButton";
import { BG_IMG_WHITE } from "@/Constant/indexFile";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="flex-col flexCenter overflow-hidden py-24"
        style={BG_IMG_WHITE}
      >
        <div className="max-container padding-container relative w-full flex flex-col lg:flex-row lg:gap-5 lg:justify-end">
          <aside
            className="  justify-between flexCenter w-full flex flex-1 
        gap-5 p-5 lg:px-8 flex-col lg:mx-10 lg:my-20 my-5  
        lg:grid lg:grid-cols-2  text-white "
          >
            <div className="flex item-center text-center justify-center regular-32 tracking-widest lg:regular-35 px-10 bg-[#236868] rounded-3xl lg:h-full">
              <h1 className="flex m-auto">About US</h1>
            </div>

            <div className="  bg-[#153F58] rounded-3xl px-5 py-5 w-full">
              <h4 className=" lg:regular-24 regular-20 text-center leading-2 ">
                Mission
              </h4>

              <p className="leading-8 text-justify">
                At VisitPhilippineGem, we are on a mission to showcase the
                beauty and wonders of the Philippines. Our platform is your
                digital passport to immersive experiences, travel guides, and
                cultural insights.
              </p>
            </div>

            <div className="  bg-[#153F58] rounded-3xl px-5 py-5 w-full">
              <h4 className="lg:regular-24 regular-20 text-center leading-8">
                Why Choose US?
              </h4>
              <ul className="list-disc list-inside leading-10 text-justify">
                <li>Expertly curated travel guides</li>
                <li>Authentic local experiences</li>
                <li>Unbiased recommendations for your perfect trip</li>
              </ul>
            </div>
            <div className="mx-auto z-20">
              <CTAButton type="button" title="Learn More" w={60} />
            </div>
          </aside>
          <div className="flex flex-1 justify-center ">
            <Image
              src="/louie-martinez-PriGaAJYxq4-unsplash.jpg"
              alt="beach"
              width={670}
              height={500}
              className="rounded-5xl my-10 "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
