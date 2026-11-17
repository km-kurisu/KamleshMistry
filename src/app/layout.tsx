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

const melodrama = localFont({
  src: "../fonts/melodrama/Melodrama-Variable.ttf",
  variable: "--font-melo",
  weight: "100 900",
  display: "swap",
});

const panchang = localFont({
  src: "../fonts/panchang/Panchang-Variable.ttf",
  variable: "--font-panchang",
  weight: "200 800",
  display: "swap",
});

const cabinetGrotesk = localFont({
  src: "../fonts/cabinet/CabinetGrotesk-Variable.ttf",
  variable: "--font-cabinet",
  weight: "200 700",
  display: "swap",
});

const boska = localFont({
  src: "../fonts/boska/Boska-Variable.ttf",
  variable: "--font-boska",
  weight: "200 700",
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
        className={`${stardom.variable} ${melodrama.variable} ${panchang.variable} ${cabinetGrotesk.variable} ${boska.variable} antialiased bg-background text-foreground`}
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
