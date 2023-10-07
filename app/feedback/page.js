"use client";
import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import { database } from "@/app/firebase";
import { gsap } from "gsap";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Page = () => {
  const dbInstance = collection(database, "feedback");
  const [ratings, setRatings] = useState([0, 0, 0]);
  const [comment, setcomment] = useState("");
  const [total, settotal] = useState(null);
  useEffect(() => {
    gsap.fromTo(
      ".feedbackContainer",
      { scale: 0, opacity: 0 },
      { opacity: 1, scale: 1, duration: 1 }
    );
  }, []);

  useEffect(() => {
    const fetchTotalResponses = async () => {
      const querySnapshot = await getDocs(collection(database, "feedback"));
      settotal(querySnapshot.size);
    };

    fetchTotalResponses();
  }, []);
  function submit(e) {
    e.preventDefault();
    if (comment !== "") {
      addDoc(dbInstance, {
        comment: comment,
        interface: ratings[0],
        relevance: ratings[1],
        approach: ratings[2],
        ratings: ratings,
      });
      toast.success("Feedback Submitted !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      settotal(total + 1);
      setcomment("");
    } else {
      alert("Feedback cant be empty");
    }
  }
  function handleStarClick(questionIndex, starNumber) {
    const newRatings = [...ratings];
    newRatings[questionIndex] = starNumber;
    setRatings(newRatings);
  }

  const questions = [
    "Was the website interface easy to navigate and use?",
    "Were the legal scenarios presented in the games relevant and realistic?",
    "Did the gamification elements enhance your understanding of legal topics?",
  ];

  return (
    <div className="w-screen accountwrapper bg-sky-100 flex">
      <div className="absolute bottom-0 right-0 py-2 px-4">
        Total reviews {total}
      </div>
      <div className="feedbackContainer bg-white rounded-xl shadow-2xl border-gray-400 flex flex-col items-center m-auto">
        <div className="text-4xl font-bold mt-5">FEEDBACK</div>
        <div className="feedbackQuestions mt-2">
          {questions.map((question, index) => (
            <div key={index} className="xl mx-12 mt-5">
              <div>{question}</div>
              <div className="flex justify-between mt-3 text-xl w-2/3">
                {[...Array(5)].map((_, starIndex) => (
                  <i
                    key={starIndex}
                    className={`${
                      starIndex < ratings[index]
                        ? "ri-star-fill text-blue-600"
                        : "ri-star-line"
                    }`}
                    onClick={() => handleStarClick(index, starIndex + 1)}
                  ></i>
                ))}
              </div>
            </div>
          ))}
          <div className="mx-12 mt-5">
            <div>
              {
                "Any additional thoughts or suggestions about our platform? We value your feedback and would love to hear your ideas for improvement."
              }
            </div>
            <textarea
              className="border border-black mt-4 px-2 py-1 text-sm"
              placeholder="Share your thoughts, we're all ears!"
              cols="73"
              rows="4"
              value={comment}
              onChange={(e) => {
                setcomment(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
        <div className="w-full flex justify-center mt-4">
          <button
            className="bg-blue-600 text-white px-3 py-1.5 rounded"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
