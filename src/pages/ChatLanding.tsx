import React from "react";
import { alert, sun, thunder } from "../assets/icons";
import { Link } from "react-router-dom";
import bg from "../assets/chatland_bg.png";
import Navbar from "../components/Navbar";

export default function ChatLanding() {
    return (
        <>
        <Navbar/>
        
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                minHeight:"100vh",
            }}
        >
            <h1 style={{ marginTop: "18vh", marginBottom: "5vh" }}>Hello, I am BAYMAX, your AI-powered Healthcare Companion! !</h1>
            <h2 style={{ marginBottom: "5vh" }}>Let's embark on a journey of proactive well-being together!</h2>

            <div
                className="cols"
                style={{ display: "flex", flexDirection: "row", gap: "58px" }}
            >
                <Link to="/chat"
                    style={{
                        color: "rgba(235, 235, 235, 1)", // Text color
                        textDecoration: "none", // Remove underline
                        fontSize: "18px", // Font size
                    }}>
                    <div
                        className="row"
                        style={{
                            width: "225px",
                            height: "150px",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            borderStyle: "solid",
                            borderColor: "#223344",
                            padding: "10px",
                        }}
                    >
                        {sun}
                        <p style={{ fontSize: "18px", marginTop: "5px", fontWeight: "bold", }}>Clear your Queries.</p>
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
                           No more uncertainty or ignorance of symptoms.
                        </div>
                    </div>
                </Link>
                <Link to="/upload" style={{
                    color: "rgba(235, 235, 235, 1)", // Text color
                    textDecoration: "none", // Remove underline
                    fontSize: "18px", // Font size
                }}>
                    <div
                        className="row hiderow"
                        style={{
                            width: "225px",
                            height: "150px",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            borderStyle: "solid",
                            borderColor: "#223344",
                            padding: "10px",
                        }}
                    >
                        {thunder}
                        <p style={{ fontSize: "18px", marginTop: "5px" }}>Advanced Report Analysis</p>
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
                            Personalized responses based on your medical reports and X-ray images.
                        </div>
                    </div>
                </Link>
                <Link to="/medicine" style={{
                    color: "rgba(235, 235, 235, 1)", // Text color
                    textDecoration: "none", // Remove underline
                    fontSize: "18px", // Font size
                }}>
                    <div
                        className="row hiderow"
                        style={{
                            width: "225px",
                            height: "150px",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            borderStyle: "solid",
                            borderColor: "#223344",
                            padding: "10px",
                        }}
                    >
                        {alert}
                        <p style={{ fontSize: "18px", marginTop: "5px" }}>Medicinal Complexitites</p>
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
                            Discover medicinal interactions & side effects effortlessly.
                        </div>
                    </div>
                </Link>
            </div>
        </div >
        </>
    );
}
