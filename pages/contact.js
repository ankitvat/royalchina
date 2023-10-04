/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import images from "../assets/images2.png";
import bg2 from "../assets/bg2.png";
import contactbg from "../assets/contactbg.png";
import rightLong from "../assets/right-long.png";
import urn from "../assets/urn.png";
import MobileContext from "@/utils/MobileContext";
export default function Contact() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const { isMobile } = React.useContext(MobileContext);
  return (
    <>
      {isMobile ? (
        <Layout>
          <div className="layout-main-1 overflow-hidden">
            <div className="mt-16 hero-section-main flex flex-col items-center">
              <div className="mt-48 w-11/12 flex flex-col items-center justify-center justify-items-center">
                <h3 className="text-xl inner-text text-center -ml-12">
                  Get in touch with us.
                </h3>

                <div className="flex flex-col items-start justify-start px-4 py-2 pr-12   inner-inbox mt-10">
                  <h3 className="text-xs text-white inner-box-text">
                    Hi, Need help? Use the form below or email
                    <br /> me at hello@california_golfclub.org.
                  </h3>
                </div>
                <div className="flex flex-col w-full items-start">
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
                </div>
                <div className="w-full flex flex-col items-start">
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
                </div>
                <div className="flex flex-col w-full items-start">
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
                </div>
                <div className="w-full flex flex-col items-start mt-10">
                  <div className=" btn-3 px-4 py-2 pr-11 border-radius-4">
                    <h3 className=" text-sm medium-text-1 uppercase">
                      send my message
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-8/12 h-full px-2 overflow-hidden mt-10">
                <div className="marquee-container-1-m flex flex-row w-full">
                  <div className="slider-content-1-m flex flex-row w-full">
                    <Image
                      src={images}
                      alt="images"
                      className="imagesGallery"
                    />
                    <Image
                      src={bg2}
                      alt="images"
                      className="ml-1 imagesGallery"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-1" />
            <Image
              src={contactbg}
              alt="contact-bg"
              className="backgroundImage-1"
              priority={true}
            />
          </div>

          <section className="w-full mt-10  flex flex-col items-center justify-items-center px-5">
            <h3 className="text-sm uppercase mobile-text text-center -ml-12">
              Come experience the <br /> everlasting taste of
              <br />
              authenticity with a <br /> trendy twist of flavors <br /> and have
              an evocative <br />
              dining experience with a <br />
              Chinese flare in the air.
            </h3>
            <div className="w-full flex flex-row items-center justify-center mt-10">
              <Link
                href="https://royalchinadelhi.dotpe.in/store/1/delivery#618232"
                className="btn-3 w-10/12 mb-28  py-3 mt-10 cursor-pointer  "
              >
                <h3 className=" text-sm uppercase mobile-text">order online</h3>
                <Image src={rightLong} alt="right" priority className="ml-10" />
              </Link>
            </div>
          </section>
        </Layout>
      ) : (
        <Layout>
          <div className=" layout-main-1 overflow-hidden">
            <div className="mt-16 hero-section-main">
              <div className="w-9/12 inbox-section flex flex-row items-start justify-start mt-40">
                <div className="w-5/12 h-full px-16 py-10 pt-20 flex flex-col justify-start">
                  <h3 className=" text-3xl medium-text-1">
                    Get in touch with us.
                  </h3>
                  <div className="flex flex-col items-start justify-start px-4 py-2 pr-12   inner-inbox mt-10">
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

                  <div className="flex flex-row items-center justify-center mt-6 pl-2 pr-6 py-2 inner-inbox">
                    <h3 className="text-base uppercase inner-box-text golden">
                      send my message
                    </h3>
                  </div>
                </div>
                <div className="w-7/12 h-full px-2 overflow-hidden">
                  <div className="marquee-container-1 flex flex-row w-full">
                    <div className="slider-content-1 flex flex-row w-full">
                      <Image
                        src={images}
                        alt="images"
                        className="imagesGallery"
                      />
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
          <section className="w-full  bg-red-black mt-10 items-center flex flex-col ">
            <div className="w-11/12 my-40  flex flex-row items-end justify-between urn-section-1">
              <h3 className="text-2xl uppercase medium-text px-24 ">
                Our team of dedicated staff is passionate
                <br /> about delivering an exceptional dining
                <br /> experience to each and every one of our
                <br /> valued guests. From the moment you step
                <br /> into our restaurant, you'll be greeted with <br /> warm
                hospitality and a vibrant ambiance that
                <br /> reflects the spirit of Cantonese cuisine.
              </h3>
              <Image
                src={urn}
                alt="urn"
                priority={true}
                className="urn-image"
              />
            </div>
            <div className="w-10/12 flex flex-row items-center justify-start">
              <Link
                href="https://royalchinadelhi.dotpe.in/store/1/delivery#618232"
                className="btn-3 w-80 mb-40 ml-14 py-2  pl-10 px-5 cursor-pointer "
              >
                <h3 className=" text-base uppercase demo-text">order online</h3>
                <Image src={rightLong} alt="right" priority className="ml-10" />
              </Link>
            </div>
          </section>
        </Layout>
      )}
    </>
  );
}
