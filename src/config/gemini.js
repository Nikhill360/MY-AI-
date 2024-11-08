import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
}  from "@google/generative-ai";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = "AIzaSyAZ9eSpN-tgkPNfzjldvQQyz0dsBE7rjQc";

const runChat = async (prompt) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });
  const generationConfig = {
    temperature: 0.9,
    topP: 1,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
  };

  try {
    const chatSession = await model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    return response.text;
  } catch (error) {
    console.error('Error in chat:', error);
    throw error;
  }
};

export default runChat;