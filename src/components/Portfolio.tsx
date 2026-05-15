import { motion } from "motion/react";

const projects = [
  {
    title: "ERP Travel & Umroh",
    category: "Management System",
    tags: ["React", "Firebase", "Tailwind CSS"],
    desc: "Sistem manajemen perjalanan umroh — dari pendaftaran jamaah, pembayaran, hingga laporan keberangkatan.",
    image: "/images/project/travel.jpeg",
    alt: "ERP Travel dan Umroh – Manajemen perjalanan wisata Nayaka Labs",
    delay: 0,
  },
  {
    title: "POS Desktop Application",
    category: "Desktop App",
    tags: ["Desktop", "Netbeans", "SQLite"],
    desc: "Aplikasi kasir toko dengan manajemen stok barang dan laporan penjualan harian yang bisa dicetak.",
    image: "/images/project/loka_kasir.png",
    alt: "POS Desktop Application – Aplikasi kasir toko Nayaka Labs",
    delay: 0.1,
  },
  {
    title: "My Enviro Hub",
    category: "Mobile App",
    tags: ["Flutter", "Firebase", "2025"],
    desc: "Platform manajemen operasional perusahaan outsourcing — Pest Control, Security, Cleaning Service, dan SDM.",
    image: "/images/project/enviro.jpg",
    alt: "My Enviro Hub – Sistem informasi outsourcing Nayaka Labs",
    delay: 0.2,
  },
  {
    title: "PANDAWA – Geospatial Intelligence",
    category: "Web App",
    tags: ["GIS", "Web App", "2025"],
    desc: "Visualisasi potensi sumber daya alam Kabupaten Bondowoso secara interaktif berbasis peta dan data komoditas.",
    image: "/images/project/pandawa.png",
    alt: "PANDAWA Geospatial Intelligence Bondowoso – Nayaka Labs",
    delay: 0.3,
  },
  {
    title: "GreenGrow – Smart Farming",
    category: "Smart Farming",
    tags: ["Flutter", "IoT", "2024"],
    desc: "Gamifikasi pertanian modern berbasis IoT untuk meningkatkan literasi petani muda dan mendukung SDGs.",
    image: "/images/project/greengrow.jpg",
    alt: "GreenGrow Smart Farming IoT Flutter – Nayaka Labs",
    delay: 0.4,
  },
  {
    title: "SIP Coffee – Traceability",
    category: "Traceability",
    tags: ["Flutter", "Laravel", "QR Traceability"],
    desc: "Platform web dan mobile untuk ketertelusuran kopi Bondowoso via QR Code, dari bibit hingga produk ekspor.",
    image: "/images/project/sipkopi.png",
    alt: "SIP Coffee Traceability Kopi Bondowoso – Nayaka Labs",
    delay: 0.5,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="label-mono mb-6 block">Studi Kasus</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-ink tracking-tight mb-4">
              Karya yang{" "}
              <span className="text-accent underline decoration-slate-200 underline-offset-8">
                Bicara.
              </span>
            </h2>
          </div>
          <p className="text-ink-muted max-w-sm font-medium mb-2 leading-relaxed">
            Lihat bagaimana kami mentransformasi ide kompleks menjadi solusi digital yang intuitif dan berdampak nyata bagi klien kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((proj) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: proj.delay, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-3xl group-hover:shadow-blue-500/5 transition-all duration-700 relative">
                <img
                  src={proj.image}
                  alt={proj.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="w-full h-full border border-slate-200 rounded-3xl flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="font-display font-black text-ink/20 text-4xl uppercase tracking-[0.2em]">
                      {proj.category}
                    </span>
                    <div className="mt-6 px-6 py-2 bg-accent text-white rounded-full text-xs font-bold">
                      View Case Study
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 px-4 flex justify-between items-start">
                <div>
                  <h3 className="font-display text-3xl font-bold text-ink mb-3 group-hover:text-accent transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed mb-4">
                    {proj.desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold text-ink-muted uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
