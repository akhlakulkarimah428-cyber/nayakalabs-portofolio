import { motion } from "motion/react";
import { MessageSquare, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const waNumber = "6281230860124";
  const waLink = `https://wa.me/${waNumber}?text=Halo%20Nayaka%20Labs,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20pembuatan%20website/aplikasi.`;

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="label-mono mb-8 block">Hubungi Kami</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-ink tracking-tight mb-10 leading-[1.1]">
              Mari Diskusi <br /><span className="text-accent underline decoration-slate-200 underline-offset-8">Ide Besar Anda</span>
            </h2>
            <p className="text-ink-muted text-xl font-medium leading-relaxed mb-16 max-w-md">
              Tim kami siap membantu Anda mendefinisikan strategi digital yang tepat. Konsultasi awal selalu gratis.
            </p>

            <div className="space-y-10">
              {[
                { icon: MessageSquare, label: "Business Inquiry", value: "nayakalabs@gmail.com" },
                { icon: MapPin, label: "Headquarter", value: "Bondowoso, East Java" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-8 group">
                  <div className="w-14 h-14 bg-surface border border-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-ink-muted mb-1">{item.label}</p>
                    <p className="text-xl font-display font-bold text-ink">{item.value}</p>
                  </div>
                </div>
              ))}
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-8 p-8 bg-accent/5 rounded-[32px] border border-accent/10 hover:bg-accent/10 transition-all group"
              >
                <div className="w-14 h-14 bg-accent text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Direct Response</p>
                  <p className="text-xl font-display font-bold text-ink">WhatsApp Chat &rarr;</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-surface border border-slate-100 rounded-[48px] p-10 md:p-16">
            <h3 className="font-display text-3xl font-bold text-ink mb-4">Mulai Inquiry</h3>
            <p className="text-ink-muted text-sm font-medium mb-12 tracking-tight">Kanal komunikasi resmi Nayaka Labs untuk kolaborasi profesional.</p>

            <form className="space-y-8" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const text = `Halo Nayaka Labs, saya ${formData.get("name")}. Ingin tanya tentang ${formData.get("service")}. ${formData.get("message")}`;
              window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`, "_blank");
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="block text-[10px] font-bold uppercase text-ink-muted tracking-widest px-1">Nama Lengkap</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    className="w-full bg-white border border-slate-200 rounded-2xl p-5 text-sm font-semibold text-ink focus:border-accent outline-none transition-all" 
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] font-bold uppercase text-ink-muted tracking-widest px-1">Layanan</label>
                  <select 
                    name="service"
                    className="w-full bg-white border border-slate-200 rounded-2xl p-5 text-sm font-semibold text-ink focus:border-accent outline-none transition-all appearance-none"
                  >
                    <option>Development</option>
                    <option>UI/UX Design</option>
                    <option>Maintenance</option>
                    <option>Others</option>
                  </select>
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-[10px] font-bold uppercase text-ink-muted tracking-widest px-1">Deskripsi Projek</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white border border-slate-200 rounded-2xl p-5 text-sm font-semibold text-ink focus:border-accent outline-none transition-all resize-none" 
                  placeholder="Ceritakan tujuan atau masalah yang ingin Anda selesaikan..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="btn-primary w-full !py-6 flex items-center justify-center gap-4 group"
              >
                KIRIM PESAN SEKARANG
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
