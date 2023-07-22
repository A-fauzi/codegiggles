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
    setIsMobileNavOpen(!isMobileNavOpen);
  };

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
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Menu</button>
      </div>
    </>
  );
};

export default NavBar;