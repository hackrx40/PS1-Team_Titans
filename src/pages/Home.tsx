import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Import the menu icon from 'react-icons/fi'
import { MdHome } from "react-icons/md"; // Import the home icon from 'react-icons/md'
import backgroundVideo from '../assets/bgvid.mp4'; // Replace 'background.mp4' with the actual video file name
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
// The Home page component
export default function Home() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const navigate = useNavigate();

  // Function to toggle the side menu
  const toggleSideMenu = () => {
    setShowSideMenu((prevState) => !prevState);
  };

  // Function to close the side menu
  const closeSideMenu = () => {
    setShowSideMenu(false);
  };

  // Function to handle the menu button click
  const handleMenuButtonClick = () => {
    if (showSideMenu) {
      closeSideMenu(); // Close the side menu if it is open
    } else {
      toggleSideMenu(); // Toggle the side menu if it is closed
    }
  };

  return (
    <div>
      <Navbar/>

      {/* Hero Section */}
      <div
        style={{
          width: "100%",
          height: "calc(100vh - 80px)", // Adjust the height for the navbar
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          position: "relative", // Hide any overflowing video content
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(29, 52, 71, 0.3)", // Add an overlay to the video
            borderRadius: "10px",
            color: "rgba(235, 235, 235, 1)",
            padding: "20px",
            minWidth:"380px",
            minHeight:"250px",
            zIndex: 2,
          }}
        >
          <p style={{ color: "rgba(235, 235, 235, 0.75)", fontSize: "28px", marginBottom: "20px" }}>
            Baymax says,
          </p>
          <h1 style={{ color: "rgba(235, 235, 235, 0.9)", fontSize: "40px", marginBottom: "30px", letterSpacing:"5px" }}>
            WELCOME!
          </h1>

          <button
            onClick={() => navigate("/chatlanding")}
            style={{
              marginTop: "30px",
              padding: "10px 20px",
              fontSize: "20px",
              backgroundColor: "rgba(44, 47, 72, 1)",
              color: "rgba(235, 235, 235, 1)",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
