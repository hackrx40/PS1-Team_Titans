import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Auth from "./pages/Auth";
import axios from "axios";
import Emergency from "./pages/emergencySupport/Emergency";
import { url } from "./url";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Medicine from "./pages/Medicine";
import UploadPage from "./pages/Upload";
import ChatLanding from "./pages/ChatLanding";

export type Message = {
  msg: string;
  me?: boolean;
  img: string | undefined;
  _id: string;
};

type User = {
  apiKey: string;
  avatar: string;
  createdAt: string;
  queries: string;
  uid: string;
  updatedAt: string;
  username: string;
  _id: string;
};

export default function App() {  
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatLoading, setChatloading] = useState(true);
  const [auth, setAuth] = useState<User | undefined>(() => {
    const user = localStorage.getItem("auth");
    if (!user) return undefined;
    return JSON.parse(user);
  });
  function addMessage(msg: Message) {
    setMessages((prev) => [...prev, msg]);
  }
  function handleAuth(value: any) {
    setMessages([]);
    setAuth(value);
  }
  function handlelogout() {
    setAuth(undefined);
    localStorage.removeItem("auth");
  }
  useEffect(() => {
    if (!auth) return;
    axios
      .get(`${url}/chatgpt/getchats/${auth.apiKey}`)
      .then((res) => {
        const processed = res.data.texts.map(
          (item: { message: string; textBy: number; _id: string }) => {
            return {
              msg: item.message,
              me: item.textBy == 1,
              _id: item._id,
              img: item.textBy == 1 ? auth?.avatar : undefined,
            };
          }
        );
        setMessages(processed);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setChatloading(false);
      });
  }, [auth]);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login handleAuth={handleAuth} />} />
        <Route path="/signup" element={<Signup handleAuth={handleAuth} />} />
        <Route path="/" element={!auth ? <Auth /> : <Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/emergency-support" element={<Emergency />} />
        <Route path="/upload" element={<UploadPage/>} />
        <Route
          path="/medicine"
          element={
            !auth ? (
              <Navigate to="/login" />
            ) : (
              <Medicine auth={auth} handlelogout={handlelogout}/>
            )
          }
        />
        <Route
          path="/chat"
          element={
            !auth ? (
              <Navigate to="/login" />
            ) : (
              <Chat auth={auth} handlelogout={handlelogout}/>
            )
          }
        />
        <Route path="/chatlanding" element={<ChatLanding/>}/>
        {/* <Route path="/emergency-support" element={<ChatLanding/>}/> */}
      </Routes>
    </div>
  );
}