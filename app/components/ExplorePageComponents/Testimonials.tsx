import React from 'react'
import Image from 'next/image'
import CTAButton from '../../clientComponents/CTAButton'
import { IMG_SRC_EXPLORE_TESTIMONIALS } from '@/Constant/indexFile'

const Testimonials = () => {
  return (
    <>
      <div className="max-container padding-container relative w-full flex flex-1 flex-col gap-10 p-10 lg:pt-20 lg:px-8 lg:mx-10 lg:mt-0 my-5 ">
            <h3 className="flex item-center text-center justify-center regular-32 tracking-widest lg:mb-16 lg:regular-64 lg:tracking-[15px] text-white lg:regular-35 px-10">
              Testimonials
            </h3>

            <div className="flex flex-1 flex-col gap-2 lg:gap-16  justify-between lg:flex-row ">
              {IMG_SRC_EXPLORE_TESTIMONIALS.map((item, key) => (
                <figure
                  key={key}
                  className="flex  flex-initial h-96 flex-col lg:mx-6 px-5 w-full justify-center items-center text-center bg-[#153F58] rounded-5xl hover:scale-125"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    key={item.key}
                    width={150}
                    height={150}
                    className="flex-initial h-[50%] rounded-3xl"
                  />
                  <figcaption
                    className="flex text-center regular-16
                   text-white flex-initial h-[30%]"
                  >
                    {item.caption}
                    <br />
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="flex flex-1 w-ful justify-center">
              <CTAButton type="button" title="Read More" w={96} />
            </div>
          </div>
    </>
  )
}

export default Testimonials