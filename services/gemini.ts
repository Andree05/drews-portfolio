import { GoogleGenAI } from "@google/genai";

// Standard initialization as per guidelines
const ai = new GoogleGenAI({ 
  apiKey: process.env.API_KEY || "" 
});

export const generateCreativeInsight = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a world-class design consultant named 'Aura'. You provide brief, poetic, and highly creative insights about design projects, aesthetics, and creative direction. Keep responses under 100 words.",
        temperature: 0.9,
      }
    });
    return response.text || "I'm momentarily lost in thought. Let's try visualizing that again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The creative ether is a bit hazy right now. Please try again.";
  }
};