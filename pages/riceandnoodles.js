import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import menubb from "../assets/menubb.png";

export default function RiceAndNoodles() {
  const riceLeft = React.useMemo(
    () => [
      {
        title: "Royal China Banana Leaf Rice",
        both: true,
      },
      {
        title: "Fukien Fried Rice",
        both: true,
      },
      {
        title: "Egg Fried Rice",
        mid: true,
        both: true,
      },
      {
        title: "Truffle Fried Rice with Seafood, Egg White.",
      },
      {
        title: "Chicken Fried Rice",
        veg: false,
      },
      {
        title: "Bacon Fried Rice",
        veg: false,
      },
      {
        title: "Cantonese Barbeque Pork and Prawn Fried Rice",
        veg: false,
      },
      {
        title: "Seafood Fried Rice",
        veg: false,
      },
      {
        title: "Steamed Rice",
        veg: true,
      },
      {
        title: "Edamame and Garlic Fried Rice",
        veg: true,
      },
      {
        title: "Vegetable Fried Rice with Sweetcom and Asparagu",
        veg: true,
      },
      {
        title: "Burnt Garlic Vegetable Fried Rice",
        veg: true,
      },
      {
        title: "Vegetable Fried Rice",
        veg: true,
      },
      {
        title: "Garlic Fried Rice",
        veg: true,
      },
      {
        title: "Mushroom Pot Rice",
        veg: true,
      },
    ],
    []
  );

  const riceRight = React.useMemo(
    () => [
      {
        title: "Crispy Pan Fried Noodles",
      },
      {
        title: "Hakka Noodles",
      },
      {
        title: "Singapore Style Vermicelli Noodles",
      },
      {
        title: "Crispy Pan Fried Noodles in Black Bean Sauce",
      },
      {
        title: "Hongkong Noodles",
      },
      {
        title: "Crispy Noodles in Chilli & Garlic Sauce",
      },
      {
        title: "Barbeque Noodles",
        text1: "1. Pork ",
        text2: "2. Duck",
      },
      {
        title: "Ho Fun Noodles",
        text1: "1. seafood",
        text2: "2. Tenderloin",
        text3: "3. Chicken",
        text4: "4. Mixed Vegetables",
      },
      {
        title: "Turnip and Chive Chilli Oil Dumpling",
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
          <h3 className="text-lg uppercase text-center header-menu">
            rice & noodles
          </h3>
          <div className="w-full  mt-10">
            {riceLeft?.map((item, index) => {
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
                    {item?.both ? (
                      <>
                        {item?.mid ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-yellow">
                            <div className="bg-yellow-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <>
                            <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                              <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                            </div>
                            <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                              <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {!item?.veg ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                            <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        )}
                      </>
                    )}
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
            {riceRight?.map((item, index) => {
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
                    {item?.both ? (
                      <>
                        {item?.mid ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-yellow">
                            <div className="bg-yellow-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <>
                            <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                              <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                            </div>
                            <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                              <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {!item?.veg ? (
                          <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                            <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                          </div>
                        ) : (
                          <div className="h-4 w-4 items-center justify-center flex ml-16 circle-border-green">
                            <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                          </div>
                        )}
                      </>
                    )}
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
