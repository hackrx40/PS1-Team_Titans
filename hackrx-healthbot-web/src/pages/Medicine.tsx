import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundVideo from '../assets/bgvid.mp4';
import Messages from "../components/Messages";
import Hero from "../components/Hero";
import Input from "../components/Input";
import axios from "axios";
import { url } from "../url";



export default function Medicine({auth, handlelogout}) {
  
  const [drug, setDrug] = useState('');
  const [diagnosis, setDiagnosis] = useState(null);


  const handleSubmit=async(e:any)=>{
    e.preventDefault();
    
    const formData={
        drug: drug
    }
    console.log(formData);
    try {
        const res = await axios.post('http://localhost:8000/getMedicationData', formData)
        console.log(res);
        
        if (res) setDiagnosis(res.data);
      } catch (e) {
        alert(e)
      }
    
  }
  
  

  return (
    <div>
        {diagnosis
        ?
        <div>
            <h1>Foods to avoid while using {drug}</h1>
            <div>
                {diagnosis.food_to_avoid.map((eff) => <p>{eff}</p>)}
            </div>
            <h1>Associated side effects while using {drug}</h1>
            <div>
                {diagnosis.associated_side_effect.map((eff) => <p>{eff}</p>)}
            </div>
        </div>
        :
        <form
            onSubmit={handleSubmit}
        >
            <label htmlFor="drug">
            Drug Name:
            </label>
            <input
            id="drug"
            value={drug}
            onChange={event => {
                setDrug(event.target.value);
            }}
            />
            <button type="submit">Submit</button>
        </form>
        }     
    </div>
  );
}


