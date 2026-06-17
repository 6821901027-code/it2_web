import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" >
      <body className="layout">
        <Navbar/>
        <div className="main-content">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );  
}
