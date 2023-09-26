"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { auth } from "@/app/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
const page = () => {
  const [user, setuser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="w-full accountwrapper relative bg-sky-100">
      <Nav />
      <div className="h-full w-full flex justify-center items-center">
        <div className=" h-72 border bg-white w-2/5 mt-20 rounded-lg border-gray-400 flex justify-center items-center flex-col">
          <form className="w-full flex flex-col gap-4 items-center">
            <input
              type="text"
              placeholder="Enter your Email-Id"
              className="border border-gray-400 w-3/5 text-lg px-2 py-1"
            />
            <input
              type="text"
              placeholder="Enter your Password"
              className="border border-gray-400 w-3/5 text-lg px-2 py-1"
            />
          </form>
          <div className="flex flex-col items-center mt-6 w-3/5">
            <button class="light text-white py-2 text-sm rounded w-full">
              Log-in/Register
            </button>
            <div className="text-gray-300 text-xs mt-0.5">Or</div>
          </div>
          <button
            class="light text-white w-3/5 text-sm py-2 rounded mt-0.5"
            onClick={login}
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
