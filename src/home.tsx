// Filename - Home.tsx

import React from "react";
// Importing Link from react-router-dom to 
// navigate to different endpoints.
import { Link } from "react-router-dom";

// Define the prop types
interface HomeProps {
    openModal: () => void; // Define the type for openModal prop
}

const Home: React.FC<HomeProps> = ({ openModal }) => {
    return (
        <div>
            <h1>Home Page</h1>
            <br />
            <ul>
                <li>
                    <Link to="/payments">Payments</Link>
                </li>
                <li>
                    <Link to="/Sidebarmain">Sidebarmain</Link>
                </li>
                <li>
                    <Link to="/PricingPlans">PricingPlans</Link>
                </li>
                <li>
                    <Link to="/Cookies">Cookies</Link>
                </li>
                <li>
                    <Link to="/AddressMobile">AddressMobile</Link>
                </li>
                <li>
                    <Link to="/paymentsmobile">PaymentsMobile</Link>
                </li>
                <li>
                    <Link to="/Blog">Blog</Link>
                </li>
            </ul>
            {/* Button to open Address Modal */}
            <button onClick={openModal} className="bg-blue-500 text-white p-3 rounded-md">
                Open Address Modal
            </button>
        </div>
    );
};

export default Home;
