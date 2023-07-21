import { useState } from "react";
import SearchBox from "./SearchBox";
import Maps from "./Maps";
import Navbar from "../../components/Navbar";
function Emergency() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <div
      style={{
      marginBottom:"500vh"
    }}>
      <Navbar/>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
          height: "100vh",
        // marginTop:"100vh"
      }}
    >
      <div style={{ width: "70vw", height: "100%", marginTop:"3%" }}>
        <Maps
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
        />
      </div>
      <div style={{ width: "30vw",marginTop:"3%" }}>
        <SearchBox
          selectPosition={selectPosition}
          setSelectPosition={setSelectPosition}
        />
      </div>
      </div>
       </div>
  );
}

export default Emergency;
