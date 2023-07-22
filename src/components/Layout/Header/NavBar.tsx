'use client'
 
import { useState } from 'react'
import Link from "next/link";
import MobileNavModal from "./NavbarMobile";

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "About Us", to: "/about" },
    { id: 2, name: "Contact Us", to: "/contact-us" },
    { id: 3, name: "Privacy Police", to: "/privacy-police" },
  ];

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleToggleMobileNav = () => {
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
        <button
          onClick={handleToggleMobileNav}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
        >
          Menu
        </button>
        <MobileNavModal
          isOpen={isMobileNavOpen}
          onClose={() => setIsMobileNavOpen(false)}
          links={links}
        />
      </div>
    </>
  );
};

export default NavBar;