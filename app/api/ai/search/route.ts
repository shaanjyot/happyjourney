import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { query } = await req.json();

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({
                error: 'OpenAI API Key not configured. Please add OPENAI_API_KEY to your .env.local'
            }, { status: 500 });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a professional luxury travel planner for 'HappyJourney'. Provide a detailed, elegant travel itinerary and location summary in JSON format. The response MUST be a single JSON object with the following keys: 'locationName', 'summary' (a brief poetic description), 'bestTimeToVisit', 'highlights' (array of 3 points), 'itinerary' (array of objects with 'day' and 'activity'), and 'suggestedImageSearchTerm'."
                },
                {
                    role: "user",
                    content: `Create a 3-day premium travel plan for: ${query}`
                }
            ],
            response_format: { type: "json_object" }
        });

        const aiResponse = JSON.parse(completion.choices[0].message.content || '{}');

        // For images, we will use a high quality placeholder or Unsplash link if we had a key, 
        // but for now we'll return the AI data and the frontend will handle a beautiful layout.
        return NextResponse.json(aiResponse);

    } catch (error: any) {
        console.error('AI Search Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
