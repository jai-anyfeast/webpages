import './App.css';

// Define the prop types
interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Address Modal Component
const AddressModal: React.FC<AddressModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Ensure the modal is only rendered when it's open

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {/* Set the max height relative to viewport height for responsiveness */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-md sm:max-w-lg lg:max-w-3xl mx-4 relative overflow-y-auto max-h-[90vh]">
        {/* Correct positioning of the cross icon in the top right corner */}
        <button
          onClick={onClose}
          className="absolute top-0 right-2 text-gray-500 text-xl font-bold"
        >
          &times;
        </button>

        {/* Heading remains unchanged */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Add New Address</h2>
        </div>

        <form>
          {/* User Name Fields */}
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-1 font-bold">Username</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Address and Other Fields... */}

          {/* Address Field */}
          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-1 font-bold">Address</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          {/* Country, Region, City, Zip Code Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1 font-bold">Country</label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none">
                <option>Select...</option>
                <option>Option 1</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1 font-bold">Region/State</label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none">
                <option>Select...</option>
                <option>Option 1</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1 font-bold">City</label>
              <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none">
                <option>Select...</option>
                <option>Option 1</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1 font-bold">Zip Code</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>
          {/* Email and Phone Number Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm text-gray-600 mb-1 font-bold">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1 font-bold">Phone Number</label>
              <input
                type="tel"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>
          {/* Confirm Button */}
          <div className="flex justify-center">
            <button className="bg-[#0B6E27] text-white px-32 py-3 rounded-md text-base font-medium">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
