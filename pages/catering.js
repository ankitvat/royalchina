/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import royalchina from "../assets/royalchina.png";
import urn from "../assets/urn.png";
import rightLong from "../assets/right-long.png";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
import c8 from "../assets/c8.png";

const images = [c1, c2, c3, c4, c5, c6, c7, c8];

import MobileContext from "@/utils/MobileContext";
export default function Catering() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const { isMobile } = React.useContext(MobileContext);

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index to show the next image
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change images every 2 seconds

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout>
      <div className="catering-layout overflow-hidden ">
        <div className=" mt-16 catering-hero-section-main">
          {isMobile ? (
            <h1 className="text-lg  uppercase px-14 hero-text text-center mt-60 ">
              Bring Royal China's gourmet cuisine to your
              <br /> next outdoor event with our expert catering
              <br /> services.
            </h1>
          ) : (
            <h1 className="text-2xl  uppercase px-40 hero-text text-center mt-60 ">
              Bring Royal China's gourmet cuisine to your
              <br /> next outdoor event with our expert catering
              <br /> services.
            </h1>
          )}
        </div>
        <div className="catering-overlay" />
        <Image
          src={royalchina}
          alt="exp-bg"
          className="catering-backgroundImage"
          priority={true}
        />
      </div>

      {isMobile ? (
        <div className="w-full rest-section-1 overflow-hidden -mt-40 ">
          <div className="w-full flex flex-col px-4">
            <h3 className="text-base uppercase inner-text text-center -ml-20">
              drop your number
            </h3>

            <h3 className="text-sm text-gray-300 placeholder-text mt-10 ">
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
            <div className="flex flex-col w-full justify-start items-center mt-2">
              <div className="flex flex-col items-start justify-center w-full">
                <h3 className="text-sm text-gray-300 placeholder-text mt-10 ">
                  Phone
                </h3>
                <div className="flex flex-col w-full mt-2 h-10 items-start justify-start px-2 py-2 inner-inbox bgc-gray">
                  <input
                    type="tel"
                    aria-label="phone"
                    value={phone}
                    className="w-full input-box"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-full">
                <h3 className="text-sm text-gray-300 placeholder-text mt-10 ">
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
            </div>
            <div className="flex flex-row items-center justify-center mt-10 pl-4 pr-8 py-2 inner-inbox">
              <h3 className="text-base uppercase inner-box-text golden">
                send my message
              </h3>
            </div>
          </div>

          <div className="w-full my-40  flex flex-col items-center urn-section">
            <h3 className="text-sm uppercase medium-text text-white text-center px-20 -ml-20">
              Make your event a gastronomic affair with our top-notch catering
              services. We'll turn your vision into a delectable reality.
            </h3>
            <Image
              src={urn}
              alt="urn"
              priority={true}
              className="urn-mobile mt-24"
            />
          </div>
          <div className="w-full flex flex-row items-center justify-start px-4 mb-10 -mt-20">
            <div className="btn-3 w-full py-2  ">
              <h3 className=" text-sm uppercase demo-text">Book a table now</h3>
              <Image src={rightLong} alt="right" priority className="ml-10" />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full rest-section-1 overflow-hidden -mt-60 ">
          <div className="w-9/12  inbox-section flex flex-col items-start justify-start px-16 pt-10 pb-20">
            <h3 className="text-3xl uppercase inner-text">drop your number</h3>

            <h3 className="text-sm text-gray-300 placeholder-text mt-10 ">
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
            <div className="flex flex-row w-full justify-between items-center mt-2">
              <div className="flex flex-col items-start justify-center w-5/12">
                <h3 className="text-sm text-gray-300 placeholder-text mt-10 ">
                  Phone
                </h3>
                <div className="flex flex-col w-full mt-2 h-10 items-start justify-start px-2 py-2 inner-inbox bgc-gray">
                  <input
                    type="tel"
                    aria-label="phone"
                    value={phone}
                    className="w-full input-box"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-center w-5/12">
                <h3 className="text-sm text-gray-300 placeholder-text mt-10 ">
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
            </div>
            <div className="flex flex-row items-center justify-center mt-10 pl-4 pr-8 py-2 inner-inbox">
              <h3 className="text-base uppercase inner-box-text golden">
                send my message
              </h3>
            </div>
          </div>
          <div className="w-9/12  mt-20 images-section">
            <div style={{ position: "relative" }}>
              {images.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: index === currentImageIndex ? "block" : "none",
                    transition: "opacity 1s ease-in-out",
                    opacity: index === currentImageIndex ? 1 : 0,
                  }}
                >
                  <Image src={item} alt="c-images" className="single-images" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-11/12 my-40  flex flex-row items-end justify-between urn-section">
            <h3 className="text-xl uppercase medium-text text-white px-24 ">
              Make your event a gastronomic
              <br /> affair with our top-notch catering
              <br /> services. We'll turn your vision into
              <br /> a delectable reality.
            </h3>
            <Image src={urn} alt="urn" priority={true} className="urn-image" />
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
        </div>
      )}
    </Layout>
  );
}
