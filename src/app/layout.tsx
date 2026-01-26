import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const stardom = localFont({
  src: "../fonts/Stardom-Regular.otf",
  variable: "--font-stardom",
  display: "swap",
});

const array = localFont({
  src: "../fonts/Array-Regular.otf",
  variable: "--font-array",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kamlesh Mistry | Portfolio",
  description: "Creative developer, designer, and artist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${stardom.variable} ${array.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
