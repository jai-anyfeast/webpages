// src/App.js
import React from 'react';
import './App.css';  // Importing the custom CSS file if needed
import UserCircle from './images/UserCircle.png'; // Import the image
import Sidebar from './Sidebar';


function Sidebarmain() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center rounded-lg mb-5">
        <div className="flex items-center space-x-4">
          <img
            src="https://dummyimage.com/50x50/000/fff&text=Logo"
            alt="AnyFeast Logo"
            className="h-8"
          />
          <nav className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-black">About Us</a>
            <a href="#" className="hover:text-black">Blog</a>
            <a href="#" className="hover:text-black">Shop</a>
            <a href="#" className="hover:text-black">Recipe</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Login</span>
          <button className="relative">
            <img
              src="https://dummyimage.com/30x30/000/fff&text=🔴"
              alt="Cart"
            />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </header>

      {/* Main layout */}
      <div className="flex">
        {/* Sidebar */}
        <div>
          <div className="flex items-start mb-5">
            <img
              src={UserCircle}
              alt="Profile"
              className="rounded-full w-14 h-14"
            />
            <div>
              <h2 className="text-base font-semibold">Ojas Karmarkar</h2>
              <p className="text-xs text-gray-500">8547299710</p>
              <p className="text-xs text-gray-500">ojas@123gmail.com</p>
            </div>
          </div>

          <div className="bg-white">
          <Sidebar/>
          </div>
        </div>

      {/* Main content */}
      <div className="flex-1 p-5">
        <h1 className="text-2xl font-bold text-red-500 mb-5">Active Order</h1>
        <div className="bg-white p-4 rounded-lg shadow mb-5">
          <h3 className="text-lg font-semibold mb-2">Arriving By Today</h3>
          <p>Order Number: #00007023</p>
          <p>Total: ₹800</p>
        </div>

        <h2 className="text-xl font-bold mb-5">Past Orders</h2>
        <div className="bg-white p-4 rounded-lg shadow mb-5">
          <h3 className="text-lg font-semibold text-green-500">Delivered</h3>
          <p>Arrived on Apr 15 2024</p>
          <p>Order Number: #00007023</p>
          <p>Total: ₹800</p>
          <div className="flex mt-3">
            {/* Product images */}
            <img className="w-12 h-12 rounded-md mr-2" src="https://via.placeholder.com/50" alt="product" />
            <img className="w-12 h-12 rounded-md mr-2" src="https://via.placeholder.com/50" alt="product" />
            <img className="w-12 h-12 rounded-md mr-2" src="https://via.placeholder.com/50" alt="product" />
            <img className="w-12 h-12 rounded-md" src="https://via.placeholder.com/50" alt="product" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-green-500">Delivered</h3>
          <p>Arrived on Apr 30 2024</p>
          <p>Order Number: #00007023</p>
          <p>Total: ₹800</p>
          <div className="flex mt-3">
            {/* Product images */}
            <img className="w-12 h-12 rounded-md mr-2" src="https://via.placeholder.com/50" alt="product" />
            <img className="w-12 h-12 rounded-md mr-2" src="https://via.placeholder.com/50" alt="product" />
            <img className="w-12 h-12 rounded-md mr-2" src="https://via.placeholder.com/50" alt="product" />
            <img className="w-12 h-12 rounded-md" src="https://via.placeholder.com/50" alt="product" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebarmain;
