import React from "react";
import { Message as MessageProps } from "../App";
import Logo from "../assets/logo.png";

export default function Message({ me, msg, img }: MessageProps) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: !me ? "rgb(19, 38, 57, 0.6)" : "transparent",
        color: !me ? "#f2f2f2" : "#f0f0f5",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "18px 0",
        borderRadius: "5px",
      }}
    >
      <div
        style={{ width: "25px", marginLeft: "15px", alignItems: "flex-start" }}
      >
        {img ? (
          <img
            style={{ borderRadius: "3px", width: "32px" }}
            src={img}
            alt=""
          />
        ) : (
          <div
            style={{
              backgroundColor: "#1d2d50",
              minHeight:"32px",
              minWidth:"32px",
              padding: "1px",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={Logo} alt="Logo" style={{ width: "20px" }} />
          </div>
        )}
      </div>
      <pre
        style={{
          marginLeft: "38px",
          marginRight: "25px",
          fontSize: "14px",
          lineHeight: "20px",
          width: "100%",
          marginTop: "6.5px",
          
        }}
      >
        {msg}
      </pre>
    </div>
  );
}