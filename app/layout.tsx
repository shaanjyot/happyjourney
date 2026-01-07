import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  variable: "--font-heading",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "HappyJourney - Premium International Travel Experiences",
  description: "Discover extraordinary travel experiences around the world. From cultural tours to adventure expeditions, HappyJourney creates unforgettable memories for families and explorers.",
  keywords: "travel, international travel, family travel, cultural tours, adventure travel, premium travel experiences",
  authors: [{ name: "HappyJourney" }],
  openGraph: {
    title: "HappyJourney - Premium International Travel Experiences",
    description: "Discover extraordinary travel experiences around the world",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${crimsonPro.variable} antialiased selection:bg-gold selection:text-navy`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}

          {/* Floating WhatsApp Button (Inspired by Reference Image) */}
          <a
            href="https://wa.me/916026284181"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-[100] p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group"
            aria-label="Contact on WhatsApp"
          >
            <svg
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.672 1.433 5.66 1.434h.005c6.551 0 11.868-5.335 11.87-11.892a11.82 11.82 0 00-3.475-8.435z" />
            </svg>
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white dark:bg-black text-[#0f2a44] dark:text-white text-xs font-bold rounded-lg shadow-xl opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all pointer-events-none whitespace-nowrap">
              Need Help? Chat with us!
            </span>
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}
