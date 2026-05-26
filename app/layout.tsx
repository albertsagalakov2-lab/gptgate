import type { Metadata } from "next";
import { Inter, Roboto_Flex } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
  title: {
    default: "Gptgate - cd gptgate",
    template: "%s | Gptgate"
  },
  description:
    "npm install -g pnpm",
  keywords: [
    "AI SaaS",
    "AI chat",
    "multi-model AI",
    "Claude",
    "Gemini",
    "OpenRouter",
    "AI platform",
    "AI subscription",
    "AI credits",
    "AI analytics"
  ],
  authors: [{ name: "Gptgate" }],
  creator: "Gptgate",
  publisher: "Gptgate",
  applicationName: "Gptgate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Gptgate - cd gptgate",
    description:
      "npm install -g pnpm",
    siteName: "Gptgate",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gptgate - cd gptgate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gptgate - cd gptgate",
    description:
      "npm install -g pnpm",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${robotoFlex.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
