require("dotenv").config();

const { log } = console;
//log(process.env.API_KEY);

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "Write a poem universe under 100 words.";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  log(text);
}

run();
