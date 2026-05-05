import { useState, useEffect, useRef } from "react";

// ============================================================
//  EDITABLE COMPANY INFO — แก้ได้เลยครับ!
// ============================================================
const DEFAULT_COMPANY = {
  name: "NEXUS INTELLIGENCE",
  tagline: "AI TEAM. REAL RESULTS.",
  subTagline: "ทีม AI ชั้นยอด พร้อมรับงานทุกด้าน",
  phone: "02-123-4567",
  email: "contact@nexusintel.ai",
  address: "88 AI Tower, ถนนวิทยุ, ลุมพินี, กรุงเทพฯ 10330",
  line: "@nexusintel",
  website: "www.nexusintel.ai",
};

const AGENTS = [
  {
    id: "aria", name: "ARIA", role: "Chief Strategist",
    specialty: "วางแผนกลยุทธ์ & วิเคราะห์ข้อมูล",
    color: "#00FFD1", icon: "🧠", level: 92,
    skills: ["Strategic Planning", "Data Analysis", "Decision Making"],
    price: "฿2,500/hr",
    pitch: "You are ARIA, an elite AI strategist. In 2 punchy sentences (Thai), tell a potential client ONE specific way you'll transform their business. End with your English tagline.",
  },
  {
    id: "nex", name: "NEX", role: "Lead Developer",
    specialty: "เขียนโค้ด & แก้ปัญหาเทคนิค",
    color: "#FF6B35", icon: "⚡", level: 98,
    skills: ["Full-Stack Dev", "System Design", "Debug & Optimize"],
    price: "฿3,000/hr",
    pitch: "You are NEX, a legendary AI developer. In 2 punchy sentences (Thai), tell a potential client ONE specific system you'll build for them. End with your English tagline.",
  },
  {
    id: "muse", name: "MUSE", role: "Creative Director",
    specialty: "ออกแบบ & สร้างสรรค์เนื้อหา",
    color: "#C77DFF", icon: "✨", level: 95,
    skills: ["UI/UX Design", "Copywriting", "Brand Strategy"],
    price: "฿2,800/hr",
    pitch: "You are MUSE, a visionary AI creative director. In 2 poetic sentences (Thai), tell a potential client ONE specific creative vision you'll bring to life. End with your English tagline.",
  },
  {
    id: "sage", name: "SAGE", role: "Research Analyst",
    specialty: "วิจัยข้อมูล & รายงานเชิงลึก",
    color: "#FFD60A", icon: "🔍", level: 89,
    skills: ["Deep Research", "Market Analysis", "Forecasting"],
    price: "฿2,200/hr",
    pitch: "You are SAGE, a brilliant AI research analyst. In 2 precise sentences (Thai), tell a potential client ONE specific insight you'll uncover for them. End with your English tagline.",
  },
  {
    id: "echo", name: "ECHO", role: "Communications Lead",
    specialty: "สื่อสาร & ประสานงาน",
    color: "#4CC9F0", icon: "📡", level: 91,
    skills: ["Multilingual", "PR & Outreach", "Meeting Facilitation"],
    price: "฿2,000/hr",
    pitch: "You are ECHO, a master AI communicator. In 2 warm sentences (Thai), tell a potential client ONE specific message you'll help them deliver. End with your English tagline.",
  },
  {
    id: "veil", name: "VEIL", role: "Security Expert",
    specialty: "ปกป้องข้อมูล & ความปลอดภัย",
    color: "#F72585", icon: "🛡️", level: 97,
    skills: ["Cybersecurity", "Privacy Guard", "Risk Assessment"],
    price: "฿3,500/hr",
    pitch: "You are VEIL, a formidable AI security expert. In 2 intense sentences (Thai), tell a potential client ONE specific threat you'll eliminate for them. End with your English tagline.",
  },
];

async function callClaude(prompt) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json();
  return data.content?.[0]?.text || "ไม่สามารถโหลดได้";
}

