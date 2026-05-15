import { motion } from "motion/react";
import { Globe, Smartphone, Monitor, Database, Layout, Cpu } from "lucide-react";

const services = [
  {
    title: "Pembuatan Website",
    desc: "Landing page, company profile, e-commerce, hingga web app kompleks yang responsif dan SEO-ready.",
    icon: Globe,
    delay: 0,
  },
  {
    title: "Aplikasi Mobile",
    desc: "Solusi Android & iOS menggunakan Flutter. Satu codebase untuk performa maksimal di semua gadget.",
    icon: Smartphone,
    delay: 0.1,
  },
  {
    title: "Software Desktop",
    desc: "Aplikasi kasir (POS), sistem manajemen inventori, dan software internal Windows khusus bisnis Anda.",
    icon: Monitor,
    delay: 0.2,
  },
  {
    title: "Sistem Informasi",
    desc: "Digitalisasi birokrasi & operasional untuk instansi, koperasi, atau sekolah dengan dashboard analitik.",
    icon: Database,
    delay: 0.3,
  },
  {
    title: "UI/UX Design",
    desc: "Desain antarmuka modern yang intuitif di Figma, fokus pada user journey dan estetika premium.",
    icon: Layout,
    delay: 0.4,
  },
  {
    title: "AI, IoT & GIS",
    desc: "Integrasi kecerdasan buatan, sensor IoT, dan pemetaan geospasial untuk solusi masa depan.",
    icon: Cpu,
    delay: 0.5,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="label-mono mb-6 block">Katalog Layanan</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-ink tracking-tight mb-8">
              Solusi Tepat untuk <br /><span className="text-accent underline decoration-slate-200 underline-offset-8">Setiap Skala Bisnis</span>
            </h2>
          </div>
          <p className="text-ink-muted max-w-sm font-medium leading-relaxed mb-2">
            Kami tidak hanya membangun kode, kami membangun alat pemacu pertumbuhan bisnis Anda melalui ekosistem digital yang terintegrasi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: svc.delay, duration: 0.5 }}
              className="group p-12 bg-surface border border-slate-100 rounded-[32px] hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                <svc.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">{svc.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed font-medium">
                {svc.desc}
              </p>
              <div className="mt-8 pt-8 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Discover Detail &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
