import { motion } from "motion/react";

const projects = [
  {
    title: "ERP Travel & Umroh",
    category: "Management System",
    tags: ["React", "Firebase"],
    desc: "Sistem otomasi pendaftaran jamaah hingga pelaporan keberangkatan real-time.",
    delay: 0,
  },
  {
    title: "Loka Kasir POS",
    category: "Desktop App",
    tags: ["Netbeans", "SQLite"],
    desc: "Aplikasi kasir yang dioptimasi untuk UMKM Bondowoso dengan fitur cetak struk.",
    delay: 0.1,
  },
  {
    title: "My Enviro Hub",
    category: "Mobile App",
    tags: ["Flutter", "2026"],
    desc: "Platform manajemen operasional outsourcing (Pest Control & Security).",
    delay: 0.2,
  },
  {
    title: "PANDAWA GIS",
    category: "Web App",
    tags: ["GIS", "Visualization"],
    desc: "Sistem informasi geospasial potensi komoditas di Kabupaten Bondowoso.",
    delay: 0.3,
  },
  {
    title: "GreenGrow IoT",
    category: "Smart Farming",
    tags: ["IoT", "Flutter"],
    desc: "Aplikasi monitoring lahan pertanian cerdas berbasis sensor IoT.",
    delay: 0.4,
  },
  {
    title: "SIP Coffee Trace",
    category: "Traceability",
    tags: ["QR Code", "Logistics"],
    desc: "Pelacakan alur distribusi kopi Bondowoso dari petani hingga ekspor.",
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
              Karya yang <span className="text-accent underline decoration-slate-200 underline-offset-8">Bicara.</span>
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
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="w-full h-full border border-slate-200 rounded-3xl flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                     <span className="font-display font-black text-ink/20 text-4xl uppercase tracking-[0.2em]">{proj.category}</span>
                     <div className="mt-6 px-6 py-2 bg-accent text-white rounded-full text-xs font-bold">View Case Study</div>
                   </div>
                </div>
              </div>
              
              <div className="mt-8 px-4 flex justify-between items-start">
                <div>
                  <h3 className="font-display text-3xl font-bold text-ink mb-3 group-hover:text-accent transition-colors">{proj.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {proj.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-ink-muted uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-md">
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
