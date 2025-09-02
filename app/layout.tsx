export const metadata = {
  title: "Nursing Dashboard",
  description: "ระบบแดชบอร์ดพยาบาลออนไลน์",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <header style={{ padding: 16, background: "#1976d2", color: "white" }}>
          <h1>🏥 Nursing Dashboard</h1>
        </header>
        <main style={{ padding: 24 }}>{children}</main>
      </body>
    </html>
  );
}
