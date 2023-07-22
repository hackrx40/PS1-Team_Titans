// import React, { useState } from "react";
// import { logo } from "../assets/icons";
// import toast, { Toaster } from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { url } from "../url";

// export type AuthPropType = {
//   handleAuth: (value: any) => void;
// };

// export default function Login({ handleAuth }: AuthPropType) {
//   const [username, setUsername] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const navigate = useNavigate();
//   function handleLogin() {
//     if (!username || !password) return toast.error("All credentials required");
//     axios
//       .post(`${url}/auth/login`, { username, password })
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
//           <h1 style={{ color: "black", marginBottom: "18px" }}>Welcome back</h1>
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
//           <button
//             onClick={() => handleLogin()}
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
//             Login
//           </button>
//           <p style={{ marginTop: "14px", fontSize: "14px" }}>
//             Don't have an account?{" "}
//             <Link
//               style={{ color: "#10a37f", textDecoration: "none" }}
//               to="/signup"
//             >
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }
import React, { useState } from "react";
import { logo } from "../assets/icons";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../url";
import backgroundImg from '../assets/bg.png';

export type AuthPropType = {
  handleAuth: (value: any) => void;
};

export default function Login({ handleAuth }: AuthPropType) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function handleLogin() {
    if (!username || !password) return toast.error("All credentials required");
    axios
      .post(`${url}/auth/login`, { username, password })
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
          backgroundImage: `url(${backgroundImg})`, // Replace 'background.jpg' with the actual image file name
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
            Welcome back
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
          <button
            onClick={() => handleLogin()}
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
            Login
          </button>
          <p style={{ fontSize: "14px" }}>
            Don't have an account?{" "}
            <Link
              style={{ color: "rgba(235, 235, 235, 1)", textDecoration: "none" }}
              to="/signup"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
