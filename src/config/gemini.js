import { GoogleGenerativeAI } from '@google/generative-ai';

// API key ko direct vite.config.js se access karo
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function runChat(prompt) {
    const generationConfig = {
        temperature: 0.9,
        topP: 0.95, 
        topK: 40,
        maxOutputTokens: 8192,
    };

    const model = genAI.getGenerativeModel({
        model: "gemini-pro",
        generationConfig,
    });

    const chat = model.startChat({
        history: [],
    });

    try {
        const response = await chat.sendMessage(prompt);
        const result = await response.response;
        return result.text(); // Direct text return karo
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default runChat;