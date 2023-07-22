const dotenv = require("dotenv")
dotenv.config()
const axios = require('axios')
const { createCompletionChatGTP } = require("../chatGTP");

async function run(obj){
    const response  = await createCompletionChatGTP(obj);
    console.log("R--------", response)
    return response.data.choices[0];
}


const predictor = async(data)=>{
  const res = await axios.post('https://baymax-f7q24pru5q-ey.a.run.app/predict', data)
  
  var body = "";
  const keys = Object.keys(res.data.predictions);
  const values = Object.values(res.data.predictions);
  keys.forEach((element, index) => {
      body = body + element + ":" + values[index] + ", "
  });
  return body;
}

const processImage = async (id, res)=>{
  try{
    var data = {
      url: "https://drive.google.com/uc?id=" + id
    }
    const body = await predictor(data);
    const message = "Analyse the given predictions from an x-ray image for the chest region. If the probability of something is too low, say that patient is not suffering from them, mentioning the disease. If probability is moderate to high, say that it maybe likely. Remember that it is a chest x-ray so show only relevant problems to the chest. Wrap up the answer in 8 lines.  {" + body + "}";
    const obj = {
        role: "user",
        content: message,
    }
    var arr = []
    arr.push(obj);
    console.log(arr);
    const processedData = await run(arr);
    console.log("Response", processedData);
    res.status(200).json(processedData.message);
  }catch(err) {
    console.log(err.message); 
  }
}

module.exports = {
  processImage
}

