import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, CheckCircle, Send, Users, ShieldCheck, Hourglass } from "lucide-react";

interface ContactProps {
  prefilledPlan: string;
}

export default function Contact({ prefilledPlan }: ContactProps) {
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [projectGoal, setProjectGoal] = useState("Web Platform Development");
  const [message, setMessage] = useState("");
  
  // Validation & Submit status
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Sync prefilled estimasi details when forwarded from services
  useEffect(() => {
    if (prefilledPlan) {
      setMessage((prev) => {
        if (!prev.includes(prefilledPlan)) {
          return prefilledPlan;
        }
        return prev;
      });
      // Scroll smoothly to contact form anchor
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [prefilledPlan]);

  const whatsappNumber = "6281230860124";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("Nomor Whatsapp tidak ditemukan!");

    if (!name || !email || !message) {
      setErrorMsg("Mohon lengkapi Nama, Email, dan rincian Pesan Anda.");
      return;
    }

      const whatsappMessage = `
      Halo Nayaka Labs, saya ingin konsultasi proyek.

      Nama: ${name}
      Email: ${email}
      ${company ? `Perusahaan: ${company}\n` : ""}
      ${phone ? `No. WhatsApp: ${phone}\n` : ""}
      Kebutuhan: ${projectGoal}
      ${prefilledPlan ? `\nDetail awal:\n${prefilledPlan}\n` : ""}
      Pesan:
      ${message}
        `.trim();

        const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`;

        window.open(waUrl, "_blank", "noopener,noreferrer");
      };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 glow-indigo opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] glow-sky opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column Left: Contact Info (5 cols) */}
          <div className="lg:col-span-5 text-left space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-950/50 border border-sky-900/30 px-3.5 py-1.5 rounded-full inline-block">
                Hubungi Kami Sekarang
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
                Mari Diskusikan Proyek Hebat Anda Berikutnya
              </h2>
              <p className="font-sans text-slate-400 text-sm leading-relaxed">
                Punya blueprint ide produk digital atau sistem enterprise yang perlu diselesaikan? Silakan tinggalkan detail kontak Anda. Tim Developer Senior kami akan menelaah kebutuhan awal dan memberikan konsultasi proposal komprehensif.
              </p>
            </div>

            {/* Direct Contact info cards */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-slate-900 rounded-2xl border border-slate-800/80 shadow-md hover:border-sky-500/20 transition-colors">
                <div className="p-3 bg-slate-950 text-sky-400 border border-slate-850 rounded-xl shrink-0 h-fit">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block font-bold">Email Partner</span>
                  <a href="mailto:partnership@nayakalabs.com" className="text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors">
                    nayakalabs@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-slate-900 rounded-2xl border border-slate-800/80 shadow-md hover:border-sky-500/20 transition-colors">
                <div className="p-3 bg-slate-950 text-sky-400 border border-slate-850 rounded-xl shrink-0 h-fit">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block font-bold">Hotline & WhatsApp</span>
                  <a href="tel:+62215088899" className="text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors">
                    +62 888 0371 6911
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-slate-900 rounded-2xl border border-slate-800/80 shadow-md hover:border-sky-500/20 transition-colors">
                <div className="p-3 bg-slate-950 text-sky-400 border border-slate-850 rounded-xl shrink-0 h-fit">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block font-bold">Nayaka Labs</span>
                  <p className="text-xs text-slate-400 leading-normal">
                    Kelurahan Kembang, Kecamatan Bondowoso, Kabupaten Bondowoso, Jawa Timur (Kode Pos 68219)
                  </p>
                </div>
              </div>
            </div>

            {/* Micro value tags */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-350">
                <Hourglass className="w-4 h-4 text-sky-400" />
                <span>Respon &lt; 2 Jam</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-350">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>NDA Terjamin Aman</span>
              </div>
            </div>
          </div>

          {/* Column Right: Elegant Contact Form container (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 rounded-3xl border border-slate-800/80 shadow-2xl shadow-slate-950/20 p-6 sm:p-10 relative overflow-hidden text-left">
              
              {submitted ? (
                // Success State Screen
                <div className="py-12 px-4 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in-95 duration-400">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-900/60 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2 max-w-lg">
                    <h3 className="font-display font-black text-2xl text-white">
                      Formulir Berhasil Dikirim!
                    </h3>
                    <p className="font-sans text-sm text-slate-400 leading-relaxed">
                      Halo <span className="font-extrabold text-white">{name}</span>, terima kasih atas ketertarikan Anda terhadap studio teknologi kami. Formulir rincian proyek Anda telah dicatat di sistem kami.
                    </p>
                    <div className="p-4 bg-slate-950 border border-slate-850 text-left rounded-xl text-xs space-y-1.5 text-slate-400 font-mono mt-4">
                      <div><span className="font-bold text-slate-300">Email:</span> {email}</div>
                      {company && <div><span className="font-bold text-slate-300">Perusahaan:</span> {company}</div>}
                      <div><span className="font-bold text-slate-300">Kebutuhan:</span> {projectGoal}</div>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-sky-400 font-bold animate-pulse">
                     Spesialis senior kami akan menghubungi Anda kembali dalam jangka waktu maksimal 2 jam.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName("");
                      setEmail("");
                      setCompany("");
                      setPhone("");
                      setMessage("");
                    }}
                    className="bg-slate-950 border border-slate-800 hover:bg-slate-800 text-slate-300 font-display font-bold text-xs py-2.5 px-6 rounded-full cursor-pointer transition"
                  >
                    Kirim Pesan Baru
                  </button>
                </div>
              ) : (
                // Standard Form input
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMsg && (
                    <div className="p-3 bg-rose-950/30 text-rose-455 text-xs font-semibold rounded-xl border border-rose-900/40 text-rose-400 flex items-center gap-2">
                      <span>⚠️</span> {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-300 block">
                        Nama Lengkap Anda <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Contoh: Arya Baskoro"
                        className="w-full text-sm py-3 px-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-slate-200 placeholder-slate-600 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-300 block">
                        Alamat Email Bisnis <span className="text-rose-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="nama@perusahaan.com"
                        className="w-full text-sm py-3 px-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-slate-200 placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company (Optional) */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-bold text-slate-300 block">
                        Nama Perusahaan <span className="text-slate-500">(Opsional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Contoh: PT Sinar Abadi"
                        className="w-full text-sm py-3 px-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-slate-200 placeholder-slate-600 transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-300 block">
                        Nomor Handphone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Contoh: 0812345678"
                        className="w-full text-sm py-3 px-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-slate-200 placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Goal Selection */}
                  <div className="space-y-1.5">
                    <label htmlFor="goal" className="text-xs font-bold text-slate-300 block">
                      Kebutuhan Kategori Proyek
                    </label>
                    <select
                      id="goal"
                      value={projectGoal}
                      onChange={(e) => setProjectGoal(e.target.value)}
                      className="w-full text-sm py-3.5 px-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-sky-500 focus:outline-none text-slate-200 font-sans focus:ring-1 focus:ring-sky-500 cursor-pointer"
                    >
                      <option value="Web Platform Development">SaaS & Custom Web Application Development</option>
                      <option value="Mobile App Development">Mobile App Development (iOS & Android)</option>
                      <option value="Enterprise AI Solutions">Enterprise AI Integration & Automation</option>
                      <option value="Cloud Security & Devops">Kubernetes & DevOps Cloud Architecture Office</option>
                      <option value="Lainnya">Lainnya / Konsultasi Luas</option>
                    </select>
                  </div>

                  {/* Message details */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-300 block">
                      Rincian Konsep / Rencana Proyek <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ceritakan sedikit mengenai ide produk Anda, estimasi peluncuran, atau framework apa saja yang ingin Anda gunakan..."
                      className="w-full text-sm py-3 px-4 bg-slate-950 border border-slate-800 rounded-xl focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none text-slate-200 transition-colors font-sans placeholder-slate-600"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full group flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-display font-bold uppercase tracking-wider text-xs transition-all shadow-lg hover:shadow-sky-500/10 py-4 px-6 rounded-xl cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Ekskusi Pengiriman...
                      </span>
                    ) : (
                      <>
                        Kirim Formulir Konsultasi
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>


                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
