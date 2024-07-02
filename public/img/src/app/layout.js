
import { Roboto } from 'next/font/google'
import "./globals.css";
import Example from "@/components/Navbar";
import SmothScroling from '@/components/SmothScroling';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollButton';




const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Example/>
        <SmothScroling>
        {children}       
        </SmothScroling>
        <Footer/>
        <ScrollToTopButton/>
        </body>
    </html>
  );
}