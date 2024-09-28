import React from 'react';
import tickmark from "./images/tickmark.png"


const PricingPlans = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-red-600">AnyFeast</div>
          <ul className="flex space-x-8">
            <li><a href="#" className="text-gray-600 hover:text-black">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Blog</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Shop</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black">Recipe</a></li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-black">Login</button>
            <button className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-red-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 21h18M3 8h18M3 16h18" />
              </svg>
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">1</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}0
      <section className="text-center my-12">
        <h1 className="text-5xl font-bold">Upgrade to Premium</h1>
        <p className="text-3xl mt-4">Enjoy our special discounts, exclusive perks, and many more benefits with our</p>
        <p className="text-3xl">premium plans!</p>
      </section>

      {/* Stacked Pricing Cards */}
      <div className="container mt-28 mx-auto px-6">
        <div className="relative flex justify-center items-stretch gap-6">
          {/* Basic Plan - Left */}
          <div className="relative w-full h-full md:w-1/4 border border-[#FF8A00] rounded-lg p-6 shadow-lg text-center bg-white z-10 transform translate-y-10 translate-x-8">
            <h2 className="text-3xl mr-8 font-bold">Basic</h2>
            <p className="text-2xl text-gray-400 text-left ml-28">₹<span className="text-7xl text-[#000000] align-text-top font-bold">0</span></p>
            <p className="text-xl text-gray-400 text-right -mt-3 mr-32">/m</p> 
            <ul className="text-left mt-6 space-y-4 text-sm">
            <li className="flex flex-col items-start">
            <div className="flex items-center">
              {/* Image in front of text */}
              <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2 -ml-3" />
              Free First Delivery.
            </div>
            <hr className="w-full -ml-2 mt-2" />
          </li>

          <li className="flex flex-col items-start">
            <div className="flex items-center">
              <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2 -ml-3" />
              Free Delivery on all orders above ₹599.
            </div>
            <hr className="w-full -ml-2 mt-2" />
          </li>

          <li className="flex flex-col items-start">
            <div className="flex items-center">
              <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2 -ml-3" />
              Basic access to a limited collection of recipes for common ingredients.
            </div>
            <hr className="w-full -ml-2 mt-2" />
          </li>

          <li className="flex flex-col items-start">
            <div className="flex items-center">
              <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2 -ml-3" />
              Basic AI suggestions for ingredient combinations and simple meal ideas.
            </div>
            <hr className="w-full mb-5 -ml-2 mt-2" />
          </li>


            </ul> 
            
            <button className="mt-64 w-full mb-16 py-2 bg-[#0B6E27] text-white rounded-lg">Free Subscription</button>
          </div>


          {/* Standard Plan - Center (Stacked on top) */}
          <div className="relative w-full h-full md:w-1/3 border border-[#FF8A00] rounded-lg p-6 shadow-2xl text-center bg-white z-20 scale-105">
            <h2 className="text-4xl mr-1 font-bold">Standard</h2>
              <p className="text-2xl text-gray-400 text-left ml-28">₹<span className="text-8xl text-[#000000] align-text-top font-bold">149</span></p>
              <p className="text-xl text-gray-400 text-right -mt-3 mr-32">/m</p> 
            <p className="text-[#0B6E27] mt-5">Monthly</p>
            <ul className="text-left mt-5 space-y-2 ml-16 mr-16 text-sm">
            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2 -ml-3" />
                10% discount on all meal kit orders.
              </div>
              <hr className="w-full -ml-2 mt-2" />
            </li>

            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2 -ml-3" />
                Free Delivery on all orders above ₹299.
              </div>
              <hr className="w-full -ml-2 mt-2" />
            </li>

            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2 -ml-3" />
                Access to a broader range of recipes, including more exotic and advanced options.
              </div>
              <hr className="w-full -ml-2 mt-2" />
            </li>

            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2 -ml-3" />
                Advanced AI-driven cooking tips and techniques tailored to the user's scanned ingredients.
              </div>
              <hr className="w-full -ml-2 mt-2" />
            </li>

            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2 -ml-3" />
                Seasonal Recipes: Access to a collection of recipes curated for each season.
              </div>
              <hr className="w-full -ml-2 mt-2" />
            </li>

            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2 -ml-3" />
                Receive a special ingredient not available to Basic members, along with unique recipes to try.
              </div>
              <hr className="w-full -ml-2 mt-2" />
            </li>

            </ul>
            <button className="mt-24 mb-24 w-3/4 py-2 bg-[#0B6E27] text-white rounded-lg">Buy Now ₹149</button>
          </div>

          {/* Premium Plan - Right */}
          <div className="relative w-full h-full md:w-1/4 border border-[#FF8A00] rounded-lg ml-5 p-6 shadow-lg text-center bg-white z-10 transform translate-y-10 -translate-x-10">
          <h2 className="text-3xl ml-5 font-bold">Premium</h2>
            <p className="text-2xl text-gray-400 text-left ml-24">₹<span className="text-7xl text-[#000000] align-text-top font-bold">599</span></p>
            <p className="text-xl text-gray-400 text-right mr-16">/m</p> 
            <ul className="text-left mt-6 space-y-2 text-sm">
            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2" />
                20% discount on all meal kit orders.
              </div>
              <hr className="w-full mt-2" />
            </li>

            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2" />
                Free Delivery on all orders.
              </div>
              <hr className="w-full mt-2" />
            </li>

            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2" />
                Full access to the entire recipe library, including premium and seasonal recipes.
              </div>
              <hr className="w-full mt-2" />
            </li>

            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2" />
                Advanced AI-driven cooking tips and techniques tailored to the user's scanned ingredients.
              </div>
              <hr className="w-full mt-2" />
            </li>

            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2" />
                Seasonal Recipes: Access to a collection of recipes curated for each season.
              </div>
              <hr className="w-full mt-2" />
            </li>

            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2" />
                Receive a special ingredient not available to Basic members, along with unique recipes to try.
              </div>
              <hr className="w-full mt-2" />
            </li>

            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2" />
                Save your favourite recipes and share custom recipes with friends and family.
              </div>
              <hr className="w-full mt-2" />
            </li>

            <li className="flex flex-col items-start">
              <div className="flex items-center">
                <img src={tickmark} alt="Icon" className="h-7 w-7 mr-2" />
                Access to special discounts from partner brands and stores.
              </div>
              <hr className="w-full mt-2" />
            </li>

            </ul>
            <button className="mt-6 w-full py-2 mb-16 bg-[#0B6E27] text-white rounded-lg">Buy Now ₹599</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
