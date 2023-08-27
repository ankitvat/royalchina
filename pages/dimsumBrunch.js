import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import menubb from "../assets/menubb.png";

export default function DimsumBrunch() {
  const soup1 = React.useMemo(
    () => [
      {
        title: "Hot and Sour vegetarian / chicken",
      },
    ],
    []
  );

  const soup2 = React.useMemo(
    () => [
      {
        title: "Royal sweet corn vegetarian / chicken",
      },
    ],
    []
  );

  const des2 = React.useMemo(
    () => [
      {
        title: "honey Noodles with ice cream",
      },
      {
        title: "banana toffee fritters with ice cream",
      },
    ],
    []
  );

  const dimsums1 = React.useMemo(
    () => [
      {
        title: "Prawn har gow dumpling",
      },
      {
        title: "siu mai dumpling (chicken & shrimp)",
      },
      {
        title: "chicken & chive dumpling",
      },
      {
        title: "Chicken shanghai soup dumpling",
      },

      {
        title: "char siu bao (pork)",
      },
      {
        title: "roast pork puff",
      },
    ],
    []
  );

  const dimsums2 = React.useMemo(
    () => [
      {
        title: "prawn & chive dumpling",
      },
      {
        title: "seafood dumpling with chili oil",
      },
      {
        title: "chicken dumpling in chili oil",
      },
      {
        title: "sticky rice in banana leaf with chicken",
      },
      {
        title: "crispy duck spring roll",
      },
      {
        title: "sesame prawn toast",
      },
    ],
    []
  );

  const dimsums3 = React.useMemo(
    () => [
      {
        title: "crystal dumpling",
      },
      {
        title: "steamed vegetable dumpling with coriander",
      },
      {
        title: "steamed wonton soya chili",
      },
      {
        title: "corn water chestnut dumpling",
      },
      {
        title: "vegetable & chives dumpling",
      },
      {
        title: "spinach & cheese dumpling",
      },
    ],
    []
  );

  const dimsums4 = React.useMemo(
    () => [
      {
        title: "vegetable mushroom bao",
      },
      {
        title: "truffle water chestnut & sweet pea dumpling",
      },
      {
        title: "sticky rice in banana leaf",
      },
      {
        title: "classic soft corn curd",
      },
      {
        title: "sesame potato toast",
      },
      {
        title: "vegetable spring roll",
      },
    ],
    []
  );

  const mc1 = React.useMemo(
    () => [
      {
        title: "Chicken in chilli oil & spring onion",
      },
    ],
    []
  );

  const mc2 = React.useMemo(
    () => [
      {
        title: "mixed vegetable in black bean sauce",
      },
    ],
    []
  );

  const mc3 = React.useMemo(
    () => [
      {
        title: "Chicken in chilli oil & spring onion",
      },
      {
        title: "mixed vegetable in black bean sauce",
      },
    ],
    []
  );

  const mc4 = React.useMemo(
    () => [
      {
        title: "egg fried rice",
      },
      {
        title: "vegetable hong kong noodles",
      },
    ],
    []
  );
  const des = React.useMemo(
    () => [
      {
        title: "Honey Noodles with Ice Cream",
      },
      {
        title: "Toffee Banana with Ice Cream",
      },
    ],
    []
  );
  return (
    <Layout>
      <div className="layout overflow-hidden">
        <div className="menu-hero-section px-14">
          <Link
            className="w-full flex justify-center items-center nav-links my-3 py-2 mt-10"
            href="/"
          >
            <h3 className="nav-text text-sm uppercase">order online</h3>
          </Link>
          <Link
            className="w-full flex justify-center items-center nav-links my-3 py-2 mt-4"
            href="/menu"
          >
            <h3 className="nav-text text-sm uppercase">menu</h3>
          </Link>
        </div>
        <div className="overlay" />
        <Image
          src={menubb}
          alt="exp-bg"
          className="backgroundImage"
          priority={true}
        />
      </div>
      <div className="rest-section overflow-hidden -mt-20">
        <section className="w-full px-10 flex flex-col items-center">
          <h3 className="text-lg uppercase text-center header-menu">soup</h3>
          <div className="w-full  mt-10">
            {soup1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-2  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-left  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-left">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-left ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="w-full mt-10">
            {soup2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            dimsums
          </h3>
          <h3 className="text-lg uppercase text-center header-menu mt-10">
            (non vegetarian)
          </h3>
          <div className="w-full mt-10">
            {dimsums1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="w-full mt-10">
            {dimsums2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            dimsums
          </h3>
          <h3 className="text-lg uppercase text-center header-menu mt-10 ">
            (vegetarian)
          </h3>
          <div className="w-full mt-10">
            {dimsums3?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="w-full mt-10">
            {dimsums4?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            main course
          </h3>
          <div className="w-full mt-10">
            {mc1?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="w-full mt-10">
            {mc2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="w-full mt-10">
            {mc3?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            rice & noodles
          </h3>

          <div className="w-full mt-10">
            {mc4?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            desert
          </h3>
          <div className="w-full mt-10">
            {des2?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col items-center justify-start -ml-2"
                >
                  <div
                    key={index}
                    className="flex flex-row justify-start items-center mt-6  text-left"
                  >
                    <h3 className="text-sm capitalize text-white default-text my-4 px-10 -ml-10 text-center">
                      {item?.title}
                    </h3>
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center  ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>
        <div className="w-full h-40 bg-black"></div>
      </div>
    </Layout>
  );
}
