const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("GEMINI_API_KEY");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

const prompt = `check if the contents in the ${searchValue} is correct`;

const result = await model.generateContent(prompt);
console.log(result.response.text());
