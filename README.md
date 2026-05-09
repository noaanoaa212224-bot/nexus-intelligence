<!DOCTYPE html>
<html lang="th" class="scroll-smooth">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>NEXUS INTELLIGENCE | ทีม AI ชั้นนำ</title>
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"/>
<style>
body { font-family: 'Inter', system-ui, sans-serif; }
.neon-text { text-shadow: 0 0 20px #22d3ee, 0 0 40px #a855f7; }
.card-hover {
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.card-hover:hover {
transform: translateY(-12px) scale(1.03);
box-shadow: 0 0 40px rgba(165, 85, 247, 0.6);
}
.gradient-bg {
background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
}
</style>
</head>
<body class="bg-neutral-950 text-white overflow-x-hidden">

<!-- Navbar -->
<nav class="fixed top-0 w-full z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-lg">
<div class="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<div class="flex items-center gap-3">
<span class="text-3xl font-bold tracking-tighter neon-text">NEXUS</span>
<span class="text-cyan-400 font-light text-xl">INTELLIGENCE</span>
</div>
<div class="flex gap-8 text-sm font-medium">
<a href="#home" class="hover:text-cyan-400 transition">HOME</a>
<a href="#founder" class="hover:text-cyan-400 transition">ก่อตั้ง</a>
<a href="#agents" class="hover:text-cyan-400 transition">AGENTS</a>
<a href="#how" class="hover:text-cyan-400 transition">วิธีการทำงาน</a>
<a href="#contact" class="hover:text-cyan-400 transition">ติดต่อ</a>
</div>
<button onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })"
class="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-cyan-400 transition">
CONTACT US
</button>
</div>
</nav>

<!-- Hero Section -->
<section id="home" class="min-h-screen flex items-center pt-20 relative gradient-bg">
<div class="absolute inset-0 bg-[radial-gradient(at_center,#22d3ee10_0%,transparent_70%)]"></div>

<div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div class="space-y-8">
<div class="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm">
<span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
AI TEAM • REAL RESULTS
</div>

<h1 class="text-6xl md:text-7xl font-bold leading-tight neon-text">
ทีม AI <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">ชั้นนำ</span><br>
พร้อมทำงานกับคุณ
</h1>

<p class="text-xl text-neutral-400 max-w-lg">
ผู้ช่วยอัจฉริยะ 6 คน ที่เข้าใจธุรกิจไทย ทำงานได้ 24 ชั่วโมง ด้วยเทคโนโลยีล่าสุด
</p>

<div class="flex flex-wrap gap-4">
<a href="#agents" class="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-2xl flex items-center gap-3 text-lg transition">
<i class="fas fa-robot"></i> พบทีม AI
</a>
<a href="#founder" class="border border-white/30 hover:border-white/60 font-medium px-8 py-4 rounded-2xl transition">
รู้จักผู้ก่อตั้ง
</a>
</div>
</div>

<div class="relative">
<div class="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
<img src="https://picsum.photos/id/1015/800/600" alt="Nexus AI Team" class="rounded-2xl shadow-2xl"/>
</div>
</div>
</div>
</section>

<!-- Founder Section -->
<section id="founder" class="py-24 bg-neutral-900">
<div class="max-w-7xl mx-auto px-6">
<div class="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 class="text-5xl font-bold mb-6">ก่อตั้งโดย</h2>
<h3 class="text-4xl font-bold text-cyan-400 mb-2">คุณ Kewthanapol</h3>
<p class="text-neutral-400 text-lg">ผู้ก่อตั้ง Nexus Intelligence</p>

<div class="mt-10 border-l-4 border-cyan-500 pl-6">
<p class="text-neutral-300 italic text-xl leading-relaxed">
“เราเชื่อว่า AI ที่ดีที่สุดคือ AI ที่เข้าใจคนไทย<br>
และสามารถทำงานร่วมกับธุรกิจไทยได้อย่างลึกซึ้ง”
</p>
</div>
</div>

