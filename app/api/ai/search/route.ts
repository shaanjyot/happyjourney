import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
    try {
        const { query } = await req.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({
                error: 'Gemini API Key not configured. Please add GEMINI_API_KEY to your .env.local'
            }, { status: 500 });
        }

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            generationConfig: {
                responseMimeType: "application/json",
            }
        });

        const prompt = `
            You are a professional luxury travel planner for 'HappyJourney'. 
            Provide a detailed, elegant travel itinerary and location summary in JSON format. 
            The response MUST be a single JSON object with the following keys: 
            'locationName', 'summary' (a brief poetic description), 'bestTimeToVisit', 
            'highlights' (array of 3 points), 'itinerary' (array of objects with 'day' and 'activity'), 
            and 'suggestedImageSearchTerm'.
            
            Create a 3-day premium travel plan for: ${query}
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        const aiResponse = JSON.parse(text || '{}');

        return NextResponse.json(aiResponse);

    } catch (error: any) {
        console.error('AI Search Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
