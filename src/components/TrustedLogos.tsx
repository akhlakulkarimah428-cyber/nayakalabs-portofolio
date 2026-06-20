import { CLIENT_LOGOS } from "../data";
import { Shield } from "lucide-react";

export default function TrustedLogos() {
  return (
    <div className="bg-slate-950 py-12 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Label left */}
          <div className="flex items-center gap-2 text-slate-400 font-sans font-bold text-xs uppercase tracking-widest shrink-0">
            <Shield className="w-4 h-4 text-sky-450" />
            <span>Mitra Terpercaya Kami</span>
          </div>

          {/* Logo lineup */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-center flex-1 lg:pl-12">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center transition-all duration-300 transform hover:scale-102 cursor-pointer group"
                title={client.name}
              >
                <div className="bg-slate-900 border border-slate-800/80 rounded-xl px-4 py-2.5 w-full text-center transition-colors group-hover:bg-slate-800/40 group-hover:border-sky-500/20">
                  <span className="font-display font-black text-sm tracking-widest text-slate-500 group-hover:text-sky-400 transition-colors uppercase">
                    {client.logoText}
                  </span>
                  <span className="text-[9px] text-slate-500 block font-light tracking-tight truncate">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
