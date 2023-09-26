"use client";
import React, { useState } from "react";
import Loader from "./components/Loader";
import Ordinary from "./components/Ordinary";

const Page = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return loading ? <Loader /> : <Ordinary />;
};

export default Page;
