-- DESTINATIONS TABLE
CREATE TABLE IF NOT EXISTS destinations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    country TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    duration TEXT,
    price TEXT,
    slug TEXT UNIQUE,
    is_popular BOOLEAN DEFAULT false,
    order_index INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- COMPLETED JOURNEYS (Travel Diaries)
CREATE TABLE IF NOT EXISTS completed_journeys (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    tagline TEXT,
    description TEXT,
    image_url TEXT,
    order_index INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- SECTION CONTENT (FOR TEXT HEADERS, CTA, HERO)
CREATE TABLE IF NOT EXISTS section_content (
    section_id TEXT PRIMARY KEY,
    content JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ENABLE RLS
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE completed_journeys ENABLE ROW LEVEL SECURITY;
ALTER TABLE section_content ENABLE ROW LEVEL SECURITY;

-- POLICIES: Public Read Access
CREATE POLICY "Public Read Access" ON destinations FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON completed_journeys FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON section_content FOR SELECT USING (true);

-- POLICIES: Admin Write Access (Restricted to specific emails or admin role)
-- Replace 'admin@happyjourney.net' with your actual admin email
CREATE POLICY "Admin All Access" ON destinations FOR ALL 
USING (auth.jwt() ->> 'email' = 'admin@happyjourney.net')
WITH CHECK (auth.jwt() ->> 'email' = 'admin@happyjourney.net');

CREATE POLICY "Admin All Access" ON completed_journeys FOR ALL 
USING (auth.jwt() ->> 'email' = 'admin@happyjourney.net')
WITH CHECK (auth.jwt() ->> 'email' = 'admin@happyjourney.net');

CREATE POLICY "Admin All Access" ON section_content FOR ALL 
USING (auth.jwt() ->> 'email' = 'admin@happyjourney.net')
WITH CHECK (auth.jwt() ->> 'email' = 'admin@happyjourney.net');
