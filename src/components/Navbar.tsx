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
    <nav className="fixed z-50 w-full">
      <div className="flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p className="text-3xl">Burger Joint</p>
        </a>

        <ul className="hidden md:flex flex-center lg:gap-12 gap-7">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-xl">
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
