import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nursing Dashboard",
  description: "Admin Nursing Supervision Dashboard"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
