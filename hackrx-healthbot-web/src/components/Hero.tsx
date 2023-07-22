import React from "react";
import { alert, sun, thunder } from "../assets/icons";

export default function Hero() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "30%",
      }}
    >
      <h1 style={{ marginTop: "18vh", marginBottom: "5vh" }}>Baymax - your personal AI Health Companion</h1>
      <div
        className="cols"
        style={{ display: "flex", flexDirection: "row", gap: "58px" }}
      >
        <div
          className="row"
          style={{
            width: "225px",
            height: "150px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {sun}
          <p style={{ fontSize: "18px", marginTop: "5px" }}>Examples</p>
          <div
            style={{
              backgroundColor: "#223344",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "14px 12px",
              lineHeight: "18px",
              marginTop: "18px",
              fontSize: "14px",
            }}
          >
            "What are the symptoms of typhoid?"
          </div>
        </div>
        <div
          className="row hiderow"
          style={{
            width: "225px",
            height: "150px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {thunder}
          <p style={{ fontSize: "18px", marginTop: "5px" }}>Capabilities</p>
          <div
            className="hiderow"
            style={{
              backgroundColor: "#223344",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "14px 12px",
              marginTop: "18px",
              fontSize: "14px",
              lineHeight: "18px",
            }}
          >
            Trained using real patient - doctor conversations
          </div>
        </div>
        <div
          className="row hiderow"
          style={{
            width: "225px",
            height: "150px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {alert}
          <p style={{ fontSize: "18px", marginTop: "5px" }}>Limitations</p>
          <div
            className="hiderow"
            style={{
              backgroundColor: "#223344",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "14px 12px",
              marginTop: "18px",
              fontSize: "14px",
              lineHeight: "18px",
            }}
          >
            Baymax is your health companion, not a Doctor!
          </div>
        </div>
      </div>
    </div>
  );
}
