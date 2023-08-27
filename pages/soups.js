import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import menuback from "../assets/menuBack.png";

export default function Soups() {
  const nonVegSoup = React.useMemo(
    () => [
      {
        title: "Hot and Sour soup",
        text1: "1. Seafood",
        text2: "2. Chicken",
      },
      {
        title: "Royal Sweet Corn Soup",
        text1: "1. Crab Meat",
        text2: "2. Chicken",
      },
      {
        title: "Coriander Soup",
        text1: "1. Seafood",
        text2: "2. Chicken",
      },
      {
        title: "Chicken Wonton Soup",
      },
      {
        title: "Fish Ball Soup",
      },
      {
        title: "Chicken with Vegetable Clear Soup",
      },
      {
        title: "Duck Noodle Soup",
      },
    ],
    []
  );

  const vegSoup = React.useMemo(
    () => [
      "Hot and Sour Soup",
      "Royal Sweet Corn Soup",
      "Vegetable Coriander Soup",
      "Vegetable and Mushroom Soup",
      "Vegetable Wonton Soup",
    ],
    []
  );
  return (
    <Layout>
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
              non vegetarian - <br />
              soup
            </h3>
            <div className="w-full  mt-10">
              {nonVegSoup?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex flex-col items-center justify-start -ml-2"
                  >
                    <h3 className="text-sm text-white default-text my-4 text-center px-4 -ml-4">
                      {item?.title}
                    </h3>
                    <h3 className="text-xs mobile-text text-center">
                      {item?.text1}
                    </h3>
                    <h3 className="text-xs mobile-text text-center">
                      {item?.text2}
                    </h3>
                  </div>
                );
              })}
            </div>

            <h3 className="text-lg uppercase text-center header-menu mt-24">
              steamed - <br /> vegetarian
            </h3>
            <div className="w-full px-10 mt-10">
              {vegSoup.map((item, index) => {
                return (
                  <h3
                    key={index}
                    className="text-sm text-white text-center default-text my-6 -ml-1 w-11/12"
                  >
                    {item}
                  </h3>
                );
              })}
            </div>
          </section>
          <div className="w-full h-40 bg-black"></div>
        </div>
      </Layout>
    </Layout>
  );
}
