import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

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
          start: "top bottom",
          end: "bottom bottom",
          scrub: 3,
        },
      })
      .to("#image1", { y: 120 }, 0) //third parameter is position parameter
      .to("#image2", { y: 120 }, 0);
  }, []);

  return (
    <section id="about">
      <div className="flex h-screen">
        <div className="md:w-[50vw] relative">
          <div className="abs-center bg-red-700">
            <img
              id="image1"
              src="/images/fries (1).jpg"
              alt="photo of fries"
              className="abs-model-1 lg:w-[22rem] md:w-60 z-10"
            />
            <img
              id="image2"
              src="/images/eat-model.jpg"
              alt="photo of burger"
              className="abs-model-2 lg:w-[32rem] md:w-72"
            />
          </div>
        </div>
        <div className="w-[50vw] relative">
          <div className="second-half-container w-full max-h-[100vh] bg-amber-300">
            <p
              id="paragraph"
              className="sm:text-xl md:text-2xl font-medium text-[#d32222] lg:px-16 lg:py-10 md:px-10 md:py-8 px-8 py-6"
            >
              Welcome to <span className="font-sauce-tomato">Burger Joint</span>
              , where we believe that a great burger is more than just a meal—
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
