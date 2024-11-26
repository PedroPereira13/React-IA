import { createContext, useState } from "react";
import runChat from "../config/gemini.js";

export const Contex = createContext();

const ContexProvider = (props) => {

    // save de input data
    const [input,setIpunt] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    // historico e display na barra de pesquisados rescentemente
    const [prevPrompts,setPrevPrompts] = useStates([]);
    // vai esconder as caixas e vai mostrar o resultado da pequissa
    const [showResult,setShowResult] = useState(false);
    // animacao de carregamento do texto
    const[loading,setLoading] = useState(false);
    // vai mostrar o texto/resultado final
    const [resultData,setResultData] = useState("");


    const onSent = async (prompt) => {
       await runChat(prompt)
    }


    const contexValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setIpunt

    }

    return (
        <Contex.Provider value={contexValue}>
            {props.children}
        </Contex.Provider>
    )
} 

export default ContexProvider