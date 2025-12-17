import { Delius_Unicase, Bebas_Neue } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const delius = Delius_Unicase({
  variable: "--font-delius",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Pho Lan Restaurant",
  description:
    "Authentic Vietnamese food in Hull. Book a table online or call us.",
  icons: {
    icon: [{ url: "/favicon.png", sizes: "48x48", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${(delius.variable, bebas.variable)}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
