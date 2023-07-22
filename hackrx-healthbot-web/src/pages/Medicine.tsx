

import React, { useState } from "react";
import axios from 'axios';
import bg from "../assets/medicineland_bg.png";
import Navbar from "../components/Navbar";

const buttonStyle = {
  backgroundColor: "#4caf50",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "0 10px",
};
const buttonStyle1 = {
  backgroundColor: "#FF0000",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  margin: "0 10px",
};

const Medicine = ({ auth, handlelogout }) => {
  const [drug, setDrug] = useState("");
  const [diagnosis, setDiagnosis] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      drug: drug,
    };
    console.log(formData);
    try {
      const res = await axios.post("http://localhost:8002/getMedicationData", formData);
      console.log(res);

      if (res) setDiagnosis(res.data);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
          <Navbar/>
          
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat", height: "100vh", textAlign: "center" }}>
      {diagnosis ? (
        <div style={{ width: "70%", padding: "20px", border: "2px solid #ddd", borderRadius: "8px", marginTop: "30px" }}>
          <h1>Foods to avoid while using {drug}</h1>
          
<table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Food Item</th>
                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Corresponding Side Effect</th>
              </tr>
            </thead>
            <tbody>
              {diagnosis.food_to_avoid.map((eff, index) => (
                <tr key={index}>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{eff}</td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>{diagnosis.associated_side_effect[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <form style={{ width: "50%", padding: "20px", border: "2px solid #ddd", borderRadius: "8px", marginTop: "30px" }} onSubmit={handleSubmit}>
          <h1>Enter the Drug Name</h1>
          <label htmlFor="drug">Drug Name:</label>
          <input
            id="drug"
            value={drug}
            onChange={(event) => {
              setDrug(event.target.value);
            }}
          />
          <button type="submit" style={{ ...buttonStyle, marginTop: "20px" }}>
            Submit
          </button>
        </form>
      )}
          </div>
          </>
  );
};

export default Medicine;