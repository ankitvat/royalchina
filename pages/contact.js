/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../assets/images2.png";
import bg2 from "../assets/bg2.png";
import contactbg from "../assets/contactbg.png";
import urn from "../assets/urn.png";
import MobileContext from "@/utils/MobileContext";
export default function Contact() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const { isMobile } = React.useContext(MobileContext);
  return (
    <Layout>
      <div className=" layout-main-1 overflow-hidden">
        <div className="mt-16 hero-section-main">
          <div className="w-9/12 inbox-section flex flex-row items-start justify-start mt-40">
            <div className="w-5/12 h-full px-16 py-10 pt-20 flex flex-col justify-start">
              <h3 className=" text-3xl medium-text-1">Get in touch with us.</h3>
              <div className="flex flex-col items-start justify-start px-4 py-2 pr-12   inner-inbox mt-4">
                <h3 className="text-xs text-white inner-box-text">
                  Hi, Need help? Use the form below or email
                  <br /> me at hello@california_golfclub.org.
                </h3>
              </div>
              <h3 className="text-sm text-gray-300 placeholder-text mt-4 ">
                Name
              </h3>
              <div className="flex flex-col w-full mt-2 h-10 items-start justify-start px-2 py-2 inner-inbox bgc-gray">
                <input
                  type="text"
                  aria-label="name"
                  value={name}
                  className="w-full input-box"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>

              <h3 className="text-sm text-gray-300 placeholder-text mt-4">
                E-mail
              </h3>
              <div className="flex flex-col w-full mt-2 h-10 items-start justify-start px-2 py-2 inner-inbox bgc-gray">
                <input
                  type="text"
                  aria-label="email"
                  value={email}
                  className="w-full input-box"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <h3 className="text-sm text-gray-300 placeholder-text mt-4">
                Message
              </h3>
              <div className="flex flex-col w-full mt-2 h-28 items-start justify-start px-2 py-2 inner-inbox bgc-gray">
                <input
                  type="text"
                  aria-label="message"
                  value={message}
                  className="w-full input-box"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-row items-center justify-center mt-6 pl-2 pr-6 py-2 inner-inbox">
                <h3 className="text-base uppercase inner-box-text golden">
                  send my message
                </h3>
              </div>
            </div>
            <div className="w-7/12 h-full px-2 overflow-hidden">
              <div className="marquee-container flex flex-row w-full">
                <div className="slider-content flex flex-row w-full">
                  <Image src={images} alt="images" className="imagesGallery" />
                  <Image
                    src={bg2}
                    alt="images"
                    className="ml-1 imagesGallery"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-1" />
        <Image
          src={contactbg}
          alt="exp-bg"
          className="backgroundImage-1"
          priority={true}
        />
      </div>
      <section className="w-full h-96 bg-red-black mt-10 items-center flex flex-col ">
        <div className="w-11/12 my-40  flex flex-row items-end justify-between urn-section">
          <h3 className="text-xl uppercase medium-text text-white px-24 ">
            Make your event a gastronomic
            <br /> affair with our top-notch catering
            <br /> services. We'll turn your vision into
            <br /> a delectable reality.
          </h3>
          <Image src={urn} alt="urn" priority={true} className="urn-image" />
        </div>
      </section>
    </Layout>
  );
}
