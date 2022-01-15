import Head from "next/head";
import Curved from "../components/svg/curved";
import Herosvg from "../components/svg/herosvg";
import styles from "../styles/Home.module.css";

export default function Home() {
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
              <button className="mt-8 bg-transparent hover:bg-green-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                Explore
              </button>
            </div>

            <div className="hero-image col-span-6">
              <Herosvg />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100">
        <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
          <h1 className="text-3xl text-center font-bold text-blue-500">
            Timeline of My Programming Experince
          </h1>
          <div className="border-l-2 mt-10">
            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

              <div className="flex-auto">
                <h2 className="text-sm">2016</h2>
                <h2 className="text-xl font-bold">Java</h2>
                <h3>
                  My first language that I learned and build applications with
                  was Java. I started teaching my self Java in 2016 and used
                  Java to create web apps with help of Spring Boot.
                </h3>
              </div>
              <a
                href="#"
                className="text-center text-white hover:text-gray-300"
              >
                Download materials
              </a>
            </div>

            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>

              <div className="flex-auto">
                <h1 className="text-lg">Day 1</h1>
                <h1 className="text-xl font-bold">
                  Orientation and Briefing on Uniliver basics
                </h1>
                <h3>Classroom</h3>
              </div>
              <a
                href="#"
                className="text-center text-white hover:text-gray-300"
              >
                Download materials
              </a>
            </div>

            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>

              <div className="flex-auto">
                <h1 className="text-lg">Day 1</h1>
                <h1 className="text-xl font-bold">
                  Orientation and Briefing on Uniliver basics
                </h1>
                <h3>Classroom</h3>
              </div>
              <a
                href="#"
                className="text-center text-white hover:text-gray-300"
              >
                Download materials
              </a>
            </div>

            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
              <div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

              <div className="flex-auto">
                <h1 className="text-lg">Day 1</h1>
                <h1 className="text-xl font-bold">
                  Orientation and Briefing on Uniliver basics
                </h1>
                <h3>Classroom</h3>
              </div>
              <a
                href="#"
                className="text-center text-white hover:text-gray-300"
              >
                Download materials
              </a>
            </div>

            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
              <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

              <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>

              <div className="flex-auto">
                <h1 className="text-lg">Day 1</h1>
                <h1 className="text-xl font-bold">
                  Orientation and Briefing on Uniliver basics
                </h1>
                <h3>Classroom</h3>
              </div>
              <a
                href="#"
                className="text-center text-white hover:text-gray-300"
              >
                Download materials
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
