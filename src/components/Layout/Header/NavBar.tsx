import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "About Us", to: "/about" },
    { id: 2, name: "Contact Us", to: "/contact-us" },
    { id: 3, name: "Privacy Police", to: "/privacy-police" },
    ]
  return (
    <>
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
      <div className="block md:hidden mt-4">
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
      </div>
    </>
  )
}

export default NavBar
