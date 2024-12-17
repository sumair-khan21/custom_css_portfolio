"use client";

import React, { useState } from "react";
import "../navbar.css";
import Link from "next/link";

function Navbar() {
  const [isClick, SetIsClick] = useState(false);
  const toggleNavbar = () => {
    SetIsClick(!isClick);
  };

  return (
    <>
      <nav className="">
        <div className="navbar  ">
          <div className="navbar-main ">
            <div className="logo">
              <Link href="/" className="logo1 text-white ">SUMAIR K.</Link>
              
            </div>
            <div className="hidden1 ">
              <div className="nav-items ">
                {/* <Link href="./" className="items" >Home</Link> */}
                <Link href="/about" className="items">
                  ABOUT
                </Link>
                <Link href="/project" className="items">
                  PROJECTS
                </Link>
                <Link href="/contact" className="items">
                  CONTACT
                </Link>
              </div>
            </div>
            <div className=" btn">
              <button className="" onClick={toggleNavbar}>
                {isClick ? (
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6112 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="mobile">
            <div className="hide-div">
              {/* <Link href="./" className="items">Home</Link> */}
              <Link href="/about" className="items">
                ABOUT
              </Link>
              <Link href="/project" className="items">
                PROJECTS
              </Link>
              <Link href="/contact" className="items">
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
