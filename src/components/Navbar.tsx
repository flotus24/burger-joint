import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
    const navTransition = gsap;

    navTransition.fromTo(
      "#navbar",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#ffd230",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "nav",
          start: "bottom top",
          scrub: 2, // Links the animation's progress to the scroll position
          toggleActions: "restart none none none",
        },
      }
    );
  }, []);

  // Make sure scrollTrigger applied after the page is loaded
  useEffect(() => {
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleLoad);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <nav id="navbar" className="fixed z-50 w-full shadow-2xl">
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
                className="text-4xl font-bold-serif leading-0 hover:text-green-700 duration-300"
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
