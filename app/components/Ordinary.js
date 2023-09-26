import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./Nav";

gsap.registerPlugin(ScrollTrigger);
const Ordinary = () => {
  useEffect(() => {
    gsap.fromTo(
      "section>div>h1",
      {
        x: -1300,
        color: "#3B82F6",
      },
      {
        color: "#333333",
        x: 0,
        duration: 2,
        delay: 0,
        ease: "ease-in",
      }
    );
    gsap.fromTo(
      "span",
      {
        x: -1300,
        color: "#3B82F6",
      },
      {
        color: "#007DBE",
        x: 0,
        duration: 2,
        delay: 0,
        ease: "ease-in",
      }
    );
    gsap.fromTo(
      "section>div>div>button",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 2,
      }
    );
    gsap.to(".slider", {
      display: "block",
      duration: 1,
      delay: 2.5,
    });
    gsap.to(".slider", {
      y: -20,
      yoyo: true,
      repeat: -1,
      duration: 0.5,
      delay: 2.5,
    });
  }, []);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "section>div>h1",
      start: "top 25%",
      //markers: true,
      scrub: 2,
      animation: gsap.to(".scrollbox", {
        scale: 0,
        opacity: 0,
      }),
    });
    ScrollTrigger.create({
      trigger: "section>div>div>button",
      start: "top 57%",
      end: "top 32%",
      //markers: true,
      scrub: 5,
      animation: gsap.fromTo(
        ".featureWrapper",
        {
          scale: 0,
          y: 0,
          opacity: 0,
        },
        {
          scale: 1,
          y: -175,
          opacity: 1,
        }
      ),
    });
    ScrollTrigger.create({
      trigger: "section>div>div>button",
      start: "top 57%",
      end: "top 32%",
      //markers: true,
      scrub: 5,
      animation: gsap.fromTo(
        ".slider",
        {
          scale: 1,
          opacity: 1,
        },
        {
          scale: 0,
          opacity: 0,
        }
      ),
    });
  }, []);
  const scrollToBottom = () => {
    const pageHeight = document.body.scrollHeight;
    window.scrollTo({
      top: pageHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full wrapper relative bg-sky-50">
      <Nav />
      <section className="main1 flex flex-col w-full justify-center items-center sm:text-7xl font-bold font-sans text-2xl">
        <div className="flex flex-col items-center gap-3 scrollbox">
          <h1>Empowering Young Minds</h1>
          <h1>
            with <span>Legal Wisdom</span>
          </h1>
          <div className="flex mt-10 sm:text-2xl text-base sm:gap-14 gap-4">
            <button className="light px-3 py-2 text-white font-normal rounded-lg">
              REGISTER NOW
            </button>
            <button className="border-black border-2 px-3 py-2 rounded-lg">
              LEARN MORE
            </button>
          </div>
        </div>
        <button
          className="fixed bottom-10 border rounded-full bg-blue-800 border-gray-400 sm:text-2xl text-2xl sm:px-3 sm:py-1 px-4 py-2 slider text-white font-light"
          onClick={scrollToBottom}
        >
          SLIDE ↓
        </button>
      </section>
      <section className="featureWrapper flex items-center justify-center flex-col">
        <h1 className="sm:mb-10 sm:mt-0 -mt-5  mb-5 sm:text-5xl text-2xl">
          OUR FEATURES
        </h1>
        <div className="features sm:flex gap-5 mt-5 grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-3">
          <article className=" sm:w-56 sm:h-56 w-40 h-40  rounded-2xl bg-white border border-gray-400 ">
            <img
              src="/Images/Authentication.png"
              className="sm:h-4/5 w-full border-gray-200 h-3/4 border-b m-auto py-3 px-6"
            />
            <h1 className="mt-2 sm:text-lg text-sm w-full text-center">
              Secure Authentication
            </h1>
          </article>
          <article className=" sm:w-56 sm:h-56 w-40 h-40 rounded-2xl bg-white border border-gray-400">
            <img
              src="/Images/Forum.png"
              className="sm:h-4/5 w-full border-gray-200 h-3/4 border-b m-auto py-3 px-6"
            />
            <h1 className="mt-2 sm:text-lg text-sm w-full text-center">
              Public Forum
            </h1>
          </article>
          <article className=" sm:w-56 sm:h-56 w-40 h-40 rounded-2xl bg-white border border-gray-400">
            <img
              src="/Images/Glossary.png"
              className="sm:h-4/5 w-full border-gray-200 h-3/4 border-b m-auto py-3 px-6"
            />
            <h1 className="mt-2 sm:text-lg text-sm w-full text-center">
              Extensive Glossary
            </h1>
          </article>
          <article className=" sm:w-56 sm:h-56 w-40 h-40 rounded-2xl bg-white border border-gray-400">
            <img
              src="/Images/Learn.png"
              className="sm:h-4/5 w-full border-gray-200 h-3/4 border-b m-auto py-3 px-6"
            />
            <h1 className="mt-2 sm:text-lg text-sm w-full text-center">
              Interactive Learning
            </h1>
          </article>
        </div>
      </section>
      <footer className="absolute w-full bottom-0 h-16 border-t border-gray-400 flex justify-center items-center text-gray-600 font-light text-sm">
        By NexTech
      </footer>
    </div>
  );
};

export default Ordinary;
