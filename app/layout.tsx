export const metadata = { title: 'Nursing Dashboard' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
