-- HappyJourney Database Setup
-- Run this in your Supabase SQL Editor

-- Enable Row Level Security (RLS) on auth.users if needed
-- This is usually enabled by default in Supabase

-- Create a profiles table (optional, for extended user data)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policy for profiles (users can only read their own profile)
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

-- Create policy for admin to view all profiles
CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create destinations table
CREATE TABLE IF NOT EXISTS public.destinations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  trips_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable RLS on destinations
ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;

-- Allow public read access to destinations
CREATE POLICY "Anyone can view destinations" ON public.destinations
  FOR SELECT USING (true);

-- Only admins can insert/update/delete destinations
CREATE POLICY "Admins can manage destinations" ON public.destinations
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create trips table
CREATE TABLE IF NOT EXISTS public.trips (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  destination_id UUID REFERENCES public.destinations(id),
  title TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  duration_days INTEGER,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable RLS on trips
ALTER TABLE public.trips ENABLE ROW LEVEL SECURITY;

-- Allow public read access to trips
CREATE POLICY "Anyone can view trips" ON public.trips
  FOR SELECT USING (true);

-- Only admins can manage trips
CREATE POLICY "Admins can manage trips" ON public.trips
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create gallery table
CREATE TABLE IF NOT EXISTS public.gallery (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT,
  description TEXT,
  image_url TEXT NOT NULL,
  destination_id UUID REFERENCES public.destinations(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable RLS on gallery
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Allow public read access to gallery
CREATE POLICY "Anyone can view gallery" ON public.gallery
  FOR SELECT USING (true);

-- Only admins can manage gallery
CREATE POLICY "Admins can manage gallery" ON public.gallery
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create inquiries/contact table
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable RLS on inquiries
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Anyone can insert inquiries
CREATE POLICY "Anyone can create inquiries" ON public.inquiries
  FOR INSERT WITH CHECK (true);

-- Only admins can view inquiries
CREATE POLICY "Admins can view inquiries" ON public.inquiries
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, role)
  VALUES (NEW.id, NEW.email, 'user');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert sample destinations (optional)
INSERT INTO public.destinations (name, description, image_url, trips_count)
VALUES
  ('Santorini, Greece', 'Whitewashed villages and stunning sunsets', '/images/destinations/santorini.jpg', 12),
  ('Kyoto, Japan', 'Ancient temples and cherry blossoms', '/images/destinations/kyoto.jpg', 15),
  ('Swiss Alps', 'Majestic mountains and pristine lakes', '/images/destinations/swiss-alps.jpg', 10),
  ('Bali, Indonesia', 'Tropical paradise and cultural richness', '/images/destinations/bali.jpg', 18),
  ('Iceland', 'Northern lights and volcanic landscapes', '/images/destinations/iceland.jpg', 8),
  ('Machu Picchu, Peru', 'Ancient Incan citadel in the clouds', '/images/destinations/machu-picchu.jpg', 6)
ON CONFLICT DO NOTHING;

-- IMPORTANT: After running this script, create your admin user:
-- 1. Go to Supabase Dashboard > Authentication > Users
-- 2. Click "Add User"
-- 3. Email: admin@happyjourney.com
-- 4. Password: (set a secure password)
-- 5. Confirm the user
-- 6. Then run this SQL to make them admin:
--
-- UPDATE public.profiles
-- SET role = 'admin'
-- WHERE email = 'admin@happyjourney.com';
