import { createContext, useEffect, useState } from "react";
import runChat from "../config/gemini.js";

// Create and export Context once
export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 78 * index);
    }

    const onSent = async () => {
        if (!input.trim()) return; // Prevent empty submissions
        
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        setPrevPrompts(prev => [...prev, input])
        
        try {
            const response = await runChat(input)
            let responseArray = response.split("**")
            let newResponse = responseArray.map((text, index) => {
                return index % 2 === 1 ? `<b>${text}</b>` : text
            }).join('')
            let newResponse2 = newResponse.split("*").join("</br>")
            
            // setResultData(newResponse2)
            let newResponseArray = newResponse2.split(" ");
            for(let i=0; i< newResponseArray.length; i++)
            {
                const nextWord = newResponseArray[i];
                delayPara(i,nextWord+" ")
            }
        } catch (error) {
            console.error('Error:', error)
            setResultData("Sorry, there was an error processing your request.")
        } finally {
            setLoading(false)
            setInput("")
        }
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        setShowResult,
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;