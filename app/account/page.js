"use client";
import React, { useEffect, useState } from "react";
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
    if (user) {
      alert("Welcome " + user.displayName);
    }
  }, [user]);

  return (
    <div className="w-full accountwrapper bg-sky-50 flex">
      <div className="h-full w-full flex justify-start items-center">
        <div className=" h-full bg-white w-1/2 rounded-lg  flex items-center flex-col justify-center gap-8">
          <h1 className="text-3xl font-bold ">Login to LawWiz</h1>
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
          <div className="flex flex-col items-center  w-3/4">
            <button class="light text-white py-2 text-sm rounded w-full">
              Log-in/Register
            </button>
            <div className="text-gray-600 text-sm mt-1">Or</div>
            <button
              class="light text-white w-full  gap-2 text-sm py-2 rounded mt-1"
              onClick={login}
            >
              Sign-In with Google
            </button>
          </div>

          <div
            onClick={() => {
              auth.signOut();
            }}
          >
            {user ? user.displayName + "  " + user.email : ""}
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <img src="/Images/justicevector.png" />
        </div>
      </div>
    </div>
  );
};

export default page;
