import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import menuback from "../assets/menuBack.png";
import drinkOne from "../assets/drinkOne.png";
import drinkTwo from "../assets/drinkTwo.png";
import menubb from "../assets/menubb.png";

export default function MainCourse() {
  const mainCourse1 = React.useMemo(
    () => [
      {
        title: "fresh lobster served with noodles in",
        text1: "1. chilli garlic sauce",
        text2: "2. ginger and spring onion",
        text3: "3.  black bean sauce",
      },
      {
        title: "flaming prawns",
        text1:
          "in superior sauce sauteed prawns in chilli and black bean sauce",
      },
      {
        title: "prawns in chilli oil and spring onion",
      },
      {
        title: "singapore chilli prawns",
      },
      {
        title: "prawns served in taro nest",
      },
      {
        title: "sauteed prawns with seasonal vegetables",
      },
      {
        title: "sauteed prawns with red chilli szechuan style",
      },
      {
        title: "sweet and sour prawns",
      },
      {
        title: "prawns in XO sauce",
      },
      {
        title: "prawns with curryleaf",
      },
      {
        title:
          "pan-fried river sole fillet in chilli and black bean sauce (steamed/fried)",
      },
      {
        title: "cantonese steamed whole pomfret/red snapper in",
        text1: "1. ginger and spring onion",
        text2: "2. black bean sauce",
        text3: "3. chilli garlic sauce",
      },
      {
        title: "pan-fried whole pomfret/red snapper in",
        text1: "1. superior sauce",
        text2: "2. salt and pepper",
        text3: "3.  yellow bean sauce",
      },
      {
        title: "chefs special pan fried whole pomfret",
      },
      {
        title: "steamed chilean sea bass in ginger and spring onions",
      },
      {
        title: "flaming fish in chilli oil and spring onion",
      },
      {
        title: "sliced fish in superior sauce",
      },
      {
        title: "sliced fish in chilli oil and spring onion",
      },
      {
        title: "sliced fish in black bean sauce",
      },
      {
        title: "sliced fish in ginger spring onion",
      },
      {
        title: "sliced fish with dry red chilli",
      },
      {
        title: "sliced fish in XO sauce",
      },
    ],
    []
  );

  const poultry = React.useMemo(
    () => [
      {
        title: "roast chicken in ",
        text1: "burnt garlic with soya chilli dipping sauce",
      },
      {
        title: "flaming chicken in superior sauce",
      },
      {
        title: "chicken in black bean sauce",
      },
      {
        title: "szechuan peppercorn chicken",
      },
      {
        title: "chicken in chilli oil and spring onion",
      },
      {
        title: "chicken in ginger and spring onion",
      },
      {
        title: "chicken in black pepper sauce",
      },
      {
        title: "kung pao chicken",
      },
      {
        title: "chciken soya chilli",
      },
      {
        title: "chicken with dry red chilli",
      },
      {
        title: "sauteed chicken with mixed vegetable",
      },
      {
        title: "stir fried chicken and vegetable is oyster sauce",
      },
      {
        title: "sweet and sour chicken",
      },
    ],
    []
  );

  const Tenderloin = React.useMemo(
    () => [
      {
        title: "tenderloin in truffle oil",
      },
      {
        title: "tenderloin in chilli oil and sring onion",
      },
      {
        title: "tenderloin in black bean sauce",
      },
      {
        title: "tenderloin in ginger and spring onion",
      },
      {
        title: "tenderloin and vegetable in oyster sauce",
      },
      {
        title: "tenderloin in black pepper sauce",
      },
      {
        title: "tenderloin in creamy wasabi sauce",
      },
      {
        title: "tenderloin and broccoli in oyster sauce",
      },
    ],
    []
  );
  const pork = React.useMemo(
    () => [
      {
        title: "char siu cantonese honey roasted pork",
      },
      {
        title: "pork belly hunan style with mantou buns",
      },
      {
        title: "sweet and sour pork",
      },
      {
        title: "double cooked pork in szechuan sauce",
      },
      {
        title: "pork with pak choi in oyster sauce",
      },
      {
        title: "pork mapo tofu",
      },
      {
        title: "pork with dry red chilli",
      },
      {
        title: "pork in yellow bean sauce",
      },
      {
        title: "pork in black pepper sauce",
      },
    ],
    []
  );

  const lamb = React.useMemo(
    () => [
      {
        title: "crispy lamb in mandarin chilli sauce",
      },
      {
        title: "lamb in black pepper sauce",
      },
      {
        title: "lamb in chilli oil and spring onion",
      },
      {
        title: "lamb in ginger and spring onion",
      },
      {
        title: "lamb with seasonal vegetables",
      },
      {
        title: "lamb in black bean sauce",
      },
      {
        title: "lamb in yellow bean sauce",
      },
    ],
    []
  );

  const veg1 = React.useMemo(
    () => [
      {
        title: "royal china exotic vegetables",
      },
      {
        title: "silken tofu with asparagus in soya chilli",
      },
      {
        title: "stir fried Chinese greens with black mushroom",
      },
      {
        title: "mock chicken with dry red chilli",
      },
      {
        title: "szechuan mapo tofu",
      },
      {
        title: "silken tofu in black bean sauce",
      },
      {
        title: "chinese greens in soya chilli garlic",
      },
      {
        title: "lotus root in chilli honey",
      },
      {
        title: "kung pao patato with okra",
      },
      {
        title: "stir fried pak choi in",
        text1: "1. chilli garlic",
        text2: "2. oyster sauce",
      },
      {
        title: "mixed vegetable in black bean sauce",
      },
    ],
    []
  );

  const veg2 = React.useMemo(
    () => [
      {
        title: "sauteed morning glory",
      },
      {
        title: "sauteed french bean in",
        text1: "1. black bean sauce",
        text2: "2. szechuan sauce",
        text3: "3. yellow bean sauce",
      },
      {
        title: "cottage cheese in chilli oil",
      },
      {
        title: "sauteed asparagus and snow peas in chilli oil",
      },
      {
        title: "broccoli and lotus root in yellow bean sauce",
      },
      {
        title: "spicy aubergine, okra and french beans",
      },
      {
        title: "stir fried lotus root with water chestnut and asparagus",
      },
      {
        title: "aubergine in hot garlic sauce or black bean sauce",
      },
      {
        title: "stir fried mixed vegetables",
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
          src={menuback || menubb}
          alt="exp-bg"
          className="backgroundImage"
          priority={true}
        />
      </div>
      <div className="rest-section overflow-hidden -mt-20">
        <section className="w-full px-10 flex flex-col items-center">
          <h3 className="text-lg uppercase text-center header-menu">
            seafood and fish
          </h3>
          <div className="w-full  mt-10">
            {mainCourse1?.map((item, index) => {
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
                        <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                          <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                        </div>
                        <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>

          <h3 className="text-lg uppercase text-center header-menu mt-24">
            poultry
          </h3>
          <div className="w-full mt-10">
            {poultry?.map((item, index) => {
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
                        <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                          <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                        </div>
                        <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 -ml-4 ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center -ml-4">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>

          <h3 className="text-lg uppercase text-center header-menu mt-24">
            tenderlions
          </h3>
          <div className="w-full  mt-10">
            {Tenderloin?.map((item, index) => {
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
                        <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                          <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                        </div>
                        <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-col justify-start items-start mt-20 ml-2">
            <div className="line-twice -ml-2"></div>
            <div className="line-twice -ml-2 mt-4"></div>
            <div className=" w-full flex flex-col items-center justify-center mt-10">
              <Image
                src={drinkOne}
                alt="drink"
                priority={true}
                className="-ml-4"
              />
              <h3 className="between-text uppercase text-lg text-center text-white mt-10 -ml-16 w-full px-10">
                Savour your favourite potion or a trendy cocktail from our
                finest liquor collection.
              </h3>
            </div>
            <div className="line-twice -ml-2 mt-10"></div>
            <div className="line-twice -ml-2 mt-4"></div>
          </div>
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            pork
          </h3>
          <div className="w-full  mt-10">
            {pork?.map((item, index) => {
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
                        <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                          <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                        </div>
                        <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            lamb
          </h3>
          <div className="w-full  mt-10">
            {lamb?.map((item, index) => {
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
                        <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                          <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                        </div>
                        <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-col justify-start items-start mt-20 ml-2">
            <div className="line-twice -ml-2"></div>
            <div className="line-twice -ml-2 mt-4"></div>
            <div className=" w-full flex flex-col items-center justify-center mt-10">
              <Image
                src={drinkTwo}
                alt="drink"
                priority={true}
                className="-ml-4"
              />
              <h3 className="between-text uppercase text-lg text-center text-white mt-10 -ml-16 w-full px-10">
                we offer ingredients that are fresh and authentic from the
                long-lost parts of China.
              </h3>
            </div>
            <div className="line-twice -ml-2 mt-10"></div>
            <div className="line-twice -ml-2 mt-4"></div>
          </div>
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            vegetarian
          </h3>
          <div className="w-full  mt-10">
            {veg1?.map((item, index) => {
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
                        <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                          <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                        </div>
                        <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text3}
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="w-full  mt-10">
            {veg2?.map((item, index) => {
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
                        <div className=" h-4 w-4 items-center justify-center flex ml-16 circle-border-red">
                          <div className="bg-red-600 h-2 w-2 circle-dot"></div>
                        </div>
                        <div className="h-4 w-4 items-center justify-center flex ml-4 circle-border-green">
                          <div className="bg-green-400 h-2 w-2 circle-dot"></div>
                        </div>
                      </>
                    ) : null}
                  </div>

                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
                    {item?.text1}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center">
                    {item?.text2}
                  </h3>
                  <h3 className="text-xs capitalize mobile-text text-center w-1/2 ">
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