// ─── Editable Field ──────────────────────────────────────────
function EditableField({ value, onChange, style, inputStyle, multiline }) {
  const [editing, setEditing] = useState(false);
  const ref = useRef();
  useEffect(() => { if (editing && ref.current) ref.current.focus(); }, [editing]);
  if (editing) {
    const props = {
      ref, value,
      onChange: (e) => onChange(e.target.value),
      onBlur: () => setEditing(false),
      onKeyDown: (e) => { if (!multiline && e.key === "Enter") setEditing(false); },
      style: {
        background: "rgba(0,255,209,0.05)", border: "1px solid #00FFD1",
        color: "inherit", font: "inherit", outline: "none", borderRadius: 3,
        padding: "2px 6px", width: "100%", resize: "none",
        ...inputStyle,
      },
    };
    return multiline ? <textarea rows={2} {...props} /> : <input {...props} />;
  }
  return (
    <span
      onClick={() => setEditing(true)}
      title="คลิกเพื่อแก้ไข"
      style={{ cursor: "text", borderBottom: "1px dashed #333", ...style }}
    >
      {value}
      <span style={{ fontSize: 10, opacity: 0.3, marginLeft: 4 }}>✎</span>
    </span>
  );
}

// ─── Floating Particles ──────────────────────────────────────
function Particles() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {[...Array(20)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: Math.random() * 2 + 1,
          height: Math.random() * 2 + 1,
          borderRadius: "50%",
          background: ["#00FFD1", "#FF6B35", "#C77DFF", "#FFD60A", "#4CC9F0", "#F72585"][i % 6],
          opacity: Math.random() * 0.4 + 0.1,
          animation: `float ${Math.random() * 10 + 8}s ease-in-out ${Math.random() * 5}s infinite alternate`,
        }} />
      ))}
    </div>
  );
}

// ─── Agent Card ──────────────────────────────────────────────
function AgentCard({ agent, onHire }) {
  const [pitch, setPitch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hovered, setHovered] = useState(false);

  const loadPitch = async () => {
    if (pitch || loading) return;
    setLoading(true);
    const text = await callClaude(agent.pitch);
    setPitch(text);
    setLoading(false);
  };

  return (
    <div
      onMouseEnter={() => { setHovered(true); loadPitch(); }}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${agent.color}08` : "#090E1A",
        border: `1px solid ${hovered ? agent.color + "99" : "#1A2235"}`,
        borderRadius: 6, padding: 24,
        transition: "all 0.3s ease",
        boxShadow: hovered ? `0 8px 40px ${agent.color}20, inset 0 0 40px ${agent.color}05` : "none",
        display: "flex", flexDirection: "column", gap: 16,
      }}
    >
      {/* Top */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
        <div style={{
          width: 56, height: 56, flexShrink: 0,
          background: `${agent.color}15`,
          border: `1px solid ${agent.color}44`,
          borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 28,
          boxShadow: hovered ? `0 0 20px ${agent.color}40` : "none",
          transition: "box-shadow 0.3s",
        }}>{agent.icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: 3, color: agent.color, fontFamily: "monospace" }}>
            {agent.name}
          </div>
          <div style={{ fontSize: 10, color: "#666", letterSpacing: 2, marginBottom: 4 }}>{agent.role.toUpperCase()}</div>
          <div style={{ fontSize: 12, color: "#999" }}>{agent.specialty}</div>
        </div>
        <div style={{
          fontSize: 14, fontWeight: 900, color: agent.color,
          background: `${agent.color}15`, border: `1px solid ${agent.color}44`,
          padding: "4px 10px", borderRadius: 4, fontFamily: "monospace", whiteSpace: "nowrap",
        }}>{agent.price}</div>
      </div>

      {/* Power bar */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
          <span style={{ fontSize: 9, letterSpacing: 2, color: "#444" }}>POWER LEVEL</span>
          <span style={{ fontSize: 9, color: agent.color, fontFamily: "monospace" }}>{agent.level}%</span>
        </div>
        <div style={{ height: 2, background: "#1A2235", borderRadius: 2 }}>
          <div style={{
            height: "100%", borderRadius: 2, background: agent.color,
            width: hovered ? `${agent.level}%` : "0%",
            transition: "width 0.8s ease",
            boxShadow: `0 0 10px ${agent.color}`,
          }} />
        </div>
      </div>

      {/* Skills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {agent.skills.map(s => (
          <span key={s} style={{
            fontSize: 9, padding: "3px 9px",
            border: `1px solid ${agent.color}33`,
            color: agent.color, borderRadius: 20, letterSpacing: 1,
          }}>{s}</span>
        ))}
      </div>

      {/* AI Pitch */}
      <div style={{
        minHeight: 60,
        background: "#060A12",
        border: "1px solid #1A2235",
        borderRadius: 6, padding: 14,
        fontSize: 13, lineHeight: 1.8, color: "#CCC",
        fontFamily: "Georgia, serif",
        transition: "all 0.3s",
      }}>
        {loading ? (
          <span style={{ color: agent.color, fontFamily: "monospace", fontSize: 11, letterSpacing: 2 }}>
            {agent.name} กำลังพูด...
          </span>
        ) : pitch ? pitch : (
          <span style={{ color: "#2A3040", fontFamily: "monospace", fontSize: 11 }}>
            ▸ Hover เพื่อฟัง {agent.name} พูดโดยตรง
          </span>
        )}
      </div>

      {/* CTA */}
      <button
        onClick={() => onHire(agent)}
        style={{
          background: "transparent",
          border: `1px solid ${agent.color}`,
          color: agent.color, padding: "10px",
          fontSize: 11, letterSpacing: 3, fontWeight: 900,
          fontFamily: "monospace", cursor: "pointer",
          borderRadius: 4, transition: "all 0.2s",
          width: "100%",
        }}
        onMouseEnter={e => { e.target.style.background = `${agent.color}15`; e.target.style.boxShadow = `0 0 20px ${agent.color}40`; }}
        onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.boxShadow = "none"; }}
      >
        ▶ HIRE {agent.name}
      </button>
    </div>
  );
}

// ─── Contact Form Modal ──────────────────────────────────────
function HireModal({ agent, onClose, company }) {
  const [form, setForm] = useState({ name: "", org: "", project: "", budget: "" });
  const [sent, setSent] = useState(false);
  const [aiReply, setAiReply] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const reply = await callClaude(
      `You are ${agent.name}, ${agent.role}. A client named "${form.name}" from "${form.org}" wants to hire you for: "${form.project}" with budget "${form.budget}". 
      Write a SHORT, enthusiastic acceptance message (3 sentences in Thai). Confirm you'll contact them soon. Be in character.`
    );
    setAiReply(reply);
    setSent(true);
    setLoading(false);
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(3,5,10,0.92)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 16, backdropFilter: "blur(8px)",
    }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: "#090E1A",
        border: `1px solid ${agent.color}66`,
        borderRadius: 8, padding: 32, maxWidth: 480, width: "100%",
        boxShadow: `0 0 60px ${agent.color}20`,
        position: "relative",
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: 16, right: 16,
          background: "transparent", border: "none",
          color: "#555", fontSize: 20, cursor: "pointer",
        }}>✕</button>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <span style={{ fontSize: 32 }}>{agent.icon}</span>
          <div>
            <div style={{ color: agent.color, fontWeight: 900, letterSpacing: 3, fontFamily: "monospace" }}>
              HIRE {agent.name}
            </div>
            <div style={{ fontSize: 11, color: "#666" }}>{agent.role}</div>
          </div>
        </div>

        {!sent ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { key: "name", label: "ชื่อ-นามสกุล", placeholder: "คุณ / บริษัท" },
              { key: "org", label: "องค์กร", placeholder: "ชื่อบริษัท / หน่วยงาน" },
              { key: "project", label: "งานที่ต้องการ", placeholder: "อธิบายสั้นๆ..." },
              { key: "budget", label: "งบประมาณ", placeholder: "เช่น ฿50,000 / เดือน" },
            ].map(f => (
              <div key={f.key}>
                <div style={{ fontSize: 10, letterSpacing: 2, color: "#666", marginBottom: 6 }}>{f.label.toUpperCase()}</div>
                <input
                  value={form[f.key]}
                  onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                  placeholder={f.placeholder}
                  style={{
                    width: "100%", background: "#060A12",
                    border: `1px solid #1A2235`, borderRadius: 4,
                    padding: "10px 14px", color: "#DDD",
                    fontFamily: "monospace", fontSize: 13, outline: "none",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={e => e.target.style.borderColor = agent.color}
                  onBlur={e => e.target.style.borderColor = "#1A2235"}
                />
              </div>
            ))}
            <button
              onClick={handleSubmit}
              disabled={loading || !form.name}
              style={{
                background: loading ? `${agent.color}15` : "transparent",
                border: `1px solid ${agent.color}`,
                color: agent.color, padding: "13px",
                fontSize: 12, letterSpacing: 3, fontWeight: 900,
                fontFamily: "monospace", cursor: loading ? "wait" : "pointer",
                borderRadius: 4, marginTop: 8,
              }}
            >
              {loading ? "⟳ กำลังส่ง..." : `▶ SEND REQUEST TO ${agent.name}`}
            </button>
          </div>
        ) : (
          <div>
            <div style={{ color: agent.color, fontFamily: "monospace", fontSize: 11, letterSpacing: 2, marginBottom: 14 }}>
              ✓ {agent.name} ตอบรับแล้ว
            </div>
            <div style={{
              background: "#060A12", border: `1px solid ${agent.color}33`,
              borderRadius: 6, padding: 16, fontFamily: "Georgia, serif",
              fontSize: 14, lineHeight: 1.8, color: "#CCC", marginBottom: 20,
            }}>{aiReply}</div>
            <div style={{ fontSize: 11, color: "#666", lineHeight: 1.8 }}>
              📞 {company.phone}<br />
              📧 {company.email}<br />
              📍 {company.address}
            </div>
            <button
              onClick={onClose}
              style={{
                marginTop: 16, width: "100%", background: "transparent",
                border: `1px solid ${agent.color}`, color: agent.color,
                padding: "10px", fontSize: 11, letterSpacing: 3,
                fontFamily: "monospace", cursor: "pointer", borderRadius: 4,
              }}
            >✕ CLOSE</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main App ────────────────────────────────────────────────
export default function AIAgency() {
  const [company, setCompany] = useState(DEFAULT_COMPANY);
  const [hiring, setHiring] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const [editMode, setEditMode] = useState(false);

  const updateCompany = (key) => (val) => setCompany(p => ({ ...p, [key]: val }));

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060A12",
      color: "#E0E0E0",
      fontFamily: "'Courier New', monospace",
      position: "relative",
    }}>
      <Particles />

      {/* Grid overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(0,255,209,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,209,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(6,10,18,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1A2235",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 32px", gap: 16,
      }}>
        <div style={{ fontWeight: 900, letterSpacing: 4, fontSize: 16, color: "#00FFD1" }}>
          <EditableField value={company.name} onChange={updateCompany("name")} />
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[["home", "HOME"], ["agents", "AGENTS"], ["contact", "CONTACT"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: "none", border: "none",
              color: activeSection === id ? "#00FFD1" : "#555",
              cursor: "pointer", fontSize: 10, letterSpacing: 3,
              fontFamily: "monospace", transition: "color 0.2s",
            }}
              onMouseEnter={e => { if (activeSection !== id) e.target.style.color = "#888"; }}
              onMouseLeave={e => { if (activeSection !== id) e.target.style.color = "#555"; }}
            >{label}</button>
          ))}
          <button onClick={() => setEditMode(e => !e)} style={{
            background: editMode ? "#00FFD115" : "transparent",
            border: `1px solid ${editMode ? "#00FFD1" : "#2A3545"}`,
            color: editMode ? "#00FFD1" : "#555",
            cursor: "pointer", fontSize: 9, letterSpacing: 2, padding: "4px 10px",
            fontFamily: "monospace", borderRadius: 3,
          }}>✎ {editMode ? "DONE" : "EDIT"}</button>
        </div>
      </nav>

      <div style={{ paddingTop: 60 }}>

        {/* HERO */}
        <section id="home" style={{
          minHeight: "100vh", display: "flex", alignItems: "center",
          justifyContent: "center", textAlign: "center",
          padding: "80px 16px", position: "relative", zIndex: 1,
        }}>
          <div>
            <div style={{ color: "#00FFD1", letterSpacing: 8, fontSize: 10, marginBottom: 16 }}>
              ◆ {editMode
                ? <EditableField value={company.tagline} onChange={updateCompany("tagline")} />
                : company.tagline
              } ◆
            </div>
            <h1 style={{
              fontSize: "clamp(36px, 8vw, 88px)", fontWeight: 900,
              letterSpacing: 4, lineHeight: 1.05, margin: "0 0 16px",
              color: "#FFFFFF",
              textShadow: "0 0 80px rgba(0,255,209,0.2)",
            }}>
              {editMode
                ? <EditableField value={company.name} onChange={updateCompany("name")} style={{ fontSize: "inherit" }} />
                : company.name}
            </h1>
            <div style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              color: "#778",
              marginBottom: 48, letterSpacing: 2,
            }}>
              {editMode
                ? <EditableField value={company.subTagline} onChange={updateCompany("subTagline")} />
                : company.subTagline
              }
            </div>

            {/* Agent mini-avatars */}
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 48 }}>
              {AGENTS.map(a => (
                <div key={a.id} title={a.name} style={{
                  width: 44, height: 44,
                  background: `${a.color}18`,
                  border: `1px solid ${a.color}44`,
                  borderRadius: 8, fontSize: 20,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 20px ${a.color}60`; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}
                  onClick={() => scrollTo("agents")}
                >{a.icon}</div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("agents")} style={{
                background: "#00FFD1", color: "#060A12",
                border: "none", padding: "14px 36px",
                fontSize: 12, letterSpacing: 3, fontWeight: 900,
                fontFamily: "monospace", cursor: "pointer", borderRadius: 4,
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.target.style.boxShadow = "0 0 30px rgba(0,255,209,0.5)"; e.target.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.target.style.boxShadow = "none"; e.target.style.transform = "none"; }}
              >▶ MEET THE TEAM</button>
              <button onClick={() => scrollTo("contact")} style={{
                background: "transparent", color: "#00FFD1",
                border: "1px solid #00FFD1", padding: "14px 36px",
                fontSize: 12, letterSpacing: 3, fontFamily: "monospace",
                cursor: "pointer", borderRadius: 4, transition: "all 0.2s",
              }}
                onMouseEnter={e => { e.target.style.background = "#00FFD115"; }}
                onMouseLeave={e => { e.target.style.background = "transparent"; }}
              >✉ CONTACT US</button>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{
          background: "#080D18", borderTop: "1px solid #1A2235", borderBottom: "1px solid #1A2235",
          padding: "32px 16px", position: "relative", zIndex: 1,
        }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
            {[
              { n: "6", label: "AI SPECIALISTS" },
              { n: "24/7", label: "AVAILABILITY" },
              { n: "∞", label: "SCALABILITY" },
              { n: "100%", label: "AI-POWERED" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#00FFD1" }}>{s.n}</div>
                <div style={{ fontSize: 9, letterSpacing: 3, color: "#555" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* AGENTS SECTION */}
        <section id="agents" style={{ padding: "80px 16px", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ color: "#00FFD1", letterSpacing: 6, fontSize: 10, marginBottom: 10 }}>
                ◆ OUR TEAM ◆
              </div>
              <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 900, letterSpacing: 4, margin: 0 }}>
                MEET YOUR AI SPECIALISTS
              </h2>
              <p style={{ color: "#666", fontSize: 12, marginTop: 12, letterSpacing: 2 }}>
                Hover บน Card เพื่อฟัง AI แต่ละตัวพูดแบบ Real-time ผ่าน Claude API
              </p>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 20,
            }}>
              {AGENTS.map(a => (
                <AgentCard key={a.id} agent={a} onHire={setHiring} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" style={{
          padding: "80px 16px",
          background: "#080D18",
          borderTop: "1px solid #1A2235",
          position: "relative", zIndex: 1,
        }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <div style={{ color: "#00FFD1", letterSpacing: 6, fontSize: 10, marginBottom: 10 }}>◆ CONTACT ◆</div>
            <h2 style={{ fontSize: "clamp(22px, 4vw, 38px)", fontWeight: 900, letterSpacing: 4, marginBottom: 40 }}>
              REACH THE TEAM
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 40, textAlign: "left" }}>
              {[
                { icon: "📞", label: "PHONE", key: "phone" },
                { icon: "📧", label: "EMAIL", key: "email" },
                { icon: "💬", label: "LINE", key: "line" },
                { icon: "🌐", label: "WEBSITE", key: "website" },
              ].map(({ icon, label, key }) => (
                <div key={key} style={{
                  background: "#090E1A", border: "1px solid #1A2235",
                  borderRadius: 6, padding: "16px 20px",
                  display: "flex", alignItems: "center", gap: 12,
                }}>
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 9, letterSpacing: 2, color: "#555", marginBottom: 3 }}>{label}</div>
                    <div style={{ fontSize: 14, color: "#CCC" }}>
                      {editMode
                        ? <EditableField value={company[key]} onChange={updateCompany(key)} />
                        : company[key]}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Address full-width */}
            <div style={{
              background: "#090E1A", border: "1px solid #1A2235",
              borderRadius: 6, padding: "16px 20px",
              display: "flex", alignItems: "flex-start", gap: 12, textAlign: "left", marginBottom: 40,
            }}>
              <span style={{ fontSize: 20 }}>📍</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 9, letterSpacing: 2, color: "#555", marginBottom: 3 }}>ADDRESS</div>
                <div style={{ fontSize: 14, color: "#CCC", lineHeight: 1.6 }}>
                  {editMode
                    ? <EditableField value={company.address} onChange={updateCompany("address")} multiline />
                    : company.address}
                </div>
              </div>
            </div>

            <button
              onClick={() => { setHiring(AGENTS[0]); scrollTo("home"); }}
              style={{
                background: "transparent", border: "1px solid #00FFD1",
                color: "#00FFD1", padding: "14px 48px",
                fontSize: 12, letterSpacing: 4, fontWeight: 900,
                fontFamily: "monospace", cursor: "pointer", borderRadius: 4,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.target.style.background = "#00FFD115"; e.target.style.boxShadow = "0 0 30px rgba(0,255,209,0.3)"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.boxShadow = "none"; }}
            >▶ START A PROJECT NOW</button>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{
          borderTop: "1px solid #1A2235", padding: "24px 32px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12, position: "relative", zIndex: 1,
        }}>
          <div style={{ color: "#333", fontSize: 11, letterSpacing: 2 }}>
            © 2025 {company.name} — POWERED BY CLAUDE AI
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            {AGENTS.map(a => (
              <span key={a.id} title={a.name} style={{ fontSize: 16, cursor: "pointer", opacity: 0.5, transition: "opacity 0.2s" }}
                onMouseEnter={e => e.target.style.opacity = "1"}
                onMouseLeave={e => e.target.style.opacity = "0.5"}
              >{a.icon}</span>
            ))}
          </div>
        </footer>
      </div>

      {/* HIRE MODAL */}
      {hiring && (
        <HireModal agent={hiring} company={company} onClose={() => setHiring(null)} />
      )}

      <style>{`
        @keyframes float {
          from { transform: translateY(0px); }
          to { transform: translateY(-20px); }
        }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #060A12; }
        ::-webkit-scrollbar-thumb { background: #1A2235; border-radius: 2px; }
      `}</style>
    </div>
  );
}
