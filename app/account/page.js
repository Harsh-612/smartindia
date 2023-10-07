"use client";
import React, { useEffect, useState } from "react";
import { auth } from "@/app/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setuser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const regOrLog = async () => {
    try {
      // Update email and password states before calling createUserWithEmailAndPassword
      const userEmail = email;
      const userPassword = password;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );

      console.log(user);
      toast.success("Logged in successfully!");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/invalid-login-credentials") {
        try {
          const userEmail = email;
          const userPassword = password;
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            userEmail,
            userPassword
          );
          console.log(user);
          toast.success("Account created and logged in successfully!");
          setTimeout(() => {
            router.push("/");
          }, 3000);
        } catch (error) {
          console.error(error);
          toast.error("Error logging in. Wrong Email or Password");
        }
      } else {
        console.error(error);
        toast.error("Error logging in. Wrong Email or Password");
      }
    }
  };
  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
    toast.success("Logged in successfully");
  };

  return (
    <div className="w-full accountwrapper bg-sky-50 flex">
      <div className="h-full w-full flex justify-start items-center">
        <div className=" h-full bg-white w-2/5 rounded-lg  flex items-center flex-col justify-center gap-8">
          <h1 className="text-3xl font-bold ">Login to LawWiz</h1>
          <form className="w-full flex flex-col gap-4 items-center">
            <input
              type="email"
              placeholder="Enter your Email-Id"
              className="border border-gray-400 w-3/5 text-lg px-2 py-1"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="border border-gray-400 w-3/5 text-lg px-2 py-1"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </form>
          <div className="flex flex-col items-center  w-3/5">
            <button
              class="light text-white py-2 text-sm rounded w-full"
              onClick={regOrLog}
            >
              Log-in/Register
            </button>
            <div className="text-gray-600 text-sm mt-1">Or</div>
            <button
              class="light text-white w-full  gap-2 text-sm py-2 rounded mt-1"
              onClick={login}
            >
              <i class="ri-google-fill"></i>Sign-In with Google
            </button>
          </div>

          <div
            onClick={() => {
              auth.signOut();
            }}
          ></div>
        </div>
        <div className="w-3/5 h-full flex justify-center items-center">
          <img src="/Images/justicevector.png" />
        </div>
      </div>
    </div>
  );
};

export default page;
