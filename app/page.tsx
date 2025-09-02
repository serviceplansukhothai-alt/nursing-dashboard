// app/page.tsx
"use client";

import { useMemo, useState } from "react";

type TabKey =
  | "overview"
  | "users"
  | "lessons"
  | "uploads"
  | "quizzes"
  | "reports"
  | "certificates"
  | "settings";

export default function Home() {
  const [tab, setTab] = useState<TabKey>("overview");

  // ตัวเลขจำลองให้มีอะไรให้ดูในหน้า Overview
  const stats = useMemo(
    () => ({
      users: 128,
      lessons: 12,
      passRate: 72,
    }),
    []
  );

  return (
    <div className="container">
      {/* Top bar */}
      <div className="topbar">
        <div className="brand">
          <div className="brand-badge">NS</div>
          <div>
            ระบบนิเทศทางการพยาบาล — Dashboard
            <div className="muted">พร้อมใช้งานสำหรับ 1,000 ผู้ใช้</div>
          </div>
        </div>
        <button className="btn secondary">บัญชีผู้ดูแล</button>
      </div>

      <div className="shell">
        {/* Sidebar */}
        <aside className="panel sidebar">
          <div className="muted" style={{ paddingLeft: 6 }}>
            เมนูหลัก
          </div>
          <div className="menu">
            <button className={tab === "overview" ? "active" : ""} onClick={() => setTab("overview")}>
              ภาพรวม
            </button>
            <button className={tab === "users" ? "active" : ""} onClick={() => setTab("users")}>
              ผู้ใช้งาน
            </button>
            <button className={tab === "lessons" ? "active" : ""} onClick={() => setTab("lessons")}>
              จัดการบทเรียน
            </button>
            <button className={tab === "uploads" ? "active" : ""} onClick={() => setTab("uploads")}>
              ไฟล์วิดีโอ
            </button>
            <button className={tab === "quizzes" ? "active" : ""} onClick={() => setTab("quizzes")}>
              แบบทดสอบ
            </button>
            <button className={tab === "reports" ? "active" : ""} onClick={() => setTab("reports")}>
              รายงาน
            </button>
            <button className={tab === "certificates" ? "active" : ""} onClick={() => setTab("certificates")}>
              ใบประกาศ
            </button>
            <button className={tab === "settings" ? "active" : ""} onClick={() => setTab("settings")}>
              ตั้งค่า
            </button>
          </div>
        </aside>

        {/* Content */}
        <main className="panel content">
          {tab === "overview" && (
            <section className="grid">
              <div className="cards">
                <div className="card">
                  <h3>ผู้ใช้งานรวม</h3>
                  <div className="stat">{stats.users.toLocaleString()}</div>
                  <div className="muted">รองรับได้ถึง ~1,000 คน</div>
                </div>
                <div className="card">
                  <h3>บทเรียนทั้งหมด</h3>
                  <div className="stat">{stats.lessons}</div>
                  <div className="muted">10 หลัก + 2 อัปเดต</div>
                </div>
                <div className="card">
                  <h3>อัตราผ่าน ≥60%</h3>
                  <div className="stat">{stats.passRate}%</div>
                  <div className="muted">คำนวณจากผลการสอบล่าสุด</div>
                </div>
              </div>

              <div className="grid grid-2">
                <div className="section">
                  <h3 style={{ margin: 0, marginBottom: 8 }}>วิดีโอล่าสุด</h3>
                  <div className="muted">ยังไม่มีไฟล์วิดีโอในเดโมนี้</div>
                </div>
                <div className="section">
                  <h3 style={{ margin: 0, marginBottom: 8 }}>ภาพรวมแบบทดสอบ</h3>
                  <div className="muted">มีแบบทดสอบทั้งหมด 0 ชุด | ความพยายาม 0 ครั้ง</div>
                </div>
              </div>
            </section>
          )}

          {tab === "users" && (
            <section className="grid">
              <h2 style={{ margin: 0 }}>ผู้ใช้งาน</h2>
              <div className="section">
                <div className="row">
                  <div>
                    <label>ค้นหาด้วยชื่อ/อีเมล</label>
                    <input placeholder="เช่น nurse01@example.com" />
                  </div>
                  <div style={{ display: "flex", alignItems: "end" }}>
                    <button className="btn secondary">รีเฟรช</button>
                  </div>
                </div>
              </div>

              <div className="section">
                <table>
                  <thead>
                    <tr>
                      <th>ชื่อ</th>
                      <th>อีเมล</th>
                      <th>หน่วยงาน</th>
                      <th>สถานะข้อสอบ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>พยาบาล 1 (เดโม)</td>
                      <td>nurse1@example.com</td>
                      <td>-</td>
                      <td>ยังไม่ผ่าน</td>
                    </tr>
                    <tr>
                      <td>พยาบาล 2 (เดโม)</td>
                      <td>nurse2@example.com</td>
                      <td>-</td>
                      <td>ผ่าน ≥60%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {tab === "lessons" && (
            <section className="grid">
              <h2 style={{ margin: 0 }}>จัดการบทเรียน</h2>

              <div className="section">
                <div className="row">
                  <div>
                    <label>ชื่อบทเรียน</label>
                    <input placeholder="เช่น บทเรียนที่ 1" />
                  </div>
                  <div>
                    <label>สถานะ</label>
                    <select defaultValue="required">
                      <option value="required">จำเป็น (10 บทเรียนหลัก)</option>
                      <option value="ongoing">อัปเดตต่อเนื่อง (2 บทเรียน)</option>
                    </select>
                  </div>
                </div>
                <div className="row" style={{ marginTop: 12 }}>
                  <div>
                    <label>คำอธิบาย</label>
                    <textarea rows={3} placeholder="รายละเอียดสั้น ๆ ของบทเรียน" />
                  </div>
                  <div>
                    <label>การเผยแพร่</label>
                    <select defaultValue="draft">
                      <option value="draft">ฉบับร่าง</option>
                      <option value="published">เผยแพร่</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: 12 }}>
                  <button className="btn">เพิ่มบทเรียน</button>
                  <span className="muted" style={{ marginLeft: 10 }}>
                    *เดโม: ยังไม่บันทึกจริง
                  </span>
                </div>
              </div>

              <div className="section">
                <table>
                  <thead>
                    <tr>
                      <th>ชื่อบทเรียน</th>
                      <th>สถานะ</th>
                      <th>การเผยแพร่</th>
                      <th>ความยาว</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>บทเรียนที่ 1 (เดโม)</td>
                      <td>จำเป็น</td>
                      <td>ฉบับร่าง</td>
                      <td>12 นาที</td>
                    </tr>
                    <tr>
                      <td>บทเรียนอัปเดต A (เดโม)</td>
                      <td>อัปเดตต่อเนื่อง</td>
                      <td>เผยแพร่</td>
                      <td>14 นาที</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {tab === "uploads" && (
            <section className="grid">
              <h2 style={{ margin: 0 }}>ไฟล์วิดีโอ</h2>

              <div className="section">
                <label>อัปโหลดไฟล์วิดีโอ (เดโม)</label>
                <input type="file" multiple />
                <div className="muted" style={{ marginTop: 6 }}>
                  รองรับ .mp4, .mov, .webm
                </div>
              </div>

              <div className="section">
                <h3 style={{ marginTop: 0 }}>รายการไฟล์ (ตัวอย่าง)</h3>
                <table>
                  <thead>
                    <tr>
                      <th>ชื่อไฟล์</th>
                      <th>เชื่อมกับบทเรียน</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>intro.mp4</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {tab === "quizzes" && (
            <section className="grid">
              <h2 style={{ margin: 0 }}>แบบทดสอบ</h2>

              <div className="section">
                <div className="row">
                  <div>
                    <label>ชื่อชุดข้อสอบ</label>
                    <input defaultValue="แบบทดสอบหลังการอบรม" />
                  </div>
                  <div>
                    <label>Lesson ID ที่ผูก</label>
                    <input placeholder="เช่น lesson-uuid" />
                  </div>
                </div>
                <div style={{ marginTop: 12 }}>
                  <button className="btn">เพิ่มคำถาม</button>{" "}
                  <button className="btn secondary">บันทึกแบบทดสอบ</button>
                </div>
              </div>

              <div className="section">
                <h3 style={{ marginTop: 0 }}>ตัวอย่างคำถาม</h3>
                <ol>
                  <li>1 + 1 = ? (เฉลย: 2)</li>
                  <li>สีของท้องฟ้าคือ? (เฉลย: น้ำเงิน)</li>
                </ol>
              </div>
            </section>
          )}

          {tab === "reports" && (
            <section className="grid">
              <h2 style={{ margin: 0 }}>รายงาน</h2>

              <div className="section row">
                <div>
                  <label>เลือกบทเรียน</label>
                  <select>
                    <option>บทเรียนที่ 1 (เดโม)</option>
                    <option>บทเรียนอัปเดต A (เดโม)</option>
                  </select>
                </div>
                <div style={{ display: "flex", alignItems: "end" }}>
                  <button className="btn secondary">ดาวน์โหลด CSV</button>
                </div>
              </div>

              <div className="cards">
                <div className="card">
                  <h3>อัตราการผ่าน</h3>
                  <div className="stat">68%</div>
                </div>
                <div className="card">
                  <h3>คะแนนเฉลี่ย</h3>
                  <div className="stat">74%</div>
                </div>
                <div className="card">
                  <h3>จำนวนผู้ทำข้อสอบ</h3>
                  <div className="stat">45</div>
                </div>
              </div>
            </section>
          )}

          {tab === "certificates" && (
            <section className="grid">
              <h2 style={{ margin: 0 }}>ใบประกาศ</h2>

              <div className="section row">
                <div>
                  <label>เลือกผู้เรียน</label>
                  <select>
                    <option>พยาบาล 1 (เดโม)</option>
                    <option>พยาบาล 2 (เดโม)</option>
                  </select>
                </div>
                <div>
                  <label>Lesson ID</label>
                  <input placeholder="เช่น lesson-uuid" />
                </div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="btn">แสดงตัวอย่าง</button>
                <button className="btn secondary">ดาวน์โหลด PNG</button>
              </div>
              <div className="muted" style={{ marginTop: 8 }}>
                *เดโม: ปุ่มยังไม่สร้างไฟล์จริง
              </div>
            </section>
          )}

          {tab === "settings" && (
            <section className="grid">
              <h2 style={{ margin: 0 }}>ตั้งค่า</h2>

              <div className="section grid grid-2">
                <div>
                  <label>Primary Color</label>
                  <input type="color" defaultValue="#2563eb" />
                </div>
                <div>
                  <label>อัปโหลดโลโก้</label>
                  <input type="file" accept="image/*" />
                </div>
                <div>
                  <label>แก้ไขชื่อระบบ</label>
                  <input defaultValue="ระบบนิเทศทางการพยาบาล — Dashboard" />
                </div>
                <div>
                  <label>เพิ่มหน่วยงาน</label>
                  <input placeholder="ชื่อหน่วยงาน" />
                </div>
              </div>

              <div>
                <button className="btn">บันทึกการตั้งค่า</button>
                <span className="muted" style={{ marginLeft: 10 }}>
                  *เดโม: ยังไม่บันทึกจริง
                </span>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