<div class="bg-neutral-950 border border-white/10 rounded-3xl p-10">
<h4 class="text-cyan-400 font-semibold mb-6 flex items-center gap-3 text-xl">
<i class="fas fa-map-marker-alt"></i> ที่ตั้งบริษัท
</h4>
<p class="text-2xl leading-relaxed text-neutral-200">
Khaoyai, Moosi,<br>
Pakchong,<br>
Nakhon Ratchasima
</p>
<p class="mt-8 text-neutral-400">
เกิดจากความตั้งใจที่จะสร้างทีม AI ที่มี “หัวใจไทย”<br>
ณ เมืองเขาใหญ่ จังหวัดนครราชสีมา
</p>
</div>
</div>
</div>
</section>

<!-- Agents Section -->
<section id="agents" class="py-24 bg-neutral-950">
<div class="max-w-7xl mx-auto px-6">
<div class="text-center mb-16">
<h2 class="text-5xl font-bold mb-4">Meet Your AI Specialists</h2>
<p class="text-neutral-400 text-lg">เลือกผู้เชี่ยวชาญที่ตรงกับความต้องการของคุณ</p>
</div>

<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<!-- ARIA -->
<div class="card-hover bg-neutral-900 border border-white/10 rounded-3xl p-8 group">
<div class="h-20 w-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center text-4xl mb-6">🧠</div>
<h3 class="text-3xl font-bold text-cyan-400">ARIA</h3>
<p class="text-purple-400">Chief Strategist</p>
<p class="mt-2 text-neutral-400">วางแผนกลยุทธ์ • วิเคราะห์ข้อมูลเชิงลึก • การตัดสินใจ</p>
<div class="my-6 flex justify-between items-end">
<div><span class="text-2xl font-bold">฿2,500</span><span class="text-sm">/ชม.</span></div>
<div class="text-emerald-400 font-bold">92%</div>
</div>
<button class="w-full bg-white text-black py-4 rounded-2xl font-semibold group-hover:bg-cyan-400 transition">HIRE ARIA →</button>
</div>

<!-- NEX -->
<div class="card-hover bg-neutral-900 border border-white/10 rounded-3xl p-8 group">
<div class="h-20 w-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-4xl mb-6">⚡</div>
<h3 class="text-3xl font-bold text-orange-400">NEX</h3>
<p class="text-amber-400">Lead Developer</p>
<p class="mt-2 text-neutral-400">พัฒนาระบบ • Full-Stack • Debug & Optimize</p>
<div class="my-6 flex justify-between items-end">
<div><span class="text-2xl font-bold">฿3,000</span><span class="text-sm">/ชม.</span></div>
<div class="text-emerald-400 font-bold">98%</div>
</div>
<button class="w-full bg-white text-black py-4 rounded-2xl font-semibold group-hover:bg-orange-400 transition">HIRE NEX →</button>
</div>

<!-- ECHO -->
<div class="card-hover bg-neutral-900 border border-white/10 rounded-3xl p-8 group">
<div class="h-20 w-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center text-4xl mb-6">📡</div>
<h3 class="text-3xl font-bold text-cyan-400">ECHO</h3>
<p class="text-blue-400">Communications Lead</p>
<p class="mt-2 text-neutral-400">สื่อสาร • PR • Meeting Facilitation</p>
<div class="my-6 flex justify-between items-end">
<div><span class="text-2xl font-bold">฿2,000</span><span class="text-sm">/ชม.</span></div>
<div class="text-emerald-400 font-bold">91%</div>
</div>
<button class="w-full bg-white text-black py-4 rounded-2xl font-semibold group-hover:bg-cyan-400 transition">HIRE ECHO →</button>
</div>

<!-- VEIL -->
<div class="card-hover bg-neutral-900 border border-white/10 rounded-3xl p-8 group">
<div class="h-20 w-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl mb-6">🛡️</div>
<h3 class="text-3xl font-bold text-purple-400">VEIL</h3>
<p class="text-pink-400">Security Expert</p>
<p class="mt-2 text-neutral-400">ป้องกันข้อมูล • Cybersecurity • Risk Assessment</p>
<div class="my-6 flex justify-between items-end">
<div><span class="text-2xl font-bold">฿3,500</span><span class="text-sm">/ชม.</span></div>
<div class="text-emerald-400 font-bold">97%</div>
</div>
<button class="w-full bg-white text-black py-4 rounded-2xl font-semibold group-hover:bg-purple-400 transition">HIRE VEIL →</button>
</div>

