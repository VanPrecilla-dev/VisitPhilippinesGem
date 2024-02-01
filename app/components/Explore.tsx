import React from "react";

import Discover from "./ExplorePageComponents/Discover";
import Popular from "./ExplorePageComponents/Popular";
import Testimonials from "./ExplorePageComponents/Testimonials";
import Subscribe from "./ExplorePageComponents/Subscribe";

const Explore = () => {
  return (
    <>
      <div className="bg-[#236868]">
        <section
          id="explore"
          className="flexCenter flex-col gap-2 overflow-hidden pt-20 "
        >
          <Discover />
          <Popular />
          <Testimonials />
          <Subscribe />
        </section>
      </div>
    </>
  );
};

export default Explore;
