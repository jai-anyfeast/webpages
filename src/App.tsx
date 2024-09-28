// Filename - App.tsx

import React, { useState } from "react";
import "./App.css";
// Importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

// Import Home component
import Home from "./home";
// Import AddressModal component
import AddressModal from "./AddressModal";
// Import Payments component
import Payments from "./payments";
import Sidebarmain from "./Sidebarmain";
import PricingPlans from "./PricingPlans";
import Cookies from "./Cookies";

const App: React.FC = () => {
    // State to manage the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => setIsModalOpen(true);
    // Function to close the modal
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    {/* Pass openModal function as a prop to Home */}
                    <Route
                        path="/"
                        element={<Home openModal={openModal} />}
                    />
                    {/* Pass props to AddressModal */}
                    <Route
                        path="/AddressModal"
                        element={
                            <AddressModal
                                isOpen={isModalOpen}
                                onClose={closeModal}
                            />
                        }
                    />
                    <Route
                        path="/payments"
                        element={<Payments />}
                    />
                    <Route
                        path="/Sidebarmain"
                        element={<Sidebarmain />}
                    />
                    <Route
                        path="/PricingPlans"
                        element={<PricingPlans />}
                    />
                    <Route
                        path="/Cookies"
                        element={<Cookies />}
                    />

                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to Home component with to="/" */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
            {/* Render AddressModal outside the Router to ensure it works across different routes */}
            <AddressModal
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </>
    );
}

export default App;
