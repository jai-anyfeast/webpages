import React, { useState } from 'react';
import uparrow from "./images/uparrow.png";
import downarrow from "./images/downarrow.png";

function Cookies() {
  const [showCookiePopup, setShowCookiePopup] = useState<boolean>(true);
  const [showManagePopup, setShowManagePopup] = useState<boolean>(false);
  const [expandedTerms, setExpandedTerms] = useState<boolean[]>(Array(8).fill(false));

  const handleAcceptAllCookies = () => {
    setShowCookiePopup(false);
  };

  const handleClosePopup = () => {
    setShowCookiePopup(false);
  };

  const handleManageCookies = () => {
    setShowCookiePopup(false);
    setShowManagePopup(true);
  };

  const handleRejectAllCookies = () => {
    setShowCookiePopup(false);
    setShowManagePopup(false);
  };

  const handleBack = () => {
    setShowCookiePopup(true);
    setShowManagePopup(false);
  };

  const toggleExpandedTerms = (index: number) => {
    setExpandedTerms((prev) =>
      prev.map((term, i) => (i === index ? !term : term))
    );
  };

  return (
    <div className="App">
      {/* Main Screen */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold">Welcome to AnyFeast</h1>
      </div>

      {/* Cookie Popup */}
      {showCookiePopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-4/5">
            {/* Close Button */}
            <button
              className="absolute top-5 right-4 hover:text-black text-5xl"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <h2 className="text-2xl mt-2 mb-4 font-bold">
              Accept the use of cookies
            </h2>
            <p className="text-2xl mt-2">
              At AnyFeast, we and our partners use cookies and similar technologies to improve your experience by storing and accessing information on your device...
            </p>
            <div className="flex justify-end mt-12 mb-2">
              <button
                className="bg-[#0B6E27] text-white font-bold px-4 py-2 w-1/5 rounded mr-10"
                onClick={handleAcceptAllCookies}
              >
                Accept All Cookies
              </button>
              <button
                className="border-[2px] border-[#0B6E27] text-[#0B6E27] w-1/5 font-bold px-4 py-2 rounded"
                onClick={handleManageCookies}
              >
                Manage Preference
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manage Cookies Popup */}
      {showManagePopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-4/5 shadow-lg">
            <div className="flex items-center mb-4">
              <button
                className="text-[#0B6E27] font-bold -mb-2 text-2xl"
                onClick={handleBack}
              >
                &#x276E; <u>Back</u>
              </button>
            </div>
            <div className="flex justify-start mt-6">
              <button
                className="bg-[#0B6E27] text-2xl mr-10 font-bold w-1/4 text-white px-4 py-2 rounded"
                onClick={handleAcceptAllCookies}
              >
                Accept All Cookies
              </button>
              <button
                className="border border-[#0B6E27] font-bold text-[#0B6E27] w-1/6 text-2xl px-4 py-2 rounded"
                onClick={handleRejectAllCookies}
              >
                Reject All
              </button>
            </div>
            <h2 className="text-2xl mt-12 mb-6 font-bold">
              Accept the use of cookies
            </h2>
            <p className="text-2xl mt-2">
            At AnyFeast, we and our partners use cookies and similar technologies to improve your experience by storing and accessing information on your device. By agreeing, we can understand how you interact with our site and deliver personalized content, ads, and services. You can change your preferences anytime by clicking on Edit Privacy Settings at the bottom of the page.
            </p>

            {/* Expanded Terms Section */}
            <div className="mt-8 max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {[
                'Store information on your device for better performance',
                'Use basic data to show relevant ads',
                'Show personalized ads based on your preferences',
                'Build a profile to personalize advertising for you',
                'Personalize content tailored to your interests',
                'Show content that matches your profile',
                'Identify your device for security and performance',
                'Use precise location data for accurate services',
              ].map((text, index) => (
                <div
                  key={index}
                  className="mt-4 border border-[#DADADA] p-4 rounded-lg mr-4"
                >
                  <button
                    className="text-2xl flex justify-between items-center w-full"
                    onClick={() => toggleExpandedTerms(index)}
                  >
                    <span>{`${index + 1}. ${text}`}</span>
                    <img
                      src={expandedTerms[index] ? uparrow : downarrow}
                      alt={expandedTerms[index] ? 'Up arrow' : 'down arrow'}
                      className="w-4 h-4"
                    />
                  </button>
                  {expandedTerms[index] && (
                    <div className="text-2xl mt-2">
                      We use cookies and local storage to ensure that our website runs smoothly on your device...
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cookies;
