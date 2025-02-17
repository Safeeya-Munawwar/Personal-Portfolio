import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";  // Import the Navbar component
import "./globals.css";  // Global styles

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Safeeya Munawwar | Portfolio",
  description: "Full-Stack Developer | UI Designer | ICT Tutor",
  viewport: "width=device-width, initial-scale=1.0",  // ✅ Add viewport meta tag here
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />  
        <main>{children}</main>  
      </body>
    </html>
  );
}
