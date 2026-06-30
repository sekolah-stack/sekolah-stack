"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Play,
  Video,
  Briefcase,
  BookOpen,
  ArrowRight,
  Menu,
  X,
  Send,


} from "lucide-react";

function LogoIcon() {
  return (
    <svg width="36" height="28" viewBox="0 0 40 30" fill="none">
      <rect x="0" y="14" width="10" height="16" rx="2" fill="#8B5CF6" />
      <rect x="14" y="7" width="10" height="23" rx="2" fill="#6D28D9" />
      <rect x="28" y="0" width="10" height="30" rx="2" fill="#5B21B6" />
    </svg>
  );
}

function LogoHorizontal({ white = false }: { white?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <LogoIcon />
      <div className="flex flex-col leading-tight">
        <span className="font-semibold text-lg" style={{ color: white ? "#fff" : "#1e1b4b" }}>Sekolah</span>
        <span className="font-bold text-lg" style={{ color: white ? "#a78bfa" : "#7C3AED" }}>Stack</span>
      </div>
    </div>
  );
}

const techs = [
  { name: "HTML5", emoji: "🌐" }, { name: "CSS3", emoji: "🎨" },
  { name: "JavaScript", emoji: "⚡" }, { name: "TypeScript", emoji: "📘" },
  { name: "React", emoji: "⚛️" }, { name: "Next.js", emoji: "▲" },
  { name: "Node.js", emoji: "🟢" }, { name: "Express.js", emoji: "🚀" },
  { name: "PostgreSQL", emoji: "🐘" }, { name: "MongoDB", emoji: "🍃" },
  { name: "Git", emoji: "🔀" }, { name: "Tailwind CSS", emoji: "💨" },
];

const learningPath = [
  { icon: "🖥️", title: "Frontend", desc: "Belajar dasar web dan antarmuka" },
  { icon: "⚙️", title: "Backend", desc: "Membangun logic, API, dan server" },
  { icon: "🗄️", title: "Database", desc: "Menyimpan dan mengelola data" },
  { icon: "☁️", title: "Deployment", desc: "Deploy aplikasi ke server / cloud" },
  { icon: "📁", title: "Project", desc: "Mengerjakan project nyata" },
  { icon: "🗂️", title: "Portfolio", desc: "Bangun portfolio yang menarik" },
  { icon: "💼", title: "Ready to Work", desc: "Siap kerja di dunia teknologi" },
];

const courses = [
  { icon: "🟨", title: "JavaScript Fundamental", desc: "Dasar JavaScript dari nol hingga mahir.", videos: 25, level: "Beginner", color: "#F7DF1E" },
  { icon: "🟩", title: "Back End", desc: "Belajar Node.js, Express.js, REST API, dan Database.", videos: 40, level: "Intermediate", color: "#339933" },
  { icon: "⚛️", title: "Front End", desc: "Belajar React, komponen, state, dan routing.", videos: 35, level: "Intermediate", color: "#61DAFB" },
  { icon: "🎨", title: "UI UX Design", desc: "Belajar desain interface dan pengalaman pengguna.", videos: 30, level: "Beginner", color: "#FF6B6B" },
  { icon: "🔥", title: "Full Stack", desc: "Kuasai Front End, Back End, Database, hingga Deploy.", videos: 80, level: "Advanced", color: "#7C3AED" },
  { icon: "📘", title: "TypeScript Fundamental", desc: "Belajar TypeScript untuk menulis code lebih aman.", videos: 20, level: "Beginner", color: "#3178C6" },
];

const benefits = [
  { icon: "📚", title: "Materi Terstruktur", desc: "Kurikulum tersusun rapi dari dasar hingga mahir." },
  { icon: "🎬", title: "Video Berkualitas", desc: "Penjelasan detail dan mudah dipahami." },
  { icon: "📱", title: "Belajar Fleksibel", desc: "Belajar kapan saja, di mana saja." },
  { icon: "🏗️", title: "Project Nyata", desc: "Studi kasus relevan dengan dunia kerja." },
  { icon: "🧑‍💼", title: "Mentor Berpengalaman", desc: "Dibimbing oleh mentor yang aktif di industri." },
  { icon: "✅", title: "Siap Kerja", desc: "Skill yang kamu pelajari sudah siap pakai." },
];

const audiences = [
  { emoji: "🎓", title: "Mahasiswa", desc: "Ingin meningkatkan skill di bidang teknologi." },
  { emoji: "👩‍💼", title: "Fresh Graduate", desc: "Ingin menambah portfolio dan siap kerja." },
  { emoji: "🔄", title: "Career Switcher", desc: "Ingin beralih karier ke dunia IT." },
  { emoji: "💻", title: "Programmer", desc: "Ingin upgrade skill dan menguasai teknologi baru." },
];

const faqs = [
  { q: "Apakah harus bisa coding dulu untuk belajar?", a: "Tidak perlu! Semua kelas kami dirancang dari nol, cocok untuk pemula yang belum pernah coding sama sekali." },
  { q: "Apakah akses videonya lifetime?", a: "Ya, setelah membeli kelas kamu mendapatkan akses seumur hidup tanpa batas waktu." },
  { q: "Apakah ada sertifikat?", a: "Ya, kamu akan mendapatkan sertifikat penyelesaian setelah menyelesaikan semua materi kelas." },
  { q: "Apakah ada project dalam setiap kelas?", a: "Ya, setiap kelas dilengkapi dengan project nyata yang bisa langsung kamu masukkan ke portfolio." },
  { q: "Bagaimana jika saya memiliki pertanyaan?", a: "Kamu bisa bertanya langsung di kolom diskusi atau menghubungi tim mentor kami yang siap membantu." },
  { q: "Apakah materi akan selalu di-update?", a: "Ya, kami selalu memperbarui materi mengikuti perkembangan teknologi terkini di industri." },
];

function LevelBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-purple-100 text-purple-700",
  };
  return <span className={"text-xs px-2 py-0.5 rounded-full font-semibold " + (colors[level] ?? "bg-gray-100 text-gray-600")}>{level}</span>;
}

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-4 text-left text-gray-800 font-medium text-sm hover:text-purple-700 transition-colors">
        {q}
        <ChevronDown className={"w-4 h-4 flex-shrink-0 transition-transform " + (open ? "rotate-180" : "")} />
      </button>
      {open && <p className="pb-4 text-gray-600 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans antialiased">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <LogoHorizontal />
          <div className="hidden md:flex items-center gap-7">
            {[["#hero","Home"],["#tentang","Tentang"],["#kelas","Kelas"],["#kenapa","Kenapa Kami"],["#faq","FAQ"],["#kontak","Kontak"]].map(([href,label]) => (
              <a key={label} href={href} className="text-gray-700 hover:text-purple-700 font-medium transition-colors text-sm">{label}</a>
            ))}
          </div>
          <a href="#kelas" className="hidden md:inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Daftar Sekarang <Send className="w-3.5 h-3.5" />
          </a>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-3">
            {["Home","Tentang","Kelas","Kenapa Kami","FAQ","Kontak"].map(l => (
              <a key={l} href={"#"+l.toLowerCase().replace(" ","")} className="text-gray-700 font-medium py-1" onClick={() => setMobileOpen(false)}>{l}</a>
            ))}
            <a href="#kelas" className="bg-purple-700 text-white text-center py-2.5 rounded-lg font-semibold mt-2">Daftar Sekarang</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" style={{background:"linear-gradient(135deg,#f5f3ff 0%,#ede9fe 50%,#ddd6fe 100%)"}} className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-2">Kuasai Stack-mu,</h1>
            <h1 className="text-4xl md:text-5xl font-bold text-purple-700 leading-tight mb-6">Raih Karirmu.</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
              Belajar Full Stack Development dari dasar hingga siap kerja melalui video pembelajaran, project nyata, dan materi yang selalu mengikuti kebutuhan industri.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#kelas" className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                🚀 Mulai Belajar
              </a>
              <a href="#kelas" className="flex items-center gap-2 bg-white hover:bg-purple-50 text-purple-700 border border-purple-200 font-semibold px-6 py-3 rounded-lg transition-colors">
                📖 Lihat Kelas
              </a>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-gray-600">
              <span className="flex items-center gap-2"><Video className="w-4 h-4 text-purple-600" />Video Lifetime</span>
              <span className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-purple-600" />Project Nyata</span>
              <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-purple-600" />Materi Update</span>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative" style={{animation:"float 3s ease-in-out infinite"}}>
              <div className="w-80 bg-purple-900 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-purple-300 text-xs ml-2">roadmap.ts</span>
                </div>
                <div className="text-center mb-4">
                  <div className="text-white font-bold text-sm mb-1">Full Stack Development</div>
                  <div className="text-purple-300 text-xs">Roadmap</div>
                </div>
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center hover:bg-purple-500 transition-colors cursor-pointer">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                {["01. Introduction","02. HTML & CSS","03. JavaScript","04. React JS","05. Node.JS","06. Database","07. Project"].map((item,i) => (
                  <div key={i} className={"text-xs py-1.5 px-2 rounded mb-1 " + (i===0 ? "bg-purple-500 text-white" : "text-purple-300")}>{item}</div>
                ))}
              </div>
              <div className="absolute -left-12 top-8 bg-white rounded-xl p-2 shadow-lg text-lg">⚛️</div>
              <div className="absolute -right-8 top-16 bg-white rounded-xl p-2 shadow-lg text-lg">▲</div>
              <div className="absolute -left-8 bottom-16 bg-white rounded-xl p-2 shadow-lg text-lg">🟢</div>
              <div className="absolute -right-12 bottom-8 bg-white rounded-xl p-2 shadow-lg text-lg">🐘</div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-xl font-bold text-gray-800 mb-10">Teknologi yang <span className="text-purple-600">kamu kuasai</span></h2>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
            {techs.map(t => (
              <div key={t.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-purple-50 flex items-center justify-center text-2xl transition-colors border border-gray-100 group-hover:border-purple-200">{t.emoji}</div>
                <span className="text-[10px] text-gray-500 text-center font-medium">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center">
            <div className="w-72 h-64 bg-purple-100 rounded-3xl flex flex-col items-center justify-center gap-4">
              <div className="text-7xl">👨‍💻</div>
              <div className="flex gap-2">
                <div className="w-9 h-9 bg-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">&lt;/&gt;</div>
                <div className="w-9 h-9 bg-yellow-400 rounded-lg flex items-center justify-center text-sm">⚡</div>
                <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">TS</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apa itu <span className="text-purple-600">Sekolah Stack?</span></h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sekolah Stack adalah platform belajar online yang membantu kamu menguasai teknologi modern secara terstruktur melalui video pembelajaran, latihan, dan project nyata sehingga siap memasuki dunia kerja.
            </p>
            <div className="flex flex-col gap-3">
              {["Kurikulum terstruktur dari dasar hingga mahir","Video berkualitas dengan penjelasan yang mudah dipahami","Project nyata untuk membangun portfolio","Materi selalu update sesuai kebutuhan industri"].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JALUR BELAJAR */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">Jalur Belajar</h2>
          <div className="flex flex-wrap justify-center items-start gap-2 md:gap-0">
            {learningPath.map((item, i) => (
              <div key={item.title} className="flex items-center">
                <div className="flex flex-col items-center w-24 md:w-32">
                  <div className="w-14 h-14 rounded-full bg-purple-100 hover:bg-purple-200 flex items-center justify-center text-2xl mb-3 cursor-pointer transition-colors border-2 border-purple-200">{item.icon}</div>
                  <div className="text-center">
                    <div className="font-semibold text-xs text-gray-800">{item.title}</div>
                    <div className="text-[10px] text-gray-500 mt-1 leading-snug">{item.desc}</div>
                  </div>
                </div>
                {i < learningPath.length - 1 && <ArrowRight className="w-4 h-4 text-purple-400 flex-shrink-0 mb-10 hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KATALOG KELAS */}
      <section id="kelas" className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-gray-900">Katalog Kelas</h2>
            <a href="#kelas" className="text-purple-600 hover:text-purple-800 text-sm font-semibold flex items-center gap-1">Lihat Semua Kelas <ChevronRight className="w-4 h-4" /></a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map(course => (
              <div key={course.title} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className="h-32 flex items-center justify-center text-5xl" style={{background:`${course.color}22`}}>{course.icon}</div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-gray-900 text-sm leading-snug">{course.title}</h3>
                    <LevelBadge level={course.level} />
                  </div>
                  <p className="text-xs text-gray-500 mb-4 leading-relaxed">{course.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Video className="w-3 h-3" />{course.videos} Video</span>
                    <a href="#" className="text-purple-600 hover:text-purple-800 text-xs font-semibold flex items-center gap-1 group-hover:underline">Lihat Detail <ChevronRight className="w-3 h-3" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KENAPA */}
      <section id="kenapa" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">Kenapa Belajar di Sekolah Stack?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {benefits.map(b => (
              <div key={b.title} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center text-3xl mb-4 transition-colors">{b.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{b.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COCOK UNTUK */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">Cocok untuk kamu</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {audiences.map(a => (
              <div key={a.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-4xl mb-3">{a.emoji}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{a.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{background:"linear-gradient(135deg,#5B21B6 0%,#7C3AED 100%)"}} className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 leading-snug">Siap memulai perjalananmu menjadi Software Developer?</h2>
            <p className="text-purple-200 mb-8">Jangan tunda kesempatanmu. Mulai sekarang dan raih karir impianmu!</p>
            <div className="flex flex-wrap gap-3">
              <a href="#kelas" className="flex items-center gap-2 bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors">🚀 Mulai Belajar</a>
              <a href="#kontak" className="flex items-center gap-2 bg-purple-600 text-white border border-purple-400 font-semibold px-6 py-3 rounded-lg hover:bg-purple-500 transition-colors">
                <span>📸</span> DM Instagram
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="text-8xl" style={{animation:"float 3s ease-in-out infinite"}}>🚀</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-2">FAQ</h2>
          <p className="text-center text-gray-500 mb-12">(Pertanyaan yang Sering Diajukan)</p>
          <div className="grid md:grid-cols-2 gap-x-16">
            <div>{faqs.slice(0,3).map(f => <AccordionItem key={f.q} {...f} />)}</div>
            <div>{faqs.slice(3).map(f => <AccordionItem key={f.q} {...f} />)}</div>
          </div>
        </div>
      </section>

      {/* KONTAK */}
      <section id="kontak" className="py-20 bg-purple-50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Hubungi Kami</h2>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Nama Lengkap" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white" />
              <input type="email" placeholder="Email" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white" />
              <input type="text" placeholder="Subjek" className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white" />
              <textarea placeholder="Pesan Anda" rows={4} className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 bg-white resize-none" />
              <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Kirim Pesan
              </button>
              <a href="https://instagram.com/sekolah.stack" className="flex items-center gap-2 text-purple-700 text-sm hover:underline">
                <span>📸</span> @sekolah.stack
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center pt-16">
            <div className="text-center">
              <div className="text-8xl mb-4">💬</div>
              <p className="text-gray-500 text-sm">Kami siap membantu perjalanan belajarmu!</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <LogoHorizontal white />
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">Kuasai Stack-mu, Raih Karirmu.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              {["Home","Tentang","Kelas","Kenapa Kami","Kontak"].map(l => (
                <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-purple-700 flex items-center justify-center transition-colors"><span className="text-white text-sm">IG</span></a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors"><span className="text-white text-xs font-bold">YT</span></a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-600 flex items-center justify-center transition-colors"><span className="text-white text-xs font-bold">TT</span></a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 pt-8 mt-8 border-t border-gray-800 text-center text-xs text-gray-600">
          © 2025 Sekolah Stack. All rights reserved.
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
