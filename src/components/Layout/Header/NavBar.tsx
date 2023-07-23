'use client'
 
// import { useState } from 'react'
import Link from "next/link";
// import MobileNavModal from "./NavbarMobile";

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "About Us", to: "/about" },
    { id: 2, name: "Contact Us", to: "/contact-us" },
    { id: 3, name: "Privacy Police", to: "/privacy-police" },
  ];

  // const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

 // const handleToggleMobileNav = () => {
    // setIsMobileNavOpen(!isMobileNavOpen);
  // };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="flex-shrink-0 hidden md:block">
        <ul className="flex flex-row">
          {links.map((link) => (
            <li
              key={link.id}
              className="block ml-4 text-black text-gray-500 dark:text-white nav"
            >
              <Link href={link.to}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="block md:hidden">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm mt-2 px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-expanded="false" data-dropdown-toggle="dropdown-user">
         Menu
        </button>
        
        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul class="py-1" role="none">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
      </div>
    </>
  );
};

export default NavBar;