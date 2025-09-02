// app/layout.tsx
export const metadata = {
  title: "Nursing Dashboard",
  description: "ระบบนิเทศทางการพยาบาล — Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        {children}

        {/* Global Styles (ไม่ต้องติดตั้งลิบอะไรเพิ่ม) */}
        <style jsx global>{`
          :root {
            --primary: #2563eb;
            --bg: #0b0c10;
            --card: #111318;
            --muted: #9aa4b2;
            --border: #1e222b;
          }
          * { box-sizing: border-box; }
          html, body { height: 100%; }
          body {
            margin: 0;
            background: var(--bg);
            color: #e5e7eb;
            font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,
              Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          .shell {
            display: grid;
            grid-template-columns: 240px 1fr;
            gap: 16px;
            align-items: start;
          }
          .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 18px;
            background: #0e1116;
            border: 1px solid var(--border);
            border-radius: 14px;
            margin-bottom: 16px;
          }
          .brand {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
          }
          .brand-badge {
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            background: var(--primary);
            color: #fff;
            font-weight: 700;
          }
          .muted { color: var(--muted); font-size: 13px; }
          .panel {
            background: var(--card);
            border: 1px solid var(--border);
            border-radius: 14px;
          }
          .sidebar { padding: 10px; position: sticky; top: 20px; }
          .menu { display: grid; gap: 6px; margin-top: 6px; }
          .menu button {
            width: 100%;
            text-align: left;
            padding: 10px 12px;
            background: #0e1116;
            border: 1px solid var(--border);
            color: #dbe1ea;
            border-radius: 10px;
            cursor: pointer;
          }
          .menu button:hover { background: #11161d; }
          .menu button.active {
            background: var(--primary);
            border-color: transparent;
            color: #fff;
          }
          main.content { padding: 16px; }
          .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
          .card { padding: 16px; border-radius: 12px; background: #0f1319; border: 1px solid var(--border); }
          .card h3 { margin: 0 0 8px 0; font-size: 16px; font-weight: 600; }
          .stat { font-size: 28px; font-weight: 700; }
          .grid { display: grid; gap: 12px; }
          .grid-2 { grid-template-columns: 1fr 1fr; }
          .section { padding: 14px; border-radius: 12px; background: #0f1319; border: 1px solid var(--border); }
          input, select, textarea {
            background: #0b0f15;
            border: 1px solid var(--border);
            color: #e5e7eb;
            border-radius: 10px;
            padding: 10px 12px;
          }
          label { font-size: 13px; color: var(--muted); display: block; margin-bottom: 6px; }
          .row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
          .btn {
            background: var(--primary);
            color: #fff;
            border: 0;
            padding: 10px 14px;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 600;
          }
          .btn.secondary { background: #0e1116; border: 1px solid var(--border); color: #dbe1ea; }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #0f1319;
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
          }
          th, td { padding: 10px 12px; border-bottom: 1px solid var(--border); }
          tr:last-child td { border-bottom: 0; }
          th { background: #0e1116; text-align: left; color: #b7c2cf; font-weight: 600; }
          @media (max-width: 960px) {
            .shell { grid-template-columns: 1fr; }
            .cards { grid-template-columns: 1fr; }
            .row, .grid-2 { grid-template-columns: 1fr; }
          }
        `}</style>
      </body>
    </html>
  );
}
