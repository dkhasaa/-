
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Та бол Монгол Улсын дээд боловсролын салбарын ахлах зөвлөх, бодлогын шинжээч юм. 
Танд өгөгдсөн "Дээд Боловсролын Реформ: Судалгааны Их Сургууль ба Үндэсний Өрсөлдөх Чадвар" стратегийн баримт бичигт үндэслэн Улсын Их Хурлын гишүүдийн асуултад хариулна уу.

Гол өнцөг:
1. Боловсролыг "нийгмийн халамж" биш "үндэсний аюулгүй байдал, эдийн засгийн тусгаар тогтнол" гэж үзэх.
2. Сургалтын төлбөрөөс хамааралтай (90%) байдлыг халж, судалгааны санхүүжилтийг нэмэх.
3. Оюуны нүүдлийг (Brain Drain) зогсоож, "Brain Gain" бий болгох.
4. "Research Stipend" - судалгааны туслахын тэтгэмжийг нэвтрүүлэх.

Хариулт нь мэргэжлийн, товч бөгөөд тодорхой байх ёстой. Хэрэв асуулт стратегийн баримт бичигт байхгүй сэдэв байвал мэргэжлийн түвшинд ерөнхий чиглэл өгөх эсвэл тус стратегийн ач холбогдлыг тодотгох хэлбэрээр хариулна.
`;

export const getPolicyAnalystResponse = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Уучлаарай, системд алдаа гарлаа. Та дахин оролдоно уу.";
  }
};
