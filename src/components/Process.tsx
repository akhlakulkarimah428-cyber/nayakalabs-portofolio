const steps = [
  {
    num: "01",
    title: "Discovery & Planning",
    desc: "Diskusi mendalam untuk memahami model bisnis Anda dan menentukan scope teknologi yang efisien.",
  },
  {
    num: "02",
    title: "Creative Design",
    desc: "Perancangan UI/UX di Figma hingga menjadi prototype interaktif yang siap Anda coba.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Proses coding dengan standar industri yang rapi, terukur, dan fokus pada keamanan data.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "Deployment produk ke server, training penggunaan, dan pendampingan teknis jangka panjang.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-28">
          <span className="label-mono mb-6 block">Metodologi</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-ink tracking-tight mb-6">
            Alur Kerja <span className="text-accent underline decoration-slate-200 underline-offset-8">Tanpa Celah</span>
          </h2>
          <p className="text-ink-muted font-medium max-w-lg mx-auto">
            Kami menerapkan standar industri global dalam setiap tahap pengembangan untuk memastikan hasil yang reliabel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div key={step.num} className="group p-10 bg-surface rounded-[32px] border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/5">
              <div className="mb-12">
                <span className="font-display text-5xl font-black text-slate-200 group-hover:text-accent/20 transition-colors duration-700">
                  {step.num}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-4">{step.title}</h3>
              <p className="text-ink-muted text-sm font-medium leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
