import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Chat() {
  const [selectedOption, setSelectedOption] = useState<string>("Option 1");

  return (
    <>
      <Navbar />
      <div
        className="main_cont"
        style={{
          width: "100%",
          height: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "row",
          background: "#0d1a26",
        }}
      >
        {/* Left Sidebar */}
        <div
          className="left_sidebar"
          style={{
            width: "250px",
            height: "100%",
            background: "#223344",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            zIndex: "1",
          }}
        >
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            style={{
              margin: "40px 0 0 0",
              padding: "10px 30px",
              width: "230px",
              borderRadius: "1px",
              color: "#fff",
              border: "solid",
              fontSize: "18px",
              borderColor: "#5580aa",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            <option value="Option 1" style={{ backgroundColor: "#19334d", color: "#fff", padding: "5px", fontSize: "14px" }}>da-vinci-3000</option>
            <option value="Option 2" style={{ backgroundColor: "#19334d", color: "#fff", padding: "5px", fontSize: "14px" }}>whisper-1</option>
            <option value="Option 3" style={{ backgroundColor: "#19334d", color: "#fff", padding: "5px", fontSize: "14px" }}>babbage</option>
          </select>
          <button
            style={{
              margin: "10px 0",
              padding: "10px 20px",
              borderRadius: "0px",
              width: "250px",
              background: "rgb(34, 51, 68, 0.9)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Chat 1          
          </button>
          <button
            style={{
              margin: "10px 0",
              padding: "10px 20px",
              borderRadius: "0px",
              width: "250px",

              background: "rgb(34, 51, 68, 0.9)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Chat 2
          </button>
          <button
            style={{
              margin: "10px 0",
              padding: "10px 20px",
              borderRadius: "0px",
              width: "250px",

              background: "rgb(34, 51, 68, 0.9)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Chat 3
          </button>
          <button
            style={{
              margin: "10px 0",
              padding: "10px 20px",
              borderRadius: "0px",
              width: "250px",

              background: "rgb(34, 51, 68, 0.9)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Chat 4
          </button>
        </div>

        {/* Chat Content */}
        <div
          className="chat_content"
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
            padding: "20px",
          }}
        >

          <div
            className="inner_cont"
            style={{
              height: "100%",
              overflowY: "scroll",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
          </div>

        </div>
      </div>

      {/* Input Container */}
      <div
        className="input-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px", // Add padding for better spacing from the bottom of the messages container
        }}
      >
        

      </div>
    </>
  );
}

