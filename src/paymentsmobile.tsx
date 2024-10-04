import "./App.css";
import Gpay from "./images/gpay.png";
import Paytm from "./images/paytm.png";
import Cred from "./images/cred.png";
import Phonepe from "./images/phonepay.png";
import Cod from "./images/cod.png";
import CreditCard from "./images/CreditCard.png";
import Wallet from "./images/Wallet.png";
import location from "./images/location.png";
import truck from "./images/truck.png";
import aflogo from "./images/aflogo.png";
import backcircle from "./images/backcircle.png";
import offer from "./images/offer.png";

function PaymentsMobile() {
  const upiApps = [
    {
      name: "Google Pay",
      image: Gpay,
    },
    {
      name: "PhonePe",
      image: Phonepe,
    },
    {
      name: "Cred UPI",
      image: Cred,
    },
    {
      name: "Paytm",
      image: Paytm,
    },
  ];

  return (
    <div className="bg-[#F5F5F5] max-w-[390px] h-[844px] overflow-auto mx-auto">
      
      <div className="bg-white p-3 w-full flex items-center justify-between">
        <img src={aflogo} className="w-12 h-19" alt="aflogo" />
        <div>
            <div className="text-xs -ml-4 font-bold">AnyFeast, Recipe Kit delivery</div>
            <div className="text-xs -ml-4 font-normal text-gray-600">Open in AnyFeast App</div>
        </div>
        <button className="bg-[#0082E1]  text-white text-xs font-bold px-6 py-2 rounded-full">OPEN</button>
        </div>

        <div className="flex text-base p-2 font-semibold justify-start items-start rounded-lg">
        <img src={backcircle} className="w-6 h-6" alt="backcircle" />
            <h1 className="text-lg ml-32 ">Payment</h1>
      </div>

      <div className="bg-white p-4 w-full space-y-3">
      <div className="flex items-center space-x-2">
        <img src={truck} className="w-5 h-6" alt="truck" />
            <h1 className="text-[13px] font-medium">Arrives by April 22, Between 9 AM to 11 AM </h1>
        </div>
        <div className="flex items-center space-x-2">
        <img src={location} className="w-5 h-6" alt="location" />
            <h1 className="text-[13px] font-normal">Home || </h1>
            <h2 className="text-[13px] font-normal text-[#AAAAAA]">No. 91 Anjaneya Temple Street Yellagonda...</h2>
        </div>
        <div className="flex items-center mt-2 justify-center h-7 bg-[#E1F1E6] border-[1px] border-[#0B6E27] rounded-xl p-2 space-x-2">
        <img src={offer} alt="Icon" className="w-4 h-4" />
        <span className="text-[#0B6E27] text-[10px] font-semibold">₹100 Saved! Free Delivery unlocked</span>
        </div>
        </div>

      {/* Main Content */}
      <div className="flex p-2 justify-between mt-2 space-x-6">
        <div className="w-full space-y-4">
          {/* Box 2 - Pay Using UPI App */}
          <h3 className="text-lg font-semibold mb-2 ml-4">Pay Using UPI App</h3>
          <div className="bg-white p-2 m-1 shadow rounded-lg">
            <div>
              {upiApps.map((app) => (
                <div
                  className="flex justify-between text-sm items-center  px-2 py-3 rounded-lg"
                  key={app.name}
                >
                  <div className="flex items-center gap-1">
                    <img src={app.image} className="w-5 h-5" alt="" />
                    <label htmlFor={app.name} className="mr-2">
                      {app.name}
                    </label>
                  </div>
                  <input
                    type="radio"
                    id={app.name}
                    name="payment"
                    className="custom-radio"
                  />
                </div>
              ))}
              <div className="flex justify-between items-center px-2 py-3 rounded-lg">
                <label htmlFor="ADD" className="mr-2">
                  Add Another UPI ID
                </label>
                <button
                  id="ADD"
                  name="payment"
                  className="w-4 h-4 flex items-center justify-center bg-white border-2 border-black rounded-full text-xs font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          {/* Pay Using Cards */}
          <h3 className="text-lg font-semibold mb-2 ml-4">Card</h3>
            <div className="bg-white p-2 shadow rounded-lg">
              <div className="flex justify-between items-center px-2 py-2 rounded-lg">
                <div className="flex gap-1 items-center">
                  <img
                    src={CreditCard}
                    className="w-8 h-8"
                    alt="credit_card_image"
                  />
                  <label className="mr-2">Credit/Debit Card</label>
                </div>
                <button className="w-4 h-4 flex items-center justify-center bg-white border-2 border-black rounded-full text-xs font-bold">
                  +
                </button>
              </div>
            </div>
            {/* Other Payment Options */}
            <div>
              <h3 className="text-lg font-semibold mb-4 ml-4">
                Other Payment Options
              </h3>
              <div className="bg-white p-3 shadow rounded-lg">
              <div className="flex justify-between items-center px-2 py-2 rounded-lg">
                <div className="flex gap-1 items-center">
                  <img src={Wallet} className="w-8 h-8" alt="wallet" />
                  <label className="mr-2">AnyFeast Wallet</label>
                </div>
                <input type="radio" name="payment" className="custom-radio" />
              </div>
              <div className="flex justify-between items-center px-2 py-2 rounded-lg">
                <div className="flex gap-1 items-center">
                  <img src={Cod} className="w-8 h-8" alt="cod" />
                  <label className="mr-2">Cash on Delivery</label>
                </div>
                <input type="radio" name="payment" className="custom-radio" />
              </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentsMobile;
