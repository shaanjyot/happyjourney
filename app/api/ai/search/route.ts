import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
    try {
        const { query } = await req.json();

        if (!process.env.GEMINI_API_KEY) {
            console.error('GEMINI_API_KEY is missing');
            return NextResponse.json({
                error: 'Gemini API Key not configured. Please add GEMINI_API_KEY to your .env.local'
            }, { status: 500 });
        }

        // Use verified model from the environment diagnostics
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
            generationConfig: {
                responseMimeType: "application/json",
            }
        });

        const prompt = `
            You are a professional luxury travel planner for 'HappyJourney'. 
            Return ONLY a valid JSON object with the following keys: 
            "locationName", "summary" (poetic), "bestTimeToVisit", 
            "highlights" (array of 3 points), "itinerary" (array of 3 objects with "day" and "activity"), 
            and "suggestedImageSearchTerm".
            
            Create a 3-day premium travel plan for: ${query}
        `;

        const result = await model.generateContent(prompt).catch(err => {
            console.error('Gemini call failed inside:', err);
            throw err;
        });
        const response = await result.response;
        let text = response.text();

        // Clean up markdown code blocks if the AI includes them
        text = text.replace(/```json\n?/, '').replace(/```/, '').trim();

        const aiResponse = JSON.parse(text || '{}');

        return NextResponse.json(aiResponse);

    } catch (error: any) {
        console.error('AI Search Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
