import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import menuback from "../assets/menuBack.png";

export default function LadiesLuncheon() {
  const firstCourse1 = React.useMemo(
    () => [
      {
        title: "Sweet Corn Soup Veg/Chicken",
        veg: false,
      },
      {
        title: "chicken in black bean sauce",
        veg: false,
      },
    ],
    []
  );

  const firstCourse2 = React.useMemo(
    () => [
      {
        title: "Hot & Sour Soup Veg/ Chicken",
        veg: true,
      },
      {
        title: "chicken in black bean sauce",
        veg: true,
      },
    ],
    []
  );
  const choose1 = React.useMemo(
    () => [
      {
        title: "Egg Fried Rice",
        veg: false,
      },
      {
        title: "Chicken Hong Kong Noodles",
        veg: false,
      },
    ],
    []
  );

  const choose2 = React.useMemo(
    () => [
      {
        title: "Veg Fried Rice",
        veg: true,
      },
      {
        title: "Veg Hong Kong Noodles",
        veg: true,
      },
    ],
    []
  );

  const secondCourse1 = React.useMemo(
    () => [
      {
        title: "chicken chive dumplings",
        veg: false,
      },
      {
        title: "crispy duck spring rolls",
        veg: false,
      },
      {
        title: "Chicken with Dry Red Chilli",
        veg: false,
      },
      {
        title: "Chicken & Shrimp Sui Mai",
        veg: false,
      },
      {
        title: "Chicken Lettuce Wrap",
        veg: false,
      },
    ],
    []
  );

  const secondCourse2 = React.useMemo(
    () => [
      {
        title: "Vegetable Dumpling with Coriander",
        veg: true,
      },
      {
        title: "Vegetable Spring Roll",
        veg: true,
      },
      {
        title: "Fried Classic Soft Corn Curd",
        veg: true,
      },
      {
        title: "Vegetable Salt and Pepper",
        veg: true,
      },
      {
        title: "Vegetable Lettuce Wrap",
        veg: true,
      },
    ],
    []
  );

  const mainCourse3 = React.useMemo(
    () => [
      {
        title: "Stir Fried Chicken in Chilli Oil",
        veg: false,
      },
      {
        title: "Sweet & Sour Chicken",
        veg: false,
      },
      {
        title: "Crispy Lamb with Manadarin Chilli Sauce",
        veg: false,
      },
      {
        title: "Flaming Fish in Superior Sauce",
        veg: false,
      },
      {
        title: "Sliced Fish in Black Bean Sauce",
        veg: false,
      },
    ],
    []
  );

  const mainCourse4 = React.useMemo(
    () => [
      {
        title: "Mixed Vegetables in Black Bean Sauce",
        veg: true,
      },
      {
        title: "Chinese Greens in Soya Chilli Garlic Sauce",
        veg: true,
      },
      {
        title: "Spicy Aubergine, Okra & French Beans",
        veg: true,
      },
      {
        title: "Kung Pao Potato",
        veg: true,
      },
      {
        title: "Crispy Seaweed",
        veg: true,
      },
    ],
    []
  );

  const drinks = React.useMemo(
    () => [
      {
        title: "Fresh Lime Soda/Water",
      },
      {
        title:
          "Coke/Diet Coke / Coke Zero / Sprite / Ginger Ale Peach / Lemon Ice Tea",
      },
      {
        title: "Any mocktail from the menu",
      },
      {
        title: "Chinese Tea",
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
          src={menuback}
          alt="exp-bg"
          className="backgroundImage"
          priority={true}
        />
      </div>
      <div className="rest-section overflow-hidden -mt-20">
        <section className="w-full px-10 flex flex-col items-center">
          <h3 className="text-lg uppercase text-center header-menu">
            first course
          </h3>
          <div className="w-full  mt-10">
            {firstCourse1?.map((item, index) => {
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
            {firstCourse2?.map((item, index) => {
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
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            second course
          </h3>
          <h3 className="text-lg uppercase text-center header-menu mt-10">
            (choose any 2 veg & <br /> 2 non veg for
            <br /> the table)
          </h3>
          <div className="w-full mt-10">
            {secondCourse1?.map((item, index) => {
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
          <div className="w-full mt-10">
            {secondCourse2?.map((item, index) => {
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
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            main course
          </h3>
          <h3 className="text-lg uppercase text-center header-menu mt-10 ">
            (choose any 2 veg & <br /> 2 non veg for
            <br /> the table)
          </h3>
          <div className="w-full mt-10">
            {mainCourse3?.map((item, index) => {
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
          <div className="w-full mt-10">
            {mainCourse4?.map((item, index) => {
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
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            (choose any 2 <br /> for the table)
          </h3>
          <div className="w-full mt-10">
            {choose1?.map((item, index) => {
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
          <div className="w-full mt-10">
            {choose2?.map((item, index) => {
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
          <h3 className="text-lg uppercase text-center header-menu mt-24">
            drinks
          </h3>
          <h3 className="text-lg uppercase text-center header-menu mt-10 ">
            (any one per person)
          </h3>
          <div className="w-full mt-10">
            {drinks?.map((item, index) => {
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
            desserts
          </h3>
          <h3 className="text-lg uppercase text-center header-menu mt-10 ">
            (choose any one <br /> for the table)
          </h3>
          <div className="w-full mt-10">
            {des?.map((item, index) => {
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
