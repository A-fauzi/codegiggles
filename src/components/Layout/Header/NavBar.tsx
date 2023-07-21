import Link from "next/link"

const NavBar: React.FC = () => {
  const links = [
    { id: 1, name: "About Us", to: "/about" },
    { id: 2, name: "Contact Us", to: "/contact-us" },
    { id: 3, name: "Privacy Police", to: "/privacy-police" },
    ]
  return (
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
      
      {/* Mobile Navbar */}
      <div className="block md:hidden mt-4">
        <ul className="flex flex-col">
          {links.map((link) => (
            <li
              key={link.id}
              className="block my-2 text-black text-gray-500 dark:text-white nav"
            >
              <Link href={link.to}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavBar
