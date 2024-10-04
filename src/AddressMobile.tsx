import React from 'react';
import home from './images/home.png'; // Import the image
import work from './images/work.png'; // Import the image
import downarrow from './images/downarrow.png'; // Import the image
import UserCircle3 from './images/UserCircle3.png'; // Import the image
import List from './images/List.png'; // Import the image
import locationpin from './images/locationpin.png'; // Import the image
import locationmap from './images/locationmap.png'; // Import the image
import aflogo from './images/aflogo.png'; // Import the image

const AddressForm: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div
        className="mx-auto bg-white p-4 rounded-lg "
        style={{ width: '390px', height: '844px' }} // Exact dimensions of iPhone 14
      >
        <div className="flex items-center justify-between mb-4">
        <img src={aflogo} className="w-12 h-8" alt="aflogo" />
        <div>
            <div className="text-xs -ml-8 font-bold">AnyFeast, Recipe Kit delivery</div>
            <div className="text-xs -ml-8 font-normal text-gray-600">Open in AnyFeast App</div>
        </div>
        <button className="bg-[#0082E1]  text-white text-xs font-bold px-6 py-2 rounded-full">OPEN</button>
        </div>

        <div className="flex items-center justify-between mb-4">
        <img src={locationmap} className="w-5 h-5 ml-3" alt="locationmap" />
          <div className="text-gray-700 mt-2 mb-2 text-sm">
            Bangalore, Siri Anjaneya Temple..
          </div>
          <div className="flex space-x-4">
          <img src={downarrow} className="w-3 h-2 mt-1" alt="downarrow" />
          <img src={UserCircle3} className="w-4 h-4" alt="UserCircle3" />
          <img src={List} className="w-5 h-5" alt="List" />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
          <img src={locationpin} className="w-4 h-5" alt="locationpin" />
            <span className="text-base ml-2 font-semibold">Church Street</span>
          </div>
          <p className="text-xs text-[#AAAAAA]">
            Church Street, Karnataka 560100, India
          </p>
        </div>

        <form className="flex-col space-y-8">
  <div className="relative">
    <input
      type="text"
      id="floating_outlined"
      className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
    />
    <label
      htmlFor="floating_outlined"
      className="absolute text-xs text-[#AAAAAA] duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] bg-white px-2 left-1 peer-placeholder-shown:scale-100 -peer-placeholder-shown:translate-y-full peer-placeholder-shown:top-2/3 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4"
    >
      House no. / Floor no.
    </label>
  </div>
  <div className="relative">
    <input
      type="text"
      id="floating_outlined"
      className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
    />
    <label
      htmlFor="floating_outlined"
      className="absolute text-xs text-[#AAAAAA] duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] bg-white px-2 left-1 peer-placeholder-shown:scale-100 -peer-placeholder-shown:translate-y-full peer-placeholder-shown:top-2/3 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4"
    >
      Apartment/Road/Area
    </label>
  </div>


  <div className="relative">
    <input
      type="text"
      id="floating_outlined"
      className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-[#AAAAAA] appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
    />
    <label
      htmlFor="floating_outlined"
      className="absolute text-xs text-[#AAAAAA] duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] bg-white px-2 left-1 peer-placeholder-shown:scale-100 -peer-placeholder-shown:translate-y-full peer-placeholder-shown:top-2/3 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4"
    >
      Direction To Reach
    </label>
  </div>
  <div>
    <label className="block text-[#AAAAAA] text-xs font-normal mb-2">Direction</label>
    <textarea
      className="block w-full border border-[#AAAAAA] rounded-lg p-2"
      placeholder=""
      rows={3}
    ></textarea>
  </div>
</form>


        <div className="mt-6">
          <p className="text-sm font-medium mb-2">Add Address as</p>
          <div className="flex space-x-8 mb-3">
            <button className="flex items-center text-xs border border-[#AAAAAA] rounded-lg px-3 py-2">
              <img src={home} className="w-4 h-4 mr-1" alt="Home Icon" />
              Home
            </button>
            <button className="flex items-center text-xs text-[#AAAAAA] border border-[#AAAAAA] rounded-lg px-3 py-2">
              <img src={work} className="w-4 h-3 mr-1" alt="Home Icon" />
              Work
            </button>
            <button className="inline-flex items-center text-xs text-[#AAAAAA] border border-[#AAAAAA] rounded-lg px-2 py-2">
              <img src={work} className="w-4 h-3 mr-1 " alt="Home Icon" />
              Friends & Family
            </button>
          </div>
          <button className="flex items-center text-xs text-[#AAAAAA] border border-[#AAAAAA] rounded-lg px-3 py-2 ">
              <img src={work} className="w-4 h-3 mr-1" alt="Home Icon" />
              Other
            </button>
        </div>

        <button className="w-full bg-[#0B6E27] text-white rounded-lg p-2 mt-12">
          Add Address
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
