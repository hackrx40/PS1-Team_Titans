const axios = require('axios')

const drugProcessor = async(data)=>{
    const res = await axios.post('https://baymax-f7q24pru5q-ey.a.run.app/drug_food_interactions', data);
    return res;
  }

  const processDrug = async (data, res)=>{
    try{
      const body = await drugProcessor(data);
      console.log("Response", body.data);
      res.status(200).send(body.data);
    }catch(err) {
      console.log(err.message); 
    }
  }  

module.exports={
    processDrug
}