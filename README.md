# Nursing Supervision Dashboard (Next.js + Supabase)

## Features
- Email/password auth (Supabase)
- Role-based access (ADMIN/USER) with RLS
- Separate routes: `/admin` and `/app`
- Lessons CRUD (admin) stored in DB
- Quizzes (admin create) & take quiz (user), pass >= 60%, attempts recorded
- CSV export (client-side), simple branding settings

## Quick Start
1. Create a Supabase project → copy Project URL & anon key.
2. In Supabase → SQL Editor → run `supabase/schema.sql`.
3. Settings → Auth:
   - Disable email confirmations for quick test (or set SMTP).
4. In Vercel:
   - Import this repo or upload as project.
   - Set env vars:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `SUPABASE_SERVICE_ROLE` (for server actions seeding admin role)
     - `ADMIN_EMAIL` (e.g., kraisorn_toomboot@cmu.ac.th)
5. Deploy → you'll get a public URL (e.g. https://yourapp.vercel.app).
6. Open `/auth/register` to create an account. The email matching `ADMIN_EMAIL` will be admin.

## Local Dev
```bash
cp .env.example .env
# fill variables
npm i
npm run dev
```

  ---

  ## Promote Admin (one-time)
  After deploy, run:
  ```bash
  curl -X POST https://YOUR_DEPLOY_URL/api/seed-admin \
-H "x-seed-secret: $ADMIN_SEED_SECRET"
  ```

  ### Required envs on Vercel
  - NEXT_PUBLIC_SUPABASE_URL
  - NEXT_PUBLIC_SUPABASE_ANON_KEY
  - SUPABASE_SERVICE_ROLE (server)
  - ADMIN_EMAIL (e.g. kraisorn_toomboot@cmu.ac.th)
  - ADMIN_SEED_SECRET (any long random string)

---

## ZERO-ENV QuickStart (ง่ายที่สุด)
1. สร้าง Supabase Project → ไปที่ Settings → API → คัดลอก **Project URL** และ **anon public key**
2. Deploy โปรเจกต์นี้ขึ้น Vercel (ไม่ต้องใส่ ENV ก็ได้)
3. เปิด `https://YOUR_DEPLOY_URL/setup` → วาง **URL** + **anon key** → กดบันทึก
4. ไป `/auth/register` สมัครผู้ใช้แรก → ไป `/app` แท็บ Profile → กด **“ทำฉันเป็นแอดมิน (ครั้งแรก)”** → ระบบจะอัปเดตบทบาทเป็น ADMIN ถ้ายังไม่มีแอดมินคนใดในระบบ

หมายเหตุ: ความลับ (anon key) เป็น public key ของ Supabase อยู่แล้ว จึงปลอดภัยพอสำหรับฝั่ง client (ตามแนวทาง Supabase)

---

## This build is pre-configured
- `public/config.json` already contains your Supabase URL & anon key.
- No need to set ENV nor visit /setup.
- Steps:
  1) Run `schema.sql` on Supabase once.
  2) Deploy to Vercel (Upload this ZIP).
  3) Open `/auth/register` to create the first user.
  4) Go to `/app` → Profile → click **ทำฉันเป็นแอดมิน (ครั้งแรก)** to become ADMIN if no admin exists yet.
