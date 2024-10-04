import React from "react";
import tickmark from "./images/tickmark.png";

const PricingPlans = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">AnyFeast</div>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-black">
                Recipe
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black">Login</button>
            <button className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18M3 21h18M3 8h18M3 16h18"
                />
              </svg>
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold">Upgrade to Premium</h1>
        <p className="text-lg md:text-3xl mt-4">
          Enjoy our special discounts, exclusive perks, and many more benefits
          with our
        </p>
        <p className="text-lg md:text-3xl">premium plans!</p>
      </section>

      {/* Pricing Plans */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Basic Plan */}
          <div className="w-full md:w-4/5 border border-[#FF8A00] rounded-lg p-6 shadow-lg text-center bg-white z-10 transform md:translate-y-1 md:translate-x-8">
            <h2 className="text-3xl font-bold">Basic</h2>
            <p className="text-2xl mt-4">
              ₹<span className="text-5xl font-bold">0</span>/m
            </p>
            <ul className="mt-6 text-sm space-y-4 text-left">
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>Free First Delivery.</span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>Free Delivery on orders above ₹599</span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>
                  Basic access to a limited collection of recipes for common
                  ingredients.
                </span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>
                  Basic AI suggestions for ingredient combinations and simple
                  meal ideas.
                </span>
              </li>
            </ul>
            <button className="w-11/12 py-2 mt-52 bg-[#0B6E27] text-base text-white rounded-lg">
              Free Subscription
            </button>
          </div>

          {/* Standard Plan */}
          <div className="w-full md:w-10/12 border border-[#FF8A00] rounded-lg p-6 shadow-2xl text-center bg-white z-20 transform md:scale-105 md:relative md:-translate-y-5">
            <h2 className="text-4xl font-bold">Standard</h2>
            <p className="text-2xl mt-4">
              ₹<span className="text-5xl font-bold">149</span>/m
            </p>
            <ul className="mt-6 mr-12 ml-12 text-sm space-y-4 text-left">
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>10% discount on all meal kit orders.</span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>Free Delivery on all orders above ₹299</span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>
                  Access to a broader range of recipes, including more exotic
                  and advanced options.
                </span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>
                  Advanced AI-driven cooking tips and techniques tailored to the
                  user's scanned ingredients.
                </span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>
                  Seasonal Recipes Access to a collection of recipes curated for
                  each season.
                </span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>
                  Receive a special ingredient not available to Basic members,
                  along with unique recipes to try.
                </span>
              </li>
            </ul>
            <button className="mt-32 w-11/12 mb-20 py-2 bg-[#0B6E27] text-base text-white rounded-lg">
              Buy Now ₹149
            </button>
          </div>

          {/* Premium Plan */}
          <div className="w-full md:w-4/5 border border-[#FF8A00] rounded-lg p-6 shadow-lg text-center bg-white z-10 transform md:translate-y-1 md:-translate-x-10">
            <h2 className="text-3xl font-bold">Premium</h2>
            <p className="text-2xl mt-4">
              ₹<span className="text-5xl font-bold">599</span>/m
            </p>
            <ul className="mt-6 md:ml-8 text-sm space-y-4 text-left">
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>20% discount on all meal kit orders.</span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>Free Delivery on all orders</span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>
                  Full access to the entire recipe library, including premium
                  and seasonal recipes.
                </span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>
                  Advanced AI-driven cooking tips and techniques tailored to the
                  user's scanned ingredients.
                </span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>
                  Seasonal Recipes Access to a collection of recipes curated for
                  each season.
                </span>
              </li>
              <li className="flex items-start">
                <img src={tickmark} alt="Tick Mark" className="h-6 w-6 mr-4" />
                <span>
                  Receive a special ingredient not available to Basic members,
                  along with unique recipes to try.
                </span>
              </li>
            </ul>
            <button className="mt-24 md:ml-8  w-11/12 py-2 bg-[#0B6E27] text-base text-white rounded-lg">
              Buy Now ₹599
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
