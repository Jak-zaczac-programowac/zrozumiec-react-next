import "./globals.css";

import { Tilt_Prism } from "next/font/google";

const font = Tilt_Prism({
    style: ["normal"],
    subsets: ["latin"],
    weight: "400",
});

export const metadata = {
    title: "TOPSHOP",
    description: "Sklep e-commerce w Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={font.className}>
            <body>{children}</body>
        </html>
    );
}
