import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
 
export const metadata = {
  title: "Car Showcase App",
  description: "Discover The Best Car In the World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
