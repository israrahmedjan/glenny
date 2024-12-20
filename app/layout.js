import localFont from "next/font/local";
import { Roboto } from 'next/font/google';
import "./globals.css";
import { Providers } from "./_components/redux/Providers";

import HeaderPage from "./_components/Header/Header";
import FooterPage from "./_components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Online Shop",
  description: "Online Shop Descriptions",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the font weights you need
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
    
    
       <Providers>
        <HeaderPage />
        {children}
        <FooterPage />
        </Providers>
      
      
     
      </body>
    </html>
  );
}
