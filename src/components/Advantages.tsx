import { WHY_CHOOSE_US } from "../data";
import { Sparkles, Trophy, Users, ShieldAlert, BadgeCheck, Hourglass } from "lucide-react";

export default function Advantages() {
  const getFeatureIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-5 h-5 text-sky-400" />;
      case 1:
        return <Hourglass className="w-5 h-5 text-sky-400" />;
      case 2:
        return <BadgeCheck className="w-5 h-5 text-sky-400" />;
      default:
        return <Trophy className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-sans block">
            Kelebihan Studio Kami
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
            Menghadirkan Standard Rekayasa Kelas Dunia, Teruji di Setiap Lini Kode.
          </h2>
          <p className="font-sans text-slate-400 text-sm">
            Kualitas produk luar biasa lahir dari perhatian detail yang tak kenal ampun. Inilah alasan mengapa perusahaan ternama Indonesia memercayakan produk digital mereka kepada kami.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((adv, idx) => (
            <div
              key={adv.id}
              className="bg-slate-900 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:border-sky-500/20 hover:bg-slate-900/90 transition-all duration-300 group animate-fade-in"
            >
              <div className="space-y-4 text-left">
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-850 flex items-center justify-center">
                  {getFeatureIcon(idx)}
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-sky-400 transition-colors">
                  {adv.title}
                </h3>

                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {adv.description}
                </p>
              </div>

              {/* Metric Accent (Aesthetic element) */}
              {adv.metric && (
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="font-display font-black text-2xl tracking-tight text-sky-400">
                    {adv.metric}
                  </span>
                  <span className="font-mono text-[9px] uppercase font-bold text-slate-300 bg-slate-950 px-2.5 py-1 border border-slate-850 rounded">
                    {adv.metricLabel}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner inside Advantages section */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-900 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-44 h-44 glow-sky opacity-10 pointer-events-none" />
          <div className="text-left space-y-1.5 z-10">
            <h4 className="font-display font-black text-base sm:text-lg">Kembangkan Solusi Anda Dengan Kami</h4>
            <p className="font-sans text-xs text-slate-400 max-w-xl">
              Kami menulis kode murni berbasis TypeScript secara modular. Menghindari duplikasi, meminimalisir overhead server, dan memaksimalkan ROI bisnis Anda.
            </p>
          </div>
          <div className="z-10 bg-slate-950 border border-slate-850 rounded-xl px-5 py-3 text-center sm:text-right">
            <span className="text-[10px] font-mono uppercase tracking-widest text-sky-450 block font-bold leading-none mb-1">MUTU DIJAMIN</span>
            <span className="text-sm font-semibold text-slate-200">SLA Uptime 99.99%</span>
          </div>
        </div>

      </div>
    </section>
  );
}
