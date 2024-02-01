import React from "react";
import SubsButton from "../../clientComponents/SubsButton";
import { BG_IMG_ISLAND_BEACH } from "@/Constant/indexFile";

const Subscribe = () => {
  return (
    <>
      <div
        style={BG_IMG_ISLAND_BEACH}
        className="max-container padding-container relative bg-white rounded-5xl w-full flex flex-1 flex-col gap-10 p-10 lg:px-8 lg:mx-10 lg:mt-0 my-5"
      >
        <div className=" flex flex-col lg:flex-row justify-center p-5 lg:gap-1 gap-5 rounded-5xl  border-2 border-[#153F58]">
          <div className="flex flex-initial w-full lg:w-[40%] item-center p-2  px-10  bg-white rounded-3xl opacity-80">
            <p className=" text-center justify-center tracking-widest regular-16 lg:tracking-[5px] text-[#236868] m-auto ">
              Subscribe for more to receive exclusive updates, travel tips, and
              exciting content about the Philippines.
            </p>
          </div>

          <form className="flex flex-initial w-full lg:w-[50%] flex-col item-center text-center justify-center  px-10  lg:justify-between tracking-widest  lg:regular-16 lg:tracking-[5px] text-[#236868]">
            <input
              type="email"
              placeholder="Type your email here. ex: juan@gmail.com"
              className="regular-20 p-5 w-full text-center shadow appearance-none border rounded-2xl"
            />{" "}
            <SubsButton />
          </form>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
