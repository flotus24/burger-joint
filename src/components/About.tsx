import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import burgerModel from "../assets/burger-model.jpg";
import friesModel from "../assets/fries-model.jpg";

const About = () => {
  useGSAP(() => {
    const paragraphSplit = new SplitText("#paragraph", { type: "lines" });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about", //animated element
        start: "top center", //when the top of ainimated element reach the center of viewport
      },
    });

    scrollTimeline.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      delay: 0.5,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "15% bottom",
          end: "bottom-=40px top",
          // markers: true,
          scrub: 3,
        },
      })
      .to("#image1", { y: 120 }, 0) //third parameter is position parameter
      .to("#image2", { y: 120 }, 0);
  }, []);

  return (
    <section id="about">
      <div className="flex h-screen mb-30">
        <div className="w-[50vw] relative">
          <img
            id="image1"
            src={friesModel}
            alt="photo of fries"
            className="abs-model-1 lg:w-[22rem] md:w-60 sm:w-48 w-36 z-10"
          />
          <img
            id="image2"
            src={burgerModel}
            alt="photo of burger"
            className="abs-model-2 lg:w-[32rem] md:w-96 sm:w-64 w-48"
          />
        </div>
        <div className="w-[50vw] relative">
          <div className="second-half-container w-full max-h-[100vh] bg-amber-300">
            <p
              id="paragraph"
              className="sm:text-xl md:text-2xl font-medium text-[#d32222] lg:px-16 lg:py-10 sm:px-10 sm:py-8 pl-4 pr-3 py-3 m-0 leading-[150%]"
            >
              Welcome to{" "}
              <span className="font-sauce-tomato md:text-lg">
                Burger Joint,
              </span>{" "}
              where we believe that a great burger is more than just a meal—
              <span className=" text-green-700">it's an experience</span>. We're
              a team of food lovers dedicated to crafting the perfect burger,
              from the
              <span className=" text-green-700"> juiciest patties </span>
              made with high quality beef to the
              <span className=" text-green-700"> freshest toppings </span>
              and our
              <span className=" text-green-700">
                {" "}
                signature housemade sauces.{" "}
              </span>
              We're proud to be your neighborhood spot, a place where friends
              and family can gather to enjoy good food and great company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
