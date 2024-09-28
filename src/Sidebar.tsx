import React, { useState } from 'react';

import Package from './images/Package.png';
import UserList from './images/UserList.png';
import UserCircle2 from './images/UserCircle2.png';
import SmileyNervous from './images/SmileyNervous.png';
import BellRinging from './images/BellRinging.png';
import SignOut from './images/SignOut.png';

const Sidebar = () => {
  // State to track which button is clicked
  const [activeButton, setActiveButton] = useState<string | null>(null);

  // Function to handle button click
  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="bg-white mr-6">
      {/* Orders Button */}
      <button
        onClick={() => handleClick('orders')}
        className={`block mb-1 pr-10 rounded-sm w-full text-left ${
          activeButton === 'orders' ? 'text-[#C30F16] border-l-4 border-[#C30F16]' : ''
        }`}
      >
        <div className="flex items-start mt-1 ml-1">
          <div className="rounded-full w-8 h-8 mr-4 mt-1 bg-[#FFE2E2] flex items-center justify-center">
            <img src={Package} alt="Orders" className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm mb-0.5 font-semibold">Orders</h2>
            <p className="text-xs mb-1 text-gray-500 flex items-center">See All your Orders</p>
          </div>
        </div>
      </button>

      {/* Addresses Button */}
      <button
        onClick={() => handleClick('addresses')}
        className={`block mb-1 pr-10 rounded-sm w-full text-left ${
          activeButton === 'addresses' ? 'text-[#C30F16] border-l-4 border-[#C30F16]' : ''
        }`}
      >
        <div className="flex items-start ml-1 mt-2">
          <div className="rounded-full w-8 h-8 mr-4 mt-1 bg-[#FFE2E2] flex items-center justify-center">
            <img src={UserList} alt="Addresses" className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm mb-0.5 font-semibold">Addresses</h2>
            <p className="text-xs mb-1 text-gray-500 flex items-center">Edit Addresses</p>
          </div>
        </div>
      </button>

      {/* Profile Button */}
      <button
        onClick={() => handleClick('profile')}
        className={`block mb-1 pr-10 rounded-sm w-full text-left ${
          activeButton === 'profile' ? 'text-[#C30F16] border-l-4 border-[#C30F16]' : ''
        }`}
      >
        <div className="flex items-start   ml-1 mt-2">
          <div className="rounded-full w-8 h-8 mr-4 mt-1 bg-[#FFE2E2] flex items-center justify-center">
            <img src={UserCircle2} alt="Profile" className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm mb-0.5 font-semibold">Profile</h2>
            <p className="text-xs  mb-1 text-gray-500 flex items-center">Make Changes To Your Account</p>
          </div>
        </div>
      </button>

      {/* Allergies & Dislikes Button */}
      <button
        onClick={() => handleClick('allergies')}
        className={`block mb-1 pr-10 rounded-sm w-full text-left ${
          activeButton === 'allergies' ? 'text-[#C30F16] border-l-4 border-[#C30F16]' : ''
        }`}
      >
        <div className="flex items-start   ml-1 mt-2">
          <div className="rounded-full w-8 h-8 mr-4 mt-1 bg-[#FFE2E2] flex items-center justify-center">
            <img src={SmileyNervous} alt="Allergies & Dislikes" className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm mb-0.5 font-semibold">Allergies & Dislikes</h2>
            <p className="text-xs mb-1  text-gray-500 flex items-center">Help us with your Allergies & Dislikes</p>
          </div>
        </div>
      </button>

      {/* Notifications Button */}
      <button
        onClick={() => handleClick('notification')}
        className={`block mb-1 pr-10 rounded-sm w-full text-left ${
          activeButton === 'notification' ? 'text-[#C30F16] border-l-4 border-[#C30F16]' : ''
        }`}
      >
        <div className="flex items-start   ml-1 mt-2">
          <div className="rounded-full w-8 h-8 mr-4 mt-1 bg-[#FFE2E2] flex items-center justify-center">
            <img src={BellRinging} alt="Notifications" className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm mb-0.5 font-semibold">Notification</h2>
            <p className="text-xs mb-1  text-gray-500 flex items-center">Get Notified on all exciting offers</p>
          </div>
        </div>
      </button>

      {/* About Us Button */}
      <button
        onClick={() => handleClick('about')}
        className={`block mb-1 pr-10 rounded-sm w-full text-left ${
          activeButton === 'about' ? 'text-[#C30F16] border-l-4 border-[#C30F16]' : ''
        }`}
      >
        <div className="flex items-start   ml-1 mt-2">
          <div className="rounded-full w-8 h-8 mr-4 mt-1 bg-[#FFE2E2] flex items-center justify-center">
            <img src={BellRinging} alt="About Us" className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm mb-0.5 font-semibold">About Us</h2>
            <p className="text-xs  mb-1 text-gray-500 flex items-center">Know More About Us</p>
          </div>
        </div>
      </button>

      {/* Log Out Button */}
      <button
        onClick={() => handleClick('logout')}
        className={`block mb-1 pr-10 rounded-sm w-full text-left ${
          activeButton === 'logout' ? 'text-[#C30F16] border-l-4 border-[#C30F16]' : ''
        }`}
      >
        <div className="flex items-start   ml-1 mt-2">
          <div className="rounded-full w-8 h-8 mr-4 mt-1 bg-[#FFE2E2] flex items-center justify-center">
            <img src={SignOut} alt="Log Out" className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm mb-0.5 font-semibold">Log out</h2>
            <p className="text-xs mb-4  text-gray-500 flex items-center">Further secure your account for safety</p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
