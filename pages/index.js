import Head from "next/head";
import { useRef } from "react";
import AIrobot from "../components/svg/airobot";
import Curved from "../components/svg/curved";
import Curved2 from "../components/svg/curved2";
import Herosvg from "../components/svg/herosvg";
import styles from "../styles/Home.module.css";

export default function Home() {
  const ref = useRef();
  return (
    <div className={styles.root}>
      <Head>
        <title>Sardorbek Omonkulov Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio website where you can get a glips of what I can do."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative hero h-screen bg-gray-100 py-16 pt-18 flex justify-center content-center">
        <div className="absolute -bottom-1 w-full p-0 m-0">
          <Curved />
        </div>

        <div className="container px-4 sm:px-8 lg:px-16 xl:px-20 flex justify-center content-center ">
          <div className="hero-wrapper grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="hero-text col-span-6">
              <h1 className="font-semibold text-3xl md:text-5xl max-w-xl text-gray-900 leading-tight">
                Hi, I am Sardorbek Omonkulov
              </h1>
              <hr className="w-16 h-1 bg-green-500 rounded-full mt-6" />
              <p className="text-gray-800 text-base leading-relaxed mt-8 ">
                I love creating software applications! ReactJs has been my 'Go
                To' tool for creating mobile, web and even desktop applications.
              </p>
              <button
                onClick={() =>
                  ref.current.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                    inline: "nearest",
                  })
                }
                className="mt-8 bg-transparent hover:bg-green-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
              >
                Explore
              </button>
            </div>

            <div className="hero-image col-span-6">
              <Herosvg />
            </div>
          </div>
        </div>
      </div>

      <div ref={ref} className="bg-blue-100 relative pb-10 md:pb-48">
        <div className="absolute -bottom-1 w-full p-0 m-0">
          <Curved2 />
        </div>
        <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20 max-w-screen-xl">
          <h1 className="text-3xl text-center font-bold text-blue-500">
            Timeline of My Programming Experince
          </h1>

          <div className="border-l-2 border-blue-500 mt-10">
            {/* Java */}
            <div className="transform transition cursor-default ml-10 relative flex items-center px-4 py-4  bg-orange-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-orange-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-orange-300 absolute -left-10 z-0"></div>

              <div className="flex-auto m-0 sm:mr-10">
                <h2 className="text-sm">2016</h2>
                <h2 className="text-xl font-bold">Java</h2>
                <h3 className="mb-1">
                  The first language I learned and used was Java in 2016 when I
                  was a junior in high school.
                </h3>
              </div>

              <img
                src="/javalogo.png"
                className="bg-white w-24 h-24 text-center border rounded px-4 py-2"
              />
            </div>

            {/* Spring Boot */}
            <div className="transform transition cursor-default ml-10 relative flex items-center px-4 py-4   bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-green-400 absolute -left-10 z-0"></div>

              <div className="flex-auto m-0 sm:mr-10">
                <h2 className="text-sm">2018</h2>
                <h2 className="text-xl font-bold">Spring Boot</h2>
                <h3 className="mb-1">
                  After learning Obeject-Oriented Programming and basic
                  fundamentals of Java I started to explore web development.
                  That is when I discovered Spring Boot frame work. I started
                  using the Frame work to make basic web applications.
                </h3>
              </div>

              <img
                src="/springboot.png"
                className="bg-white w-38 h-12 text-center border rounded px-4 py-2"
              />
            </div>

            {/* Javascript */}
            <div className="transform transition cursor-default ml-10 relative flex items-center px-4 py-4 bg-yellow-400 text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-yellow-400 absolute -left-10 z-0"></div>

              <div className="flex-auto m-0 sm:mr-10">
                <h2 className="text-sm">2019</h2>
                <h2 className="text-xl font-bold">Javascript</h2>
                <h3 className="mb-1">
                  When I first discovered Javascript, I did not like it much.
                  Functional programming was different than what I have been
                  doing. But after weeks of self-teaching Javascript grew on me.
                </h3>
              </div>

              <img
                src="/javascript.png"
                className="bg-white w-24 h-24 text-center border border-black rounded-lg"
              />
            </div>

            {/* React */}
            <div className="transform transition cursor-default ml-10 relative flex items-center px-4 py-4  bg-gray-900 text-gray-100 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-gray-900 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-gray-700 absolute -left-10 z-0"></div>

              <div className="flex-auto m-0 sm:mr-10">
                <h2 className="text-sm">2020 - present</h2>
                <h2 className="text-xl font-bold">React</h2>
                <h3 className="mb-1">
                  When I became sufficent enought with Javascript, I started
                  learning React. I was hooked on Hooks in ReactJS. Now I am
                  also exploring React-Native and Next.js to expand my toolkit.
                </h3>
              </div>

              <img
                src="/react.png"
                className=" w-24 h-24 text-center rounded-lg spinningAnim "
              />
            </div>

            {/* Future */}
            <div className="transform transition cursor-default ml-10 relative flex items-center px-4 py-4  bg-red-600 text-gray-100 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-red-700 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-red-500 absolute -left-10 z-0"></div>

              <div className="flex-auto m-0 sm:mr-10">
                <h2 className="text-sm">202X</h2>
                <h2 className="text-xl font-bold">AI Developer</h2>
                <h3 className="mb-1">
                  My goal is to become an AI developer. I would love to have the
                  power to create amazing AI software that can solve real-life
                  problems.
                </h3>
              </div>

              <div className="text-center">
                <AIrobot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
