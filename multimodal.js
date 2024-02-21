const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

require("dotenv").config();
const { log } = console;

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

const promptBirdPoem =
  "Write a short poem under 100 words, based on this picture";

async function run() {
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const imageParts = [
    fileToGenerativePart("./assets/birds-2.jpg", "image/jpeg"),
  ];

  const result = await model.generateContent([promptBirdPoem, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
