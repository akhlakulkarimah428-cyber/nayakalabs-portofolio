import { useState } from "react";
import { FAQS } from "../data";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-950 border-t border-slate-900 overflow-hidden text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/50 border border-sky-900/30 px-3.5 py-1.5 rounded-full inline-block">
            Pertanyaan Umum (FAQ)
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
            Menjawab Keraguan Anda Secara Transparan
          </h2>
          <p className="font-sans text-slate-400 text-sm">
            Semua yang perlu Anda ketahui tentang siklus perancangan sistem, jaminan mutu, kontrak legal, dan model kerja sama Agile kami.
          </p>
        </div>

        {/* Collapsible Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden transition-colors"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-slate-800/40 cursor-pointer focus:outline-none transition-colors"
                >
                  <div className="flex gap-3.5 items-center pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-sky-450 text-sky-400" : "text-slate-500"}`} />
                    <span className="font-display font-bold text-sm sm:text-base text-slate-200 hover:text-sky-400 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full bg-slate-950 border border-slate-850 shrink-0 text-slate-405 transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-400 border-sky-900/40" : ""}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Body */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-64 border-t border-slate-800/50" : "max-h-0"
                  }`}
                >
                  <div className="p-5 sm:p-6 bg-slate-950/40">
                    <p className="font-sans text-xs sm:text-sm text-slate-350 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Bottom Note helper */}
        <div className="mt-12 text-center p-6 bg-slate-900/40 border border-slate-800/60 rounded-2xl">
          <p className="font-sans text-xs text-slate-300 leading-relaxed">
            Punya pertanyaan spesifik lainnya? Tim konsultan kami siap melayani Anda melalui panggilan video atau kunjungan langsung.{" "}
            <a href="#contact" className="font-bold underline text-sky-400 hover:text-sky-300 transition-colors">
              Hubungi Konsultan Sekarang &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
