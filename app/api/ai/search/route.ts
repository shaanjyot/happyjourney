import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: Request) {
    try {
        const { query } = await req.json();
        const normalizedQuery = typeof query === 'string' ? query.trim() : '';

        if (!normalizedQuery) {
            return NextResponse.json({ error: 'Query is required' }, { status: 400 });
        }

        return NextResponse.json(
            {
                error: 'AI search now runs client-side via Puter.js. Use HeroSection search input.',
                query: normalizedQuery,
            },
            { status: 410 }
        );
    } catch (error: unknown) {
        console.error('AI Search Error:', error);
        const message = error instanceof Error ? error.message : 'Unexpected error';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
