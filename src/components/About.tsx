import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="flex h-screen">
        <div className="md:w-[50vw] relative">
          <div className="abs-center bg-red-700">
            <img
              src="/images/fries (1).jpg"
              alt="burger model"
              className="abs-model-1 lg:w-[22rem] md:w-48 z-50"
            />
            <img
              src="/images/eat-model.jpg"
              alt="burger model"
              className="abs-model-2 lg:w-[32rem] md:w-72"
            />
          </div>
        </div>
        <div className="w-[50vw] relative">
          <div className="second-half-container w-full max-h-[100vh] bg-amber-300">
            <p className="sm:text-xl md:text-2xl font-medium text-[#d32222] lg:px-16 lg:py-10 md:px-10 md:py-8 px-8 py-6">
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
                signature house-made sauces.
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
