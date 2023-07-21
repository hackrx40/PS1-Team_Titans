import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Import the menu icon from 'react-icons/fi'

const Navbar: React.FC = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  // Function to toggle the side menu
  const toggleSideMenu = () => {
    setShowSideMenu((prevState) => !prevState);
  };

  // Function to close the side menu when a link is clicked
  const closeSideMenu = () => {
    setShowSideMenu(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          backgroundColor: "rgb(34, 51, 68, 0.6)",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "rgba(235, 235, 235, 1)",
          position: "fixed", // Set the navbar position to be fixed
          top: 0, // Stick the navbar to the top of the viewport
          width: "100%", // Make the navbar full width
          zIndex: 2, // Set the z-index of the navbar to be above the video
        }}
      >
        {/* Home Button */}
        <Link
          to="/"
          style={{
            color: "rgba(235, 235, 235, 1)", // Text color
            textDecoration: "none", // Remove underline
            fontSize: "18px", // Font size
            fontWeight: "bold", // Font weight
            marginRight: "30px", // Right margin to create space between icon and text
            display: "flex", // Make the link flex container
            alignItems: "center", // Center the contents vertically
          }}
        >
          Baymax
        </Link>

        {/* Menu Button */}
        <button
          onClick={toggleSideMenu} // Use the custom handler for menu button click
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            right: showSideMenu ? "340px" : "60px",
            left: "auto",
            zIndex: 1,
          }}
        >
          <FiMenu size={24} color="white" />
        </button>
      </nav>

      {/* Side Menu */}
      {showSideMenu && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            width: "250px",
            backgroundColor: "rgba(44, 47, 72, 0.8)",
            padding: "20px",
            color: "rgba(235, 235, 235, 1)",
            zIndex: 2,
            display: "flex", // Use flexbox to stack items vertically
            flexDirection: "column", // Stack items from top to bottom
            justifyContent: "space-between", // Add space between items
          }}
        >
          <ul style={{ listStyleType: "none", padding: "10px" }}>
            <li style={{ margin: "20px 0" }}>
              <Link
                to="/chatlanding"
                style={{ color: "rgba(235, 235, 235, 1)", textDecoration: "none", fontSize: "18px" }}
                onClick={closeSideMenu} // Close the side menu when a link is clicked
              >
                HealthBot
              </Link>
            </li>
            <li style={{ margin: "20px 0" }}>
              <Link
                to="/emergency-support"
                style={{ color: "rgba(235, 235, 235, 1)", textDecoration: "none", fontSize: "18px" }}
                onClick={closeSideMenu} // Close the side menu when a link is clicked
              >
                Emergency Care
              </Link>
            </li>
            <li style={{ margin: "20px 0" }}>
              <a
                href="https://www.bajajfinservhealth.in/health-library"
                style={{ color: "rgba(235, 235, 235, 1)", textDecoration: "none", fontSize: "18px" }}
                onClick={closeSideMenu} // Close the side menu when a link is clicked
              >
                Stay Aware
              </a>
            </li>
            <li style={{ margin: "20px 0" }}>
              <Link
                to="/about-us"
                style={{ color: "rgba(235, 235, 235, 1)", textDecoration: "none", fontSize: "18px" }}
                onClick={closeSideMenu} // Close the side menu when a link is clicked
              >
                About Us
              </Link>
            </li>
          </ul>

          {/* Logout button */}
          <button
            onClick={() => {
              // Implement your logout logic here
              console.log("Logout");
            }}
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "rgba(235, 235, 235, 1)",
              cursor: "pointer",
              textDecoration: "none",
              marginTop: "auto", // Push the button to the bottom
              marginBottom: "30px",
              fontSize: "18px",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
