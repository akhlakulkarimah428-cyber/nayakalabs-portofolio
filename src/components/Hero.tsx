import { motion } from "motion/react";
import { ArrowRight, Trophy, Smartphone, Globe, Code2 } from "lucide-react";

export default function Hero() {
  const waLink = `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Halo%20Nayaka%20Labs,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20pembuatan%20website/aplikasi.`;

  return (
    <section id="home" className="relative pt-48 pb-32 overflow-hidden min-h-screen flex items-center bg-white">
      {/* Structural Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0f172a 1px, transparent 0)', backgroundSize: '48px 48px' }} />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8"
        >
          <div className="flex items-center gap-4 mb-10">
             <div className="h-px w-8 bg-accent" />
             <span className="label-mono">Bondowoso Software House</span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold leading-[1] tracking-[-0.04em] text-ink mb-10">
             Presisi Digital <br />
             <span className="text-accent">Hasil Terukur.</span>
          </h1>

          <p className="text-xl md:text-2xl text-ink-muted max-w-2xl mb-12 leading-relaxed font-normal">
            Nayaka Labs adalah studio teknologi yang berfokus pada pengembangan produk digital berkualitas tinggi. Kami membantu bisnis Anda beralih ke masa depan dengan solusi cerdas dan estetika yang timeless.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a 
              href={waLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-4 group"
            >
              Mulai Konsultasi Strategis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio"
              className="btn-outline flex items-center justify-center"
            >
              Eksplorasi Karya
            </a>
          </div>

          <div className="flex items-center gap-12 grayscale opacity-40">
             <div className="flex flex-col">
                <span className="text-2xl font-display font-bold">12+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Projects</span>
             </div>
             <div className="flex flex-col">
                <span className="text-2xl font-display font-bold">98%</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Satisfaction</span>
             </div>
             <div className="flex flex-col">
                <span className="text-2xl font-display font-bold">2026</span>
                <span className="text-[10px] uppercase tracking-widest font-bold">Ready</span>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:col-span-4 hidden lg:block"
        >
          <div className="p-1 border border-slate-200 rounded-[32px] rotate-2 hover:rotate-0 transition-all duration-700">
            <div className="bg-slate-50 p-8 rounded-[28px] border border-slate-100">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
                  <Code2 className="text-accent w-8 h-8" />
               </div>
               <h3 className="font-display text-2xl font-bold mb-4">Architecture First</h3>
               <p className="text-sm text-ink-muted leading-relaxed mb-6 font-medium">
                  Kami membangun sistem dengan fondasi yang kuat, memastikan skalabilitas dan keamanan jangka panjang untuk aplikasi Anda.
               </p>
               <div className="h-px w-full bg-slate-200 mb-6" />
               <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Nayaka Registry</span>
                  <span className="text-xs font-mono font-bold text-accent">#A2-2026</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
