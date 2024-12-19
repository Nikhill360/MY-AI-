import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.GEMINI_API_KEY;

const runChat = async (prompt) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
  };

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error in chat:', error);
    throw error;
  }
};

export default runChat;

app.get('/api', (req, res) => {
  res.send('API Endpoint!')
});