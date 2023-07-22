const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function createCompletionChatGTP( message ) {
  const obj={
    model: "gpt-3.5-turbo",
    messages: message,
    max_tokens: 512,
    top_p: 1,
    temperature: 0.5,
    frequency_penalty: 0,
    presence_penalty: 0
  }
  console.log("Object", obj)
  const response = await openai.createChatCompletion(obj);

  return response;
}

async function createChatGTP({ message }) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 2048,
    temperature: 0.7,
  });
  return response;
}

module.exports = { createCompletionChatGTP, createChatGTP };
