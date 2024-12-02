import { Poppins } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/ClientProvider";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  preload: false,
});

export const metadata = {
  title: "Red Cross Cavite",
  description: "sample description",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
