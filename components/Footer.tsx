import React from "react";

const footerStyle: React.CSSProperties = {
  backgroundColor: "#0d1a26",
  color: "#fff",
  padding: "16px",
  display: "flex",
  alignItems: "center",
};

const headingStyle: React.CSSProperties = {
  fontSize: "18px",
  textAlign: "center", // Center-align the text
  flex: 1,
};

const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <div style={headingStyle}>Made with ❤️ by Team TITANS. </div>
      <div>
        {/* Add any other content you want on the right side of the footer */}
      </div>
    </footer>
  );
};

export default Footer;
