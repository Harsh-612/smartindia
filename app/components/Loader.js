import React, { useEffect } from "react";
import { gsap } from "gsap";
const Loader = () => {
  useEffect(() => {
    gsap.fromTo(
      ".logo",
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
      }
    );
    gsap.fromTo(
      ".absolute",
      {
        background: "#007DBE",
        width: 2,
      },
      {
        background: "#007DBE",
        width: "100%",
        duration: 3,
        ease: "ease-out",
      }
    );
  }, []);
  return (
    <div className="w-full h-full loader flex justify-center items-center">
      <div className="absolute top-0 h-2"></div>
      <img
        src="/Images/logoLoad.png"
        width={187}
        height={187}
        alt="Logo"
        className="logo"
      />
    </div>
  );
};

export default Loader;
