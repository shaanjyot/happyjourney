# HappyJourney - Premium International Travel Website

A modern, premium travel website built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## 🎨 Design Philosophy

- **Editorial & Calm**: Inspired by mature travel brands with a focus on clarity and trust
- **Premium Feel**: Deep navy blue color palette with muted gold accents
- **Family-Friendly**: Designed for international travelers of all ages
- **Smooth Animations**: Elegant transitions powered by Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Authentication**: Supabase Auth
- **Database**: Supabase
- **Icons**: Lucide React
- **Fonts**: Crimson Pro (headings) + Inter (body)

## 🎨 Color System

```css
Primary Colors:
- Deep Navy Blue: #0f2a44
- Slate Navy: #1f3a52

Accent Colors:
- Muted Gold: #f4b400 (CTAs, highlights)
- Soft Green: #8bc34a (secondary accent)

Text:
- Headings: #111111
- Body: #4a5a63

Backgrounds:
- White: #ffffff
- Light Gray: #f7f8f9
```

## 📦 Installation

1. **Clone the repository**
   ```bash
   cd /Users/apple/Desktop/happyjourney
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. **Set up Supabase**
   
   - Create a new Supabase project at https://supabase.com
   - Copy your project URL and anon key to `.env.local`
   - Run the following SQL in your Supabase SQL editor to create an admin user:

   ```sql
   -- Create admin user (you'll need to set the password via Supabase dashboard)
   -- Go to Authentication > Users > Add User
   -- Email: admin@happyjourney.com
   -- Password: (set a secure password)
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Authentication

### Admin Access
- **Login URL**: `/auth/login`
- **Admin Dashboard**: `/admin`
- **Default Admin Email**: `admin@happyjourney.com`

To create the admin user:
1. Go to your Supabase project dashboard
2. Navigate to Authentication > Users
3. Click "Add User"
4. Enter email: `admin@happyjourney.com`
5. Set a secure password
6. Confirm the user

## 📁 Project Structure

```
happyjourney/
├── app/
│   ├── admin/              # Admin dashboard (protected)
│   ├── auth/
│   │   └── login/          # Login page
│   ├── globals.css         # Global styles & design system
│   ├── layout.tsx          # Root layout with theme provider
│   └── page.tsx            # Homepage
├── components/
│   ├── admin/              # Admin components
│   ├── layout/             # Header, Footer
│   ├── providers/          # Theme provider
│   ├── sections/           # Homepage sections
│   └── ui/                 # Reusable UI components
├── lib/
│   └── supabase/           # Supabase client utilities
├── public/
│   └── images/             # Static images
├── middleware.ts           # Auth middleware
└── .env.local              # Environment variables (create this)
```

## 🎯 Features

### Current Features
- ✅ Premium editorial design
- ✅ Dark/Light mode with smooth transitions
- ✅ Responsive mobile-first layout
- ✅ Smooth scroll animations
- ✅ Supabase authentication
- ✅ Protected admin routes
- ✅ SEO optimized
- ✅ Accessible UI components

### Sections
1. **Hero Section** - Immersive full-screen hero with CTA
2. **Popular Destinations** - Image-forward destination cards
3. **Services** - Camping, Boating, Trekking, Cultural Tours
4. **Why Choose Us** - Value propositions
5. **Testimonials** - Customer reviews with ratings
6. **CTA Section** - Contact call-to-action
7. **Footer** - Multi-column with links and contact info

### To Be Implemented
- [ ] Full CRUD for trips/destinations
- [ ] Image gallery page
- [ ] Contact form with email integration
- [ ] Booking system
- [ ] Blog/content management
- [ ] User reviews system
- [ ] Payment integration

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production
Make sure to set these in your deployment platform:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 🎨 Design Guidelines

### Typography
- **Headings**: Crimson Pro (serif) - Editorial, refined
- **Body**: Inter (sans-serif) - Clean, readable
- **Line Height**: 1.7 for body, 1.3 for headings

### Spacing
- Generous whitespace
- Editorial rhythm
- Consistent padding/margins

### Animations
- Smooth, subtle transitions
- No aggressive animations
- Scroll-triggered fade-ins
- Hover effects with elevation

### Colors
- No neon or flashy gradients
- Subtle navy overlays only
- Muted gold for CTAs
- Soft shadows and borders

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔧 Customization

### Changing Colors
Edit `app/globals.css` and update the CSS variables:
```css
:root {
  --navy-primary: #0f2a44;
  --gold-accent: #f4b400;
  /* ... */
}
```

### Adding New Sections
1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Follow existing animation patterns

### Modifying Navigation
Edit `components/layout/Header.tsx`:
```typescript
const navigation = [
  { name: 'Home', href: '/' },
  // Add your links here
]
```

## 📄 License

This project is proprietary and confidential.

## 🤝 Support

For questions or support, contact: hello@happyjourney.com

---

Built with ❤️ by the HappyJourney team
