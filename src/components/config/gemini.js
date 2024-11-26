// onde pegamos nossa ia
// rapha vai no terminal e escreve npm install @google/generative-ai

  const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  async function runChat(prompt) {
  const apiKey = "AIzaSyCnxn2NRu-GwomX2JFEWHd3H7pKb0dEshg"
  const genAI = new GoogleGenerativeAI(apiKey);
  }
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function runChat() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chat.sendMessage(prompt);
    console.log(result.response.text());
  }
  
  export default runChat;