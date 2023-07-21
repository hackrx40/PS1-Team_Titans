// import React, { useState } from "react";
// import { logo } from "../assets/icons";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthPropType } from "./Login";
// import { url } from "../url";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// export default function Signup({ handleAuth }: AuthPropType) {
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [avatar, setAvatar] = useState<string>("");
//   const navigate = useNavigate();
//   function handleSignup() {
//     if (!username || !password) return toast.error("All credentials required");
//     axios
//       .post(`${url}/auth/signup`, {
//         username,
//         password,
//         avatar: avatar || undefined,
//       })
//       .then((res) => {
//         localStorage.setItem("auth", JSON.stringify(res.data));
//         handleAuth(res.data);
//         navigate("/chat");
//       })
//       .catch((err) => toast.error(err.response.data.message));
//   }

//   return (
//     <>
//       <Toaster />
//       <div
//         style={{
//           width: "100%",
//           height: "100vh",
//           backgroundColor: "white",
//           display: "flex",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           className="box_auth"
//           style={{
//             color: "black",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             marginTop: "24vh",
//           }}
//         >
//           <p style={{ position: "absolute", top: "20px", fontSize: "28px" }}>
//             {logo}
//           </p>
//           <h1 style={{ color: "black", marginBottom: "18px" }}>
//             Create your account
//           </h1>
//           <input
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             style={{
//               marginTop: "15px",
//               width: "270px",
//               height: "41px",
//               paddingLeft: "8px",
//               fontSize: "16px",
//               outline: "none",
//               border: "1px solid gray",
//               marginBottom: "18px",
//               borderRadius: "4px",
//             }}
//             type="text"
//             placeholder="Username"
//           />
//           <input
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{
//               marginTop: "15px",
//               width: "270px",
//               height: "41px",
//               paddingLeft: "8px",
//               fontSize: "16px",
//               outline: "none",
//               border: "1px solid gray",
//               borderRadius: "4px",
//               marginBottom: "18px",
//             }}
//             type="password"
//             placeholder="Password"
//           />
//           <input
//             value={avatar}
//             onChange={(e) => setAvatar(e.target.value)}
//             style={{
//               marginTop: "15px",
//               width: "270px",
//               height: "41px",
//               paddingLeft: "8px",
//               fontSize: "16px",
//               outline: "none",
//               border: "1px solid gray",
//               marginBottom: "18px",
//               borderRadius: "4px",
//             }}
//             type="text"
//             placeholder="Avatar URL (optional)"
//           />
//           <button
//             onClick={() => handleSignup()}
//             style={{
//               marginTop: "15px",
//               width: "285px",
//               height: "41px",
//               fontSize: "16px",
//               outline: "none",
//               border: "none",
//               borderRadius: "6px",
//               backgroundColor: "#10a37f",
//               color: "white",
//               marginBottom: "12px",
//               cursor: "pointer",
//             }}
//           >
//             Signup
//           </button>
//           <p style={{ marginTop: "14px", fontSize: "14px" }}>
//             Already have an account?{" "}
//             <Link
//               style={{ color: "#10a37f", textDecoration: "none" }}
//               to="/login"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import { logo } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { AuthPropType } from "./Login";
import { url } from "../url";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import backgroundImg from "../assets/bg.png"; 

export default function Signup({ handleAuth }: AuthPropType) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const navigate = useNavigate();

  function handleSignup() {
    if (!username || !password) return toast.error("All credentials required");
    axios
      .post(`${url}/auth/signup`, {
        username,
        password,
        avatar: avatar || undefined,
      })
      .then((res) => {
        localStorage.setItem("auth", JSON.stringify(res.data));
        handleAuth(res.data);
        navigate("/home");
      })
      .catch((err) => toast.error(err.response.data.message));
  }

  return (
    <>
      <Toaster />
      <div
         style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${backgroundImg})`, // Use the imported backgroundImg
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="box_auth"
          style={{
            color: "rgba(235, 235, 235, 1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10vh",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            padding: "30px 20px",
            borderRadius: "8px",
            backgroundColor: "rgba(44, 47, 72, 0.5)",
            minWidth: "400px",
          }}
        >
          <p style={{ fontSize: "28px" }}>{logo}</p>
          <h1 style={{ color: "rgba(235, 235, 235, 1)", marginBottom: "18px" }}>
            Create your account
          </h1>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              height: "41px",
              padding: "8px",
              fontSize: "16px",
              outline: "none",
              border: "1px solid rgba(235, 235, 235, 1)",
              marginBottom: "18px",
              borderRadius: "4px",
              backgroundColor: "rgba(29, 32, 62, 0.3)",
              color: "rgba(235, 235, 235, 1)",
            }}
            type="text"
            placeholder="Username"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              height: "41px",
              padding: "8px",
              fontSize: "16px",
              outline: "none",
              border: "1px solid rgba(235, 235, 235, 1)",
              borderRadius: "4px",
              marginBottom: "18px",
              backgroundColor: "rgba(29, 32, 62, 0.3)",
              color: "rgba(235, 235, 235, 1)",
            }}
            type="password"
            placeholder="Password"
          />
          <input
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            style={{
              width: "100%",
              height: "41px",
              padding: "8px",
              fontSize: "16px",
              outline: "none",
              border: "1px solid rgba(235, 235, 235, 1)",
              marginBottom: "18px",
              borderRadius: "4px",
              backgroundColor: "rgba(29, 32, 62, 0.3)",
              color: "rgba(235, 235, 235, 1)",
            }}
            type="text"
            placeholder="Avatar URL (optional)"
          />
          <button
            onClick={() => handleSignup()}
            style={{
              width: "100%",
              height: "41px",
              fontSize: "16px",
              outline: "none",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "rgba(44, 47, 72, 1)",
              color: "rgba(235, 235, 235, 1)",
              marginBottom: "12px",
              cursor: "pointer",
            }}
          >
            Signup
          </button>
          <p style={{ fontSize: "14px" }}>
            Already have an account?{" "}
            <Link
              style={{ color: "rgba(235, 235, 235, 1)", textDecoration: "none" }}
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
