import React from "react";
import Link from "next/link";
import "remixicon/fonts/remixicon.css";
const Nav = () => {
  return (
    <nav className="sm:h-20 h-16 w-full border-b border-gray-400 flex sm:px-10 px-5 sm:py-9 py-3 items-center justify-between bg-white">
      <div className="part1 flex">
        <Link href="/">
          <img
            src="/Images/logo.png"
            width={187}
            height={47}
            alt="Logo"
            className="logo1"
          />
        </Link>
      </div>
      <div className="part2 sm:flex items-center sm:gap-12 sm:text-xl text-base hidden">
        <Link href="learn">
          <div>Learn</div>
        </Link>
        <Link href="glossary">
          <div>Glossary</div>
        </Link>
        <Link href="forum">
          <div>Forum</div>
        </Link>
        <Link href="account">
          <button className="light h-full py-1 px-2 rounded text-white">
            Account
          </button>
        </Link>
      </div>
      <div className="part3 sm:hidden text-2xl font-bold">
        <i class="ri-menu-3-line"></i>
      </div>
    </nav>
  );
};

export default Nav;
