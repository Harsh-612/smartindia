"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import { app, database } from "@/app/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
const forum = () => {
  const getQuestion = async () => {
    const querySnapshot = await getDocs(dbInstance);
    const questionData = querySnapshot.docs.map((item) => {
      return item.data().post;
    });
    return questionData;
  };
  useEffect(() => {
    getQuestion().then((data) => {
      setquestions(data);
    });
  }, []);
  const dbInstance = collection(database, "postdata");
  const [views, setviews] = useState(0);
  const [answers, setanswers] = useState(0);
  const [questions, setquestions] = useState([]);
  const currentDate = new Date();
  const [query, setQuery] = useState("");
  const [Hovered, setHovered] = useState(false);
  const animation = () => {
    const form = document.querySelector("form");
    const formChildren = form.children;
    console.log(formChildren);
    for (let i = 0; i < formChildren.length - 1; i++) {
      gsap.to(formChildren[i], {
        opacity: 0,
        zIndex: -1,
        duration: 0.5,
      });
    }
    gsap.fromTo(
      "form",
      {
        background: "#fff",
      },
      {
        background: "#007DBE",
        duration: 0.5,
      }
    );
    gsap.fromTo(
      ".hiddencontent",
      {
        display: "none",
      },
      {
        display: "block",
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".hiddencontent",
      {
        x: -500,
      },
      {
        x: 0,
        delay: 0.5,
        duration: 1,
      }
    );
    for (let i = 0; i < formChildren.length - 1; i++) {
      gsap.to(formChildren[i], {
        opacity: 1,
        zIndex: 0,
        duration: 0.5,
        delay: 2,
      });
    }
    gsap.fromTo(
      "form",
      {
        background: "#007DBE",
      },
      {
        background: "#fff",
        duration: 1,
        delay: 2,
      }
    );
    gsap.fromTo(
      ".hiddencontent",
      {
        display: "block",
        color: "#fff",
      },
      {
        display: "none",
        color: "transparent",
        delay: 2,
      }
    );
  };
  const submit = (e) => {
    e.preventDefault();
    if (query !== "") {
      addDoc(dbInstance, {
        post: query,
      });
      setquestions([query, ...questions]);
      setQuery("");
      animation();
    } else {
      alert("Post cant be empty");
    }
  };
  useEffect(() => {
    gsap.fromTo(
      ".postbtn",
      {
        x: -150,
      },
      {
        x: 0,
        duration: 2,
      }
    );
    gsap.fromTo(
      "input",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay: 1,
      }
    );
  }, []);

  return (
    <div className="w-full wrapper vertical relative bg-sky-50">
      <Nav />
      <aside className="fixed border-r border-gray-400 sidebar top-20 left-0 w-1/6 flex flex-col bg-sky-50">
        <h1 className="pl-20 pt-8 pb-3 w-full hover:underline underline-offset-2 cursor-pointer font-semibold">
          Top phrases
        </h1>
        <div className="pl-20 text-sm py-2 mx-1 w-full hover:underline underline-offset-2 cursor-pointer hover:text-blue-500">
          Intellectual theft
        </div>
        <div className="pl-20 text-sm py-2 mx-1 w-full hover:underline underline-offset-2 cursor-pointer hover:text-blue-500">
          Child Labour
        </div>
        <div className="pl-20 text-sm py-2 mx-1 w-full hover:underline underline-offset-2 cursor-pointer hover:text-blue-500">
          Arrest
        </div>
        <div className="pl-20 text-sm py-2 mx-1 w-full hover:underline underline-offset-2 cursor-pointer hover:text-blue-500">
          Lorem
        </div>
        <div className="pl-20 text-sm py-2 mx-1 w-full hover:underline underline-offset-2 cursor-pointer hover:text-blue-500">
          Ipsum
        </div>
      </aside>
      <aside className="fixed scale-95 right top-20 bg-white up rounded-2xl border border-gray-500 flex flex-col items-center gap-2">
        <h1 className="py-3 w-5/6 text-center border-b border-gray-400 font-semibold">
          Related Posts
        </h1>
      </aside>
      <aside className="fixed right scale-95 bottom-0 down bg-white rounded-2xl border border-gray-500 flex flex-col items-center gap-2">
        <h1 className="py-3 w-5/6 text-center border-b border-gray-400 font-semibold">
          Popular Users
        </h1>
      </aside>
      <section className="absolute top-20 left-1/6 left-1 flex flex-col items-center w-6/12 glossarySection bg-white border-r border-gray-400">
        <form
          className="flex justify-center py-6 w-full gap-6 border-b border-gray-300 items-center"
          onSubmit={submit}
          action="/submit"
        >
          <input
            type="text"
            placeholder="Your turn: share or ask!"
            className="hover:shadow-2xl border border-gray-500 bg-white text-base px-5 py-1 rounded-full w-3/4"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="light px-4 py-1 text-white font-normal rounded-2xl postbtn">
            Post
          </button>
          <div className="hiddencontent hidden absolute text-xl text-white">
            POSTED ✈
          </div>
        </form>
        {questions.map((question, i) => {
          var classdivsystem =
            "absolute top-4 right-8 cursor-pointer text-gray-400 system " +
            (Hovered ? "visible" : "hidden");
          return (
            <div
              className="w-full h-fit py-4 border-b flex flex-wrap justify-center relative fullpost"
              key={i}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div className={classdivsystem}>
                <i className="ri-more-2-line"></i>
              </div>
              <div className="photo w-1/12 flex flex-col items-center px-1 mt-1 text-center">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20210313/pngtree-flat-color-pink-green-gradient-background-image_584088.jpg"
                  className="w-4/5 aspect-square rounded-full"
                />
              </div>
              <div className="w-11/12">
                <div className="date font-light text-xs text-gray-400 w-full date mb-1">
                  Posted on{" "}
                  {currentDate.toLocaleString("default", { month: "long" })}{" "}
                  {currentDate.getDate()}
                </div>
                <div className="post w-11/12 mb-0.5 text-sm">{question}</div>
              </div>
              <div className="w-5/6 bg-gray-200 h-14 flex items-center justify-around display mt-2">
                <div className="w-fit gap-6  h-fit  flex justify-around items-center counter text-center te">
                  <div className="bg-white h-fit py-0.5 px-1 w-fit border-2 border-black text-xs">
                    <i class="ri-question-answer-line"></i> {answers} Answers
                  </div>
                  <div className="bg-white h-fit py-0.5 w-fit px-1 border-2 border-black text-xs">
                    <i class="ri-eye-line"></i> {views} Views
                  </div>
                </div>
                <div className="w-1/6  h-1/2 flex justify-end items-center">
                  <button className="light w-11/12 h-fit py-1.5 text-white font-light text-xs">
                    Answer
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default forum;
