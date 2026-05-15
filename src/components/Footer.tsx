import { Code2, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 bg-surface text-ink relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3 mb-10">
             <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <Code2 className="text-white w-6 h-6" />
             </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-ink">
              Nayaka<span className="text-accent">Labs</span>
            </span>
          </div>
          <p className="text-ink-muted text-sm font-medium leading-relaxed max-w-xs mb-10">
            Membangun masa depan digital Bondowoso lewat kode yang rapi dan desain yang elegan.
          </p>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center hover:border-accent transition-colors cursor-pointer group shadow-sm">
              <Instagram className="w-5 h-5 text-ink-muted group-hover:text-accent transition-colors" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center hover:border-accent transition-colors cursor-pointer group shadow-sm">
              <Mail className="w-5 h-5 text-ink-muted group-hover:text-accent transition-colors" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="label-mono mb-8 opacity-60">Layanan</h4>
          <ul className="space-y-4 text-sm font-bold text-ink-muted">
            <li className="hover:text-accent cursor-pointer transition-colors tracking-tight">Website Bisnis</li>
            <li className="hover:text-accent cursor-pointer transition-colors tracking-tight">Aplikasi Mobile</li>
            <li className="hover:text-accent cursor-pointer transition-colors tracking-tight">Software Kasir</li>
            <li className="hover:text-accent cursor-pointer transition-colors tracking-tight">UI/UX Design</li>
          </ul>
        </div>

        <div>
           <h4 className="label-mono mb-8 opacity-60">Halaman</h4>
           <ul className="space-y-4 text-sm font-bold text-ink-muted">
            <li><a href="#about" className="hover:text-accent transition-colors tracking-tight">Tentang Kami</a></li>
            <li><a href="#portfolio" className="hover:text-accent transition-colors tracking-tight">Portofolio</a></li>
            <li><a href="#process" className="hover:text-accent transition-colors tracking-tight">Alur Kerja</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors tracking-tight">Hubungi</a></li>
          </ul>
        </div>

        <div>
           <h4 className="label-mono mb-8 opacity-60">Kantor Kami</h4>
           <div className="flex gap-4 text-sm text-ink-muted font-bold leading-relaxed mb-8">
              <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
              <p>Bondowoso, Jawa Timur<br />Indonesia, 68211</p>
           </div>
           <div className="bg-accent/5 p-6 rounded-3xl border border-accent/10">
              <p className="text-[10px] font-extrabold text-accent uppercase mb-1 tracking-widest">Available 2026</p>
              <p className="text-sm font-bold text-ink">Terima Project Baru</p>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 mt-20 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-ink-muted text-[10px] font-bold uppercase tracking-[0.2em]">
          Copyright © 2026 Nayaka Labs Software House
        </p>
        <div className="flex gap-8 text-[10px] font-bold text-ink-muted uppercase tracking-[0.2em]">
          <span className="hover:text-accent cursor-pointer">Privacy Policy</span>
          <span className="hover:text-accent cursor-pointer">Terms</span>
        </div>
      </div>
    </footer>
  );
}
