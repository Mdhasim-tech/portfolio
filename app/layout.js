import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "ML Engineer Portfolio",
  description: "Portfolio of an ML Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        {/* FontAwesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-p6O8Ix10W8mtFMXAZ7JyJebp8FlqxR1QJ/T2aLHVdxqvV5zFIvl5x0pY7p7fAxQOY9Md0Pk69JP+up0UBUQKXQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
