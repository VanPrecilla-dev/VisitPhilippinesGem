import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { BG_IMG_WHITE } from "@/Constant/indexFile";
import Footer from "./Footer";
import CTAButton from "../clientComponents/CTAButton";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="flex-col flexCenter overflow-hidden lg:py-24 py-10"
        style={BG_IMG_WHITE}
      >
        <section className="max-container padding-container relative w-full flex flex-col lg:gap-5 justify-center p-10">
          <h1 className="flex item-center text-center justify-center regular-32 tracking-widest lg:mb-16 lg:regular-64 lg:tracking-[15px] text-[#153F58] lg:regular-35 px-10">
            Get in Touch with US
          </h1>

          <div className="flex flex-1 flex-col gap-2 lg:gap-5 justify-between lg:mx-16 lg:flex-row">
            <aside className="flex flex-initial lg:w-[50%] w-full gap-5 flex-col px-5 lg:m-5 regular-16 lg:regular-24 text-justify  text-wrap text-[#153F58]">
              <p>
                Have questions, suggestions, or need assistance planning your
                trip?
                <br />
                <br />
                Reach out to us! Our team is here to ensure your
                VisitPhilippineGem.com experience is seamless and enjoyable.
              </p>

              <div className="flex flex-col gap-5">
                <h6>
                  <strong>Our Contacts:</strong>
                </h6>

                <div className="flex flex-col lg:flex-row gap-3 items-center text-wrap break-words regular-16 lg:regular-24  ">
                  <span>
                    <MdEmail
                      className="w-10 "
                      style={{
                        width: "40px",
                        height: "40px",
                        color: "#153F58",
                      }}
                    />
                  </span>
                  <label>
                    <em>Email Address:</em>
                  </label>
                  <p>info@visitphilippinegem.com</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-3 items-center ">
                  <span>
                    <FaPhoneSquareAlt
                      className="w-10 "
                      style={{
                        width: "40px",
                        height: "40px",
                        color: "#153F58",
                      }}
                    />
                  </span>
                  <label>
                    <em>Phone:</em>
                  </label>
                  <p>+123-456-7890</p>
                </div>
              </div>
            </aside>
            <form className="flex flex-initial gap-5 lg:w-[50%] flex-col lg:m-5 text-wrap rounded-5xl p-5 border-2 border-[#153F58]">
              <input
                type="email"
                name="email"
                placeholder="Type your email here. ex: juan@gmail.com"
                className="regular-16 lg:regular-24 text-wrap p-2 w-full text-start shadow appearance-none border rounded-2xl"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject of your Email ex: Inquiry"
                className=" regular-16 lg:regular-24 text-wrap p-2 w-full text-start shadow appearance-none border rounded-2xl"
              />
              <textarea
                placeholder="Enter your message here"
                rows={5}
                cols={10}
                className=" regular-16 lg:regular-24 text-wrap p-2 w-full text-start shadow appearance-none border rounded-2xl"
              />
              <CTAButton type="button" title="Send Message" w={60} />
              {/*  CTAButton should have type="submit" but since this is only placeholder, to avoid reloading the page, i just set it to button type */}
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
