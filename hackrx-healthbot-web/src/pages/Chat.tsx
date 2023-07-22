// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { url } from "../url";
// import Navbar from "../components/Navbar";
// import Messages from "../components/Messages";
// import Hero from "../components/Hero";
// import Input from "../components/Input";

// export default function Chat({ auth, handlelogout }) {
//   const [loading, setLoading] = useState<boolean>(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [chatLoading, setChatloading] = useState(true);

//   function addMessage(msg: Message) {
//     setMessages((prev) => [...prev, msg]);
//   }

//   function toggleLoading(value: boolean) {
//     setLoading(value);
//   }

//   useEffect(() => {
//     if (!auth) return;
//     axios
//       .get(`${url}/chatgpt/getchats/${auth.apiKey}`)
//       .then((res) => {
//         const processed = res.data.texts.map(
//           (item: { message: string; textBy: number; _id: string }) => {
//             return {
//               msg: item.message,
//               me: item.textBy == 1,
//               _id: item._id,
//               img: item.textBy == 1 ? auth?.avatar : undefined,
//             };
//           }
//         );
//         setMessages(processed);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
//         setChatloading(false);
//       });
//   }, [auth]);

//   return (
//     <>
//       <Navbar />
//       <div className="main_cont" style={{
//         width: "100%",
//         height: "calc(100vh - 80px)", // Adjust the height for the navbar
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         background: "#0d1a26", // Background color
//       }}>

//         {messages.length !== 0 ? (
//           <div className="inner_cont" style={{ height: "88%", overflowY: "scroll" }}>
//             {/* Add Typing Indicator */}
//             {loading && <p style={{ color: "rgba(235, 235, 235, 1)", textAlign: "center", position: "relative" }}>Bot is typing...</p>}
//             <Messages show={loading} messages={messages} />
//           </div>
//         ) : (
//           <Hero />
//         )}
//         <div
//           className="input-container"
//           style={{
//             marginTop: "20px",
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <Input
//             chatLoading={chatLoading}
//             handlelogout={handlelogout}
//             img={auth?.avatar}
//             apiKey={auth?.apiKey}
//             toggleLoading={toggleLoading}
//             addMessage={addMessage}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../url";
import Navbar from "../components/Navbar";
import Messages from "../components/Messages";
import Input from "../components/Input";
import Hero from "../components/Hero";

export default function Chat({ auth, handlelogout }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatLoading, setChatloading] = useState(true);
  const [file, setFile] = useState<any>(null);
  const [diagnosis, setDiagnosis] = useState(null);

  const handleSubmit=async(e:any)=>{
    e.preventDefault();
    let formData=new FormData();
    formData.append("file", file);
    const response = await fetch("http://localhost:8000/uploadimage", {
      method: "POST",
      body: formData,
    });
    const responseWithBody = await response.json();
    if (response) setDiagnosis(responseWithBody);
  }
  
  const [selectedOption, setSelectedOption] = useState<string>("Option 1");

  function addMessage(msg: Message) {
    setMessages((prev) => [...prev, msg]);
  }

  function toggleLoading(value: boolean) {
    setLoading(value);
  }


  const handleFileChange=(e:any) => {
    setFile(e.target.files[0]);
  }
  useEffect(() => {
    if (!diagnosis) return;
    console.log("Diagnosis", diagnosis)
  }, [diagnosis]);

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
    <>
      <Navbar />
      <div
        className="main_cont"
        style={{
          width: "100%",
          height: "calc(100vh - 80px)", // Adjust the height for the navbar
          display: "flex",
          flexDirection: "row", // Display the left sidebar and chat content side-by-side
          background: "#0d1a26", // Background color
        }}
      >
        {/* Left Sidebar */}
        <div
          className="left_sidebar"
          style={{
            width: "250px",
            height: "100%",
            background: "#223344", // Sidebar background color
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px", // Add top padding for the first button
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
            <option value="Option 1" style={{ backgroundColor: "#19334d", color: "#fff", padding: "5px", fontSize: "14px" }}>iClinc</option>
            <option value="Option 2" style={{ backgroundColor: "#19334d", color: "#fff", padding: "5px", fontSize: "14px" }}>Healthcare Magic</option>
            <option value="Option 3" style={{ backgroundColor: "#19334d", color: "#fff", padding: "5px", fontSize: "14px" }}>National Library of Medicines</option>
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
            Chat 1          </button>
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
          {/* Add more buttons as needed */}
        </div>

        {/* Chat Content */}
        <div
          className="chat_content"
          style={{
            flex: 1, // Fill the remaining width of the main container
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden", // Prevent horizontal scrolling
            padding: "20px", // Add padding for better spacing from the left sidebar
          }}
        >
          {messages.length !== 0 ? (
            <div
              className="inner_cont"
              style={{
                height: "100%", // Take up the full height of the chat content
                overflowY: "scroll",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end", // Messages should appear from the bottom
              }}
            >
              <Messages show={loading} messages={messages} />
            </div>
          ) : (
            <Hero />
          )}
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
        <Input
          chatLoading={chatLoading}
          handlelogout={handlelogout}
          img={auth?.avatar}
          apiKey={auth?.apiKey}
          toggleLoading={toggleLoading}
          addMessage={addMessage}
        />

      </div>
    </>
  );
}

