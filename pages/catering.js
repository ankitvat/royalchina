/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";
import royalchina from "../assets/royalchina.png";
import urn from "../assets/urn.png";
import rightLong from "../assets/right-long.png";
export default function Catering() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  return (
    <Layout>
      <div className="layout-main overflow-hidden">
        <div className=" mt-16 hero-section-main">
          <h1 className="text-2xl  uppercase px-40 hero-text text-center mt-60 ">
            Bring Royal China's gourmet cuisine to your
            <br /> next outdoor event with our expert catering
            <br /> services.
          </h1>
          <div className="w-9/12  mt-32 inbox-section flex flex-col items-start justify-start px-16 pt-10 pb-20">
            <h3 className="text-3xl uppercase inner-text">drop your number</h3>
            <div className="flex flex-col items-start justify-start px-2 py-2 pr-12   inner-inbox mt-4">
              <h3 className="text-xs text-white inner-box-text">
                Hi, Want us be the part of your event?
                <br /> Drop your Number or Mail ID and our team will get in
                touch.
              </h3>
            </div>
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
                    type="number"
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
        </div>
        <div className="overlay" />
        <Image
          src={royalchina}
          alt="exp-bg"
          className="backgroundImage"
          priority
        />
      </div>
      <div className="block h-40 w-full bg-black"></div>
      <div className="block h-40 w-full bg-black"></div>
      <div className="w-full rest-section-1 overflow-hidden ">
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
          <div className="btn-3 w-80 mb-40 ml-14 py-2  pl-10 px-5 ">
            <h3 className=" text-base uppercase demo-text">Book a table now</h3>
            <Image src={rightLong} alt="right" priority className="ml-10" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
