const Navbar = () => {
  type NavLinks = {
    id: string;
    title: string;
  };

  const navLinks: NavLinks[] = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About Us",
    },
    {
      id: "menu",
      title: "Menu",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <nav className="fixed z-50 w-full shadow-2xl">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
        <a href="#home" className="flex items-center gap-5">
          <img src="/images/logo.png" alt="logo" />
          <p className="text-2xl font-sauce-tomato">Burger Joint</p>
        </a>

        <ul className="hidden md:flex flex-center lg:gap-12 gap-5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-4xl font-bold-serif leading-0"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
