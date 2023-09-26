"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { auth } from "@/app/firebase";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "../components/Footer";
const page = () => {
  const [user, setuser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const gitAuth = new GithubAuthProvider();
  const logingoogle = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };
  const logingit = async () => {
    const result = await signInWithPopup(auth, gitAuth);
  };
  useEffect(() => {
    console.log(user);
    if (user) {
      alert("Welcome " + user.displayName);
    }
  }, [user]);

  return (
    <div className="w-full accountwrapper relative bg-sky-50">
      <Nav />
      <div className="h-full w-full flex justify-center items-center">
        <div className=" h-96 border bg-white w-1/3 mt-20 rounded-lg border-gray-400 flex items-center flex-col shadow-2xl">
          <h1 className="text-3xl font-bold mb-10 mt-8">Login to LawWiz</h1>
          <form className="w-full flex flex-col gap-4 items-center">
            <input
              type="text"
              placeholder="Enter your Email-Id"
              className="border border-gray-400 w-3/4 text-lg px-2 py-1"
            />
            <input
              type="text"
              placeholder="Enter your Password"
              className="border border-gray-400 w-3/4 text-lg px-2 py-1"
            />
          </form>
          <div className="flex flex-col items-center mt-8 w-3/4">
            <button class="light text-white py-2 text-sm rounded w-full">
              Log-in/Register
            </button>
            <div className="text-gray-600 text-sm mt-0.5">Or</div>
          </div>
          <button
            class="light text-white w-3/4 text-sm py-2 rounded mt-1"
            onClick={logingoogle}
          >
            Sign-In with Google
          </button>
          <div
            onClick={() => {
              auth.signOut();
            }}
          >
            {user ? user.displayName + "  " + user.email : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
