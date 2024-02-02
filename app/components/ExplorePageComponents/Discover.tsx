import React from 'react'
import Image from 'next/image'
import { IMG_SRC_EXPLORE_DISCOVER } from '@/Constant/indexFile'
import CTAButton from '../../clientComponents/CTAButton'

const Discover = () => {
  return (
    <>
      <div className="max-container padding-container relative w-full flex flex-1 flex-col gap-10 p-10 lg:pt-20 lg:px-8 lg:mx-10 lg:mt-20 my-5 ">
            <h1 className="flex item-center text-center justify-center regular-32 tracking-widest lg:mb-16 lg:regular-64 lg:tracking-[15px] text-white lg:regular-35 px-10">
              Discover the Philippines
            </h1>

            <div className="flex flex-1 flex-col gap-2 lg:gap-10 justify-between lg:flex-row">
              {IMG_SRC_EXPLORE_DISCOVER.map((item, key) => (
                <figure
                  key={key}
                  className="flex  flex-initial h-96 flex-col w-full justify-center items-center text-center hover:scale-110"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    key={item.key}
                    width={300}
                    height={300}
                    className="flex-initial h-[70%] rounded-3xl "
                  />
                  <figcaption className="flex text-justify regular-16 lg:regular-24 text-white flex-initial h-[30%]">
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

export default Discover