import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ChatLanding from "./pages/ChatLanding";
import Chat from "./pages/Chat";

export default function App() {  

  return (
    <div>
      <Routes>
        <Route path="/" element={<ChatLanding/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
    </div>
  );
}