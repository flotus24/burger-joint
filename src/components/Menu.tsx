import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IoArrowRedo, IoArrowUndo } from "react-icons/io5";

const Menu = () => {
  // const contentRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const sliderLists = [
    {
      id: 1,
      name: "Signature Cheeseburger",
      image: "/images/burger-menu.png",
      title: "Classic Done Right",
      description:
        "A perfectly grilled, juicy beef patty topped with melted cheese, crisp lettuce, tomato, and our signature sauce on a toasted bun. It's the ultimate comfort staple.",
    },
    {
      id: 2,
      name: "Chicken Sammy",
      image: "/images/chicken-sandwich-menu.png",
      title: "Crisp, Craveable, & Fully Loaded",
      description:
        "A tender chicken breast, fried or grilled to perfection, dressed with fresh toppings and a zesty spread. A lighter, yet just as satisfying, handheld favorite.",
    },
    {
      id: 3,
      name: "Shawarma",
      image: "/images/shawarma-menu.png",
      title: "Spiced to Perfection",
      description:
        "Thinly shaved, marinated meat (chicken or beef) roasted on a vertical spit, wrapped in warm pita bread with rich garlic sauce, crisp veggies, and pickles. A flavor journey in every bite.",
    },
    {
      id: 4,
      name: "Furious Fries",
      image: "/images/fries-menu.png",
      title: "The Golden Standard",
      description:
        "Crispy on the outside, fluffy on the inside, and perfectly salted. Our signature golden fries are the essential side dish that makes every meal better.",
    },
  ];

  //synchronous
  useGSAP(() => {
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "75% bottom",
        // markers: true,
      },
    });

    scrollTimeline
      .fromTo(
        ".menu img",
        { opacity: 0, xPercent: -100 },
        { xPercent: 0, opacity: 1, duration: 0.75, ease: "power1.inOut" }
      )
      .fromTo(
        ".details h2",
        { opacity: 0, yPercent: 100 },
        { yPercent: 0, opacity: 1, ease: "power1.inOut" },
        "<"
      )
      .fromTo(
        ".details p",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power1.inOut" }
      );
  }, [currentIndex]);

  //asynchronous

  // useGSAP(() => {
  //   gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
  //   gsap.fromTo(
  //     ".menu img",
  //     { opacity: 0, xPercent: -100 },
  //     { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
  //   );
  //   gsap.fromTo(
  //     ".details h2",
  //     { opacity: 0, yPercent: 100 },
  //     { yPercent: 0, opacity: 100, ease: "power1.inOut" }
  //   );
  //   gsap.fromTo(
  //     ".details p",
  //     { opacity: 0, yPercent: 100 },
  //     { yPercent: 0, opacity: 100, ease: "power1.inOut" }
  //   );
  //   gsap.fromTo(
  //     "#bg-menu",
  //     {
  //       scale: 0,
  //     },
  //     {
  //       opacity: 100,
  //       scale: 1.5,
  //       duration: 1.2,
  //       ease: "power2.inOut",
  //     }
  //   );
  // }, [currentIndex]);

  const totalMenu = sliderLists.length;

  const goToSlide = (index: number) => {
    const newIndex: number = (index + totalMenu) % totalMenu;

    setCurrentIndex(newIndex);
  };

  const getMenuAt = (indexOffset: number) => {
    return sliderLists[(currentIndex + indexOffset + totalMenu) % totalMenu];
  };

  const currentMenu = getMenuAt(0);
  const prevMenu = getMenuAt(-1);
  const nextMenu = getMenuAt(1);

  return (
    <section id="menu">
      <div className="relative md:w-full w-auto h-screen 2xl:px-0 px-5 md:pt-30 pt-10 bg-radial from-[#fff5ce] to-amber-300 from-20% to-90%">
        <nav className="grid md:grid-cols-4 grid-cols-2 md:gap-30 gap-10 sm:mb-32 mb-10 relative z-10 md:max-w-6xl md:mx-auto">
          {sliderLists.map((menu, index) => {
            const isActive: boolean = index === currentIndex;
            return (
              <button
                key={menu.id}
                className={`${
                  isActive
                    ? "opacity-100 text-green-700"
                    : "opacity-60 hover:border-[#db4242]"
                } font-sauce-tomato md:text-3xl text-2xl hover:opacity-100 border-b-2 border-transparent cursor-pointer`}
                onClick={() => goToSlide(index)}
              >
                {menu.name}
              </button>
            );
          })}
        </nav>

        <div className="flex flex-col justify-between items-center container mx-auto relative">
          <div className="flex items-center justify-between w-full absolute">
            <button
              className="text-left cursor-pointer relative"
              onClick={() => goToSlide(currentIndex - 1)}
            >
              <span className="hidden md:block">
                <p className="font-sauce-tomato w-32 text-xl">
                  {prevMenu.name}
                </p>
              </span>
              <IoArrowUndo size={40} className="absolute z-10" />
            </button>

            <button
              className="text-right cursor-pointer relative"
              onClick={() => goToSlide(currentIndex + 1)}
            >
              <span className="hidden md:block">
                <p className="font-sauce-tomato w-32 text-xl">
                  {nextMenu.name}
                </p>
              </span>

              <IoArrowRedo size={40} className="right-0 absolute z-10" />
            </button>
          </div>

          <div className="menu flex-center">
            <img src={currentMenu.image} className="object-contain" />
          </div>

          <div className="flex max-md:flex-col gap-10 md:items-center justify-between w-full lg:absolute bottom-0">
            {/* <div ref={contentRef} className="space-y-4 lg:translate-y-20">
            <p className="md:text-6xl text-3xl text-yellow max-w-40">
              {currentMenu.name}
            </p>
          </div> */}

            <div className="details space-y-5 md:max-w-md text-left">
              <h2 className="md:text-5xl text-3xl font-bold sm:leading-14">
                {currentMenu.title}
              </h2>
              <p className="md:text-2xl text-[#d32222]">
                {currentMenu.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
