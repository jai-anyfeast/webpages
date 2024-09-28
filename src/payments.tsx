import "./App.css";
import Gpay from "./images/gpay.png";
import Paytm from "./images/paytm.png";
import Cred from "./images/cred.png";
import Phonepe from "./images/phonepay.png";
import Cod from "./images/cod.png";
import CreditCard from "./images/CreditCard.png";
import Wallet from "./images/Wallet.png";
import Coupons from "./images/Vector (2).png"
import Arrow from "./images/right_arrow.png"

function Payments() {
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
      name: "Cred",
      image: Cred,
    },
    {
      name: "Paytm",
      image: Paytm,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center rounded-lg">
        <div className="flex items-center space-x-4">
          <img
            src="https://dummyimage.com/50x50/000/fff&text=Logo"
            alt="AnyFeast Logo"
            className="h-8"
          />
          <nav className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-black">
              About Us
            </a>
            <a href="#" className="hover:text-black">
              Blog
            </a>
            <a href="#" className="hover:text-black">
              Shop
            </a>
            <a href="#" className="hover:text-black">
              Recipe
            </a>
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

      {/* Main Content */}
      <div className="flex justify-between mt-8 space-x-6">
        {/* Left Section - Two Separate Boxes */}
        <div className="w-2/3 space-y-6">
          {/* Box 1 - Shipping Address */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            <button className="text-black hover:underline">
              + Add New Address
            </button>
          </div>

          {/* Box 2 - Pay Using UPI App */}
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Pay Using UPI App</h3>
            <div>
              {upiApps.map((app) => (
                <div
                  className="flex justify-between items-center border-b-2 px-2 py-6 rounded-lg"
                  key={app.name}
                >
                  <div className="flex items-center gap-2">
                    <img src={app.image} className="w-8 h-8" alt="" />
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
              <div className="flex justify-between items-center px-2 py-6 rounded-lg">
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

            {/* Pay Using Cards */}
            <div>
              <h3 className="text-xl font-semibold mb-2 mt-10">
                Pay Using Card
              </h3>
              <div className="flex justify-between items-center mb-2 border-b-2 px-2 py-6 rounded-lg">
                <div className="flex gap-2 items-center">
                  <img
                    src={CreditCard}
                    className="w-8 h-8"
                    alt="credit_card_image"
                  />
                  <label className="mr-2">Credit/Debit Card</label>
                </div>
                <button
                  className="w-4 h-4 flex items-center justify-center bg-white border-2 border-black rounded-full text-xs font-bold"
                >
                  +
                </button>
              </div>

            </div>

            {/* Other Payment Options */}
            <div>
              <h3 className="text-xl font-semibold mb-2 mt-10">
                Other Payment Options
              </h3>
              <div className="flex justify-between items-center mb-2 border-b-2 px-2 py-6 rounded-lg">
                <div className="flex gap-2 items-center">
                  <img src={Cod} className="w-8 h-8" alt="cod" />
                  <label className="mr-2">Cash on Delivery</label>
                </div>
                <input
                  type="radio"
                  name="payment"
                  className="custom-radio"
                />
              </div>
              <div className="flex justify-between items-center mb-2 border-b-2 px-2 py-6 rounded-lg">
                <div className="flex gap-2 items-center">
                  <img src={Wallet} className="w-8 h-8" alt="wallet" />
                  <label className="mr-2">AnyFeast Wallet</label>
                </div>
                <input
                  type="radio"
                  name="payment"
                  className="custom-radio"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Cart */}
        <div className="w-1/3 space-y-6">
          <div className="bg-white p-2 shadow rounded-lg">
            <div className="flex justify-between items-center">
              <img src={Coupons} className="w-8 h-8" alt="coupons" />
              <h2 className="text-lg font-semibold text-justify">View coupons & Offers</h2>
              <button>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-lg font-semibold">7 Items for Soya Taco</h3>
            {/* Cart Items */}
            <div className="mt-4 space-y-2">
              <div className="flex justify-between items-center">
                <span>Cornitos Taco Shells</span>
                <div className="flex items-center">
                  <span className="text-gray-500">₹100</span>
                  <button className="ml-4 bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                    -
                  </button>
                  <span className="mx-2">1</span>
                  <button className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span>Lettuce</span>
                <div className="flex items-center">
                  <span className="text-gray-500">₹100</span>
                  <button className="ml-4 bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                    -
                  </button>
                  <span className="mx-2">1</span>
                  <button className="bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 shadow rounded-lg">
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹800</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₹200</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹1000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