<!-- MUSE -->
<div class="card-hover bg-neutral-900 border border-white/10 rounded-3xl p-8 group">
<div class="h-20 w-20 bg-gradient-to-br from-violet-400 to-fuchsia-500 rounded-2xl flex items-center justify-center text-4xl mb-6">✨</div>
<h3 class="text-3xl font-bold text-violet-400">MUSE</h3>
<p class="text-fuchsia-400">Creative Director</p>
<p class="mt-2 text-neutral-400">ออกแบบ • สร้างเนื้อหา • Brand Strategy</p>
<div class="my-6 flex justify-between items-end">
<div><span class="text-2xl font-bold">฿2,800</span><span class="text-sm">/ชม.</span></div>
<div class="text-emerald-400 font-bold">95%</div>
</div>
<button class="w-full bg-white text-black py-4 rounded-2xl font-semibold group-hover:bg-violet-400 transition">HIRE MUSE →</button>
</div>

<!-- SAGE -->
<div class="card-hover bg-neutral-900 border border-white/10 rounded-3xl p-8 group">
<div class="h-20 w-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center text-4xl mb-6">🔍</div>
<h3 class="text-3xl font-bold text-amber-400">SAGE</h3>
<p class="text-yellow-400">Research Analyst</p>
<p class="mt-2 text-neutral-400">วิจัยเชิงลึก • Market Analysis • Forecasting</p>
<div class="my-6 flex justify-between items-end">
<div><span class="text-2xl font-bold">฿2,200</span><span class="text-sm">/ชม.</span></div>
<div class="text-emerald-400 font-bold">89%</div>
</div>
<button class="w-full bg-white text-black py-4 rounded-2xl font-semibold group-hover:bg-yellow-400 transition">HIRE SAGE →</button>
</div>

</div>
</div>
</section>

<!-- How it Works -->
<section id="how" class="py-24 bg-neutral-900">
<div class="max-w-7xl mx-auto px-6">
<h2 class="text-5xl font-bold text-center mb-16">วิธีการทำงาน</h2>
<div class="grid md:grid-cols-3 gap-10">
<div class="text-center">
<div class="text-5xl mb-4">1️⃣</div>
<h3 class="text-2xl font-bold mb-3">เลือก AI</h3>
<p class="text-neutral-400">เลือกผู้เชี่ยวชาญที่ตรงกับงานของคุณ</p>
</div>
<div class="text-center">
<div class="text-5xl mb-4">2️⃣</div>
<h3 class="text-2xl font-bold mb-3">ให้งาน</h3>
<p class="text-neutral-400">พูดคุยหรือส่งงานผ่านแชท</p>
</div>
<div class="text-center">
<div class="text-5xl mb-4">3️⃣</div>
<h3 class="text-2xl font-bold mb-3">รับผลงาน</h3>
<p class="text-neutral-400">ได้งานคุณภาพสูงภายในเวลาที่กำหนด</p>
</div>
</div>
</div>
</section>

<!-- Contact -->
<section id="contact" class="py-24 bg-black">
<div class="max-w-4xl mx-auto px-6 text-center">
<h2 class="text-5xl font-bold mb-8">พร้อมเริ่มงานกับเราแล้วหรือยัง?</h2>
<p class="text-xl text-neutral-400 mb-10">ติดต่อเราเพื่อปรึกษาการใช้งานฟรี</p>
<button class="bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold text-xl px-12 py-6 rounded-3xl hover:scale-105 transition">
ติดต่อเราเลย
</button>
</div>
</section>

<!-- Footer -->
<footer class="bg-neutral-950 py-16 border-t border-white/10">
<div class="max-w-7xl mx-auto px-6 text-center">
<p class="text-neutral-500">© 2026 NEXUS INTELLIGENCE • ก่อตั้งที่เขาใหญ่ จ.นครราชสีมา</p>
<p class="text-neutral-600 mt-2">พัฒนาโดยทีมที่เชื่อในพลังของ AI + มนุษย์</p>
</div>
</footer>

</body>
</html>
