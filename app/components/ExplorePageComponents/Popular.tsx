import React from 'react'
import Image from 'next/image'
import CTAButton from '../../clientComponents/CTAButton'
import { IMG_SRC_EXPLORE_MOST } from '@/constant'

const Popular = () => {
  return (
    <>
       <div className="max-container padding-container relative bg-white rounded-5xl w-full flex flex-1 flex-col gap-10 p-20 lg:px-8 lg:mx-10 lg:mt-0 my-5 ">
            <h2 className="flex item-center text-center justify-center regular-32 tracking-widest lg:mb-0 lg:regular-64 lg:tracking-[15px] text-[#236868] lg:regular-35 px-10">
              Most Popular Destinations
            </h2>

            <div className=" flex felx-1 flex-col lg:grid lg:grid-cols-3 lg:max-w-4xl mx-auto mt-5 lg:gap-5 gap-10 ">
              {IMG_SRC_EXPLORE_MOST.map((item, key) => (
                <figure
                  key={key}
                  className="flex  flex-initial h-64 flex-col p-0 justify-start items-center text-center m-0 hover:scale-125"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    key={item.key}
                    width={300}
                    height={300}
                    className="flex-initial h-[90%] rounded-3xl "
                  />
                  <figcaption className="flex text-justify uppercase regular-20 text-[#236868]  flex-initial h-[10%]">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="flex flex-1 w-ful justify-center">
              <CTAButton type="button" title="See More" w={96} />
            </div>
          </div>
    </>
  )
}

export default Popular