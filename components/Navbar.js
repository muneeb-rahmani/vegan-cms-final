import Link from "next/link";
import React, { useState } from "react";
import Logo from "../public/assets/logo-header.png";
import Image from "next/image";




const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      

      <div className="w-4/5 mx-auto py-5">
        <nav className="border-gray-200">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <Link className="flex" href="/">
              <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <Image
                  src={Logo}
                  width={200}
                  height={200}
                  alt="Ac Repair Logo"
                />
              </span>
            </Link>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
              <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-lg md:font-medium">
                <li>
                  <Link
                    href="/"
                    className="bg-teal-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-teal-700 md:p-0 rounded focus:outline-none"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-teal-700 md:p-0 active:bg-teal-500"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <div>
                    <div className="dropdown inline-block relative">
                      <Link href="/location">
                      <button className="text-gray-700 rounded inline-flex items-center">
                        <span className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-teal-700 md:p-0 active:bg-teal-500">Location</span>
                        {/* <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                        </svg> */}
                      </button>
                      </Link>
                      {/* <ul className="dropdown-menu absolute hidden bg-slate-50 text-gray-700 pt-1">
                        <li className="">
                          <Link
                            className="rounded-t hover:bg-gray-200 text-sm py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            One
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="hover:bg-gray-200 py-2 px-4 text-sm block whitespace-no-wrap"
                            href="#"
                          >
                            Two
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            className="rounded-b hover:bg-gray-200 text-sm py-2 px-4 block whitespace-no-wrap"
                            href="#"
                          >
                            Three 
                          </Link>
                        </li>
                      </ul> */}
                    </div>
                  </div>
                  {/* <Link href='/services'>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-teal-700 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                  >
                    Our Services{" "}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  </Link> */}
                  {/* <!-- Dropdown menu --> */}
                  {/* <div
                    id="dropdownNavbar"
                    className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
                  >
                    <ul className="py-1" aria-labelledby="dropdownLargeButton md:text-lg md:font-medium">
                      <li>
                        <Link
                          href="/services/crawl-space-repair"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                          Crawl Space Encapsulation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/sump-pump-repair"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                         Sump Pump Repair
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/foundation-repair"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                         Foundation Repair
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/concrete-lifting-and-leveling-service"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                         Concrete Lifting & Leveling
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/insulation-installation"
                          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                        >
                         Insulation Installation
                        </Link>
                      </li>
                    </ul>
                  </div> */}
                </li>
                {/* <li>
                  <Link
                    href="/blog"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-teal-700 md:p-0"
                  >
                    Blog
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-teal-700 md:p-0"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;