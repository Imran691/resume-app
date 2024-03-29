import { Providers } from '../../components/header/Providers'
import Footer from "components/Footer";
import Header from "components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <Providers>
        <Header/>
        {children}
        <Footer/>
        </Providers> 
      </body>
    </html>
  );
}
