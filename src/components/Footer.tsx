import React, { useState } from "react";
import { Sparkles, Linkedin, Github, Send, MessageSquareCode } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 text-left pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Info, Menus, & Subscription (12 split) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-900">
          
          {/* Col 1: Brand details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div>
                <span className="font-display font-black text-lg tracking-wider text-white">
                  NAYAKA
                </span>
                <span className="font-display font-black text-lg tracking-wider text-sky-400 ml-1">
                  LABS
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Studio teknologi & digital product engineering kelas dunia di Indonesia. Kami merekayasa solusi web, mobile, dan sistem pintar kecerdasan buatan (AI) yang cepat, aman, dan auto-scaling.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900 border border-slate-800 hover:bg-sky-500 text-slate-450 text-slate-400 hover:text-slate-950 rounded-lg transition-all cursor-pointer" aria-label="LinkedIn Profile">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com/nayakalabs" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900 border border-slate-800 hover:bg-sky-500 text-slate-450 text-slate-400 hover:text-slate-950 rounded-lg transition-all cursor-pointer" aria-label="GitHub Profile">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://wa.me/62215088899" target="_blank" rel="noreferrer" className="p-2.5 bg-slate-900 border border-slate-800 hover:bg-sky-500 text-slate-450 text-slate-400 hover:text-slate-950 rounded-lg transition-all cursor-pointer" aria-label="WA Business">
                <MessageSquareCode className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 & 3: Menus (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            {/* Services */}
            <div className="space-y-4">
              <h5 className="font-display font-black text-xs tracking-wider uppercase text-sky-400">
                Layanan Utama
              </h5>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#services" className="hover:text-sky-400 transition-colors">SaaS & Custom Web</a></li>
                <li><a href="#services" className="hover:text-sky-400 transition-colors">Mobile App Dev</a></li>
                <li><a href="#services" className="hover:text-sky-400 transition-colors">Enterprise AI</a></li>
                <li><a href="#services" className="hover:text-sky-400 transition-colors">Cloud & DevOps</a></li>
              </ul>
            </div>

            {/* Corporate */}
            <div className="space-y-4">
              <h5 className="font-display font-black text-xs tracking-wider uppercase text-sky-400">
                Perusahaan
              </h5>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><a href="#about" className="hover:text-sky-400 transition-colors">Tentang Kami</a></li>
                <li><a href="#portfolio" className="hover:text-sky-400 transition-colors">Katalog Karya</a></li>
                <li><a href="#process" className="hover:text-sky-400 transition-colors">Alur Kerjasama</a></li>
                <li><a href="#faq" className="hover:text-sky-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Legal copyrights details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Nayaka Labs. Semua Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-sky-400 transition-colors">Kebijakan Privasi</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-sky-400 transition-colors">Model SLA Kerja</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-sky-400 transition-colors">Syarat Ketentuan</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
