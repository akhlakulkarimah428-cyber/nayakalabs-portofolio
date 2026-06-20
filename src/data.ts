import { Service, PortfolioItem, Testimonial, FAQItem, Advantage, ProcessStep } from "./types";

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    icon: "Layout",
    title: "Website Development",
    description: "Pembuatan website profil bisnis (company profile), landing page yang menawan, media digital, hingga sistem e-commerce web modern menggunakan framework terdepan seperti PHP, Laravel, Next.js, React, dan Tailwind CSS.",
    highlightWords: ["website", "Next.js", "landing page"],
    features: [
      "Custom Webs & Content Management System (CMS)",
      "Optimasi Kecepatan Loading di Bawah 1.5 Detik",
      "Struktur Kode Bersih & Responsif Lintas Gadget",
      "Situs Portfolio, Toko Online, & Platform SaaS"
    ],
    techs: ["PHP", "Laravel","React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
    badge: "Populer"
  },
  {
    id: "app-dev",
    icon: "Smartphone",
    title: "Mobile App Development",
    description: "Pengembangan aplikasi ponsel iOS dan Android menggunakan framework cross-platform terpopuler seperti Flutter atau React Native untuk performa mulus dan kemudahan pemeliharaan sistem.",
    highlightWords: ["iOS", "Android", "mulus"],
    features: [
      "Aplikasi Flutter & React Native untuk iOS & Android",
      "Integrasi Layanan & Otentikasi Cloud (Firebase / Supabase)",
      "Mode Offline & Sinkronisasi Database Lokal",
    ],
    techs: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    badge: "Premium"
  },
  {
    id: "desktop-dev",
    icon: "Laptop",
    title: "Desktop App Development",
    description: "Membangun aplikasi komputer multiplatform (Windows, macOS, Linux) yang solid menggunakan teknologi handal seperti Electron atau Tauri untuk mendukung efisiensi operasional harian.",
    highlightWords: ["Windows", "macOS", "Desktop"],
    features: [
      "Software Kasir (POS) & Manajemen Penggajian Desktop",
      "Sistem Keamanan Data Lokal Eksklusif",
      "Integrasi Hardware Printer Kasir, Scanner, dll",
      "Performa Sangat Ringan dengan Resource Rendah"
    ],
    techs: ["Java", "Netbeans"],
    badge: "Spesialis"
  },
  {
    id: "seo-opt",
    icon: "Activity",
    title: "SEO Optimization",
    description: "Membantu meningkatkan peringkat pencarian website Anda di Google secara organik dengan teknik SEO teknis, riset kata kunci strategis, optimasi metadata, serta audit performa berkala.",
    highlightWords: ["peringkat Google", "organik", "SEO teknis"],
    features: [
      "Analisis Kompetitor & Perencanaan Kata Kunci Bisnis",
      "Optimasi Struktur Metadata & Skema HTML Sempurna",
      "Peningkatan Skor Kecepatan Google PageSpeed Insights",
      "Setup Google Analytics, Tag Manager, & Search Console"
    ],
    techs: ["Google Analytics", "Google Search Console", "Ahrefs", "Screaming Frog"],
    badge: "Baru"
  },
  {
    id: "uiux-design",
    icon: "Sparkles",
    title: "UI / UX Design",
    description: "Perancangan desain antarmuka pengguna (UI) dan alur perjalanan pengguna (UX) yang memikat, intuitif, dan selaras dengan identitas brand Anda di setiap titik sentuh digital.",
    highlightWords: ["antarmuka luar biasa", "intuitif", "Figma"],
    features: [
      "Pembuatan Wireframe Kompleks & Wireflow Sistem",
      "Desain Visual Pixel-Perfect Berkualitas Premium di Figma",
      "System Design & Komponen yang Siap Diterapkan Programmer",
      "Prototipe Interaktif Siap Uji Keterpakaian Klien"
    ],
    techs: ["Figma", "Adobe Illustrator", "Prototyping", "Design System"],
  }
];

export const CLIENT_LOGOS = [
  { name: "PT Global Data Inspirasi", logoText: "Datains" },
  { name: "Naray Coffee Bondowoso", logoText: "Naray Coffee" },
  { name: "Sekolah Kopi RAISA", logoText: "RAISA" },
  { name: "Toko Pertanian Rajawali", logoText: "Rajawali" },
  { name: "Flowolf Cafe", logoText: "Flowolf" },
  { name: "Travel Umroh Bondowoso", logoText: "Umroh Bondowoso" },
  { name: "BC Alfamart Bondowoso", logoText: "BC Alfamart" },
];

export const ABOUT_STATS = [
  { value: "5+", label: "Ahli Web & Desainer Kreatif" },
  { value: "10+", label: "Aplikasi Sukses Diluncurkan" },
  { value: "100%", label: "Skor Kepuasan Klien Partner" },
  { value: "24 Jam", label: "Waktu Respon Dukungan" }
];

export const PORTFOLIOS: PortfolioItem[] = [
  {
    id: "erp-travel-umroh",
    title: "ERP Travel & Umroh",
    category: "Web App",
    client: "Project Internal / Client Confidential",
    image: "/portofolio/travel.jpeg",
    summary:
      "Sistem manajemen terintegrasi untuk mengotomasi alur pendaftaran jamaah, pendataan administrasi, hingga pelaporan keberangkatan secara real-time dan terstruktur.",
    metrics:
      "Mempercepat proses operasional dan mengurangi input manual di beberapa tahap administratif.",
    techs: ["React", "Firebase", "Dashboard", "Automation"],
    link: "#",
  },
  {
    id: "loka-kasir-pos",
    title: "Loka Kasir POS",
    category: "Desktop App",
    client: "UMKM Bondowoso",
    image: "/portofolio/loka_kasir.png",
    summary:
      "Aplikasi kasir desktop yang dirancang untuk membantu operasional UMKM dengan alur transaksi yang cepat, sederhana, dan dukungan cetak struk yang stabil.",
    metrics:
      "Dibuat ringan, mudah digunakan, dan cocok untuk kebutuhan transaksi harian bisnis kecil hingga menengah.",
    techs: ["Netbeans", "SQLite", "POS", "Receipt Printing"],
    link: "#",
  },
  {
    id: "my-enviro-hub",
    title: "My Enviro Hub",
    category: "Mobile App",
    client: "Outsourcing Operations",
    image: "/portofolio/enviro.jpg",
    summary:
      "Platform mobile untuk mendukung manajemen operasional outsourcing seperti pest control dan security, dengan akses data yang praktis dan mobile-first.",
    metrics:
      "Membantu tim lapangan dan admin memantau pekerjaan secara lebih cepat dan terorganisir.",
    techs: ["Flutter", "Mobile Workflow", "Field Operations", "2026"],
    link: "#",
  },
    {
    id: "sip-coffee-trace",
    title: "SIP Coffee",
    category: "Web App",
    client: "Bondowoso Coffee Ecosystem",
    image: "/portofolio/sipcoffee.png",
    summary:
      "Sistem ketertelusuran distribusi kopi Bondowoso dari petani hingga proses ekspor, dirancang agar alur logistik lebih transparan, rapi, dan mudah dipantau.",
    metrics:
      "Memperkuat traceability produk dan membantu menjaga kepercayaan sepanjang rantai distribusi.",
    techs: ["QR Code", "Logistics", "Traceability", "Supply Chain"],
    link: "#",
  },
  {
    id: "pandawa-gis",
    title: "PANDAWA GIS",
    category: "Web App",
    client: "Kabupaten Bondowoso",
    image: "/portofolio/pandawaa.png",
    summary:
      "Sistem informasi geospasial untuk memetakan potensi komoditas daerah secara visual, interaktif, dan mudah dianalisis oleh pengguna maupun pemangku kebijakan.",
    metrics:
      "Menyajikan data spasial secara lebih informatif untuk mendukung pengambilan keputusan berbasis wilayah.",
    techs: ["GIS", "Visualization", "Web Mapping", "Data Dashboard"],
    link: "#",
  },
  {
    id: "greengrow-iot",
    title: "GreenGrow IoT",
    category: "Mobile App",
    client: "AgriTech Monitoring",
    image: "/portofolio/greengrow.jpg",
    summary:
      "Aplikasi monitoring lahan pertanian cerdas berbasis sensor IoT untuk membantu petani memantau kondisi lahan dan mengambil keputusan secara lebih tepat.",
    metrics:
      "Mendukung pemantauan lahan secara lebih efisien melalui integrasi data sensor dan tampilan mobile.",
    techs: ["IoT", "Flutter", "Sensor Data", "Smart Farming"],
    link: "#",
  },

];

export const WHY_CHOOSE_US: Advantage[] = [
  {
    id: "quality",
    title: "Insinyur & Desainer Senior",
    description: "Kami tidak mendelegasikan pengerjaan proyek Anda ke pekerja magang atau junior. Seluruh kode program dirakit langsung oleh pengembang dan desainer ahli senior.",
    metric: "100%",
    metricLabel: "Lead Senior Devs"
  },
  {
    id: "performance",
    title: "Mengutamakan Kecepatan & Responsif",
    description: "Aplikasi mobile, website, maupun desktop yang kami kembangkan dijamin sangat ringan diakses serta responsif saat dijalankan di berbagai perangkat.",
    metric: "<1.5s",
    metricLabel: "Waktu Muat Rata-Rata"
  },
  {
    id: "agile",
    title: "Pemantauan Proses Transparan",
    description: "Anda mendapatkan visibilitas pengerjaan proyek secara berkala melalui update berkala. Tidak ada fitur siluman atau penundaan rahasia.",
    metric: "100%",
    metricLabel: "Transparansi Kode"
  },
  {
    id: "ui-ready",
    title: "Desain Premium Pixel-Perfect",
    description: "Setiap antarmuka pengguna dirakit khusus melalui riset kegunaan mendalam di Figma agar mudah dipahami, cantik dipandang, dan meningkatkan angka pembelian.",
    metric: "5-Star",
    metricLabel: "Standar Sentuhan Seni Desain"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Konsultasi Ide & Kebutuhan",
    description: "Kami mendengarkan gagasan produk digital Anda, menyaring fitur prioritas, memetakan kebutuhan teknologi, dan mengajukan proposal anggaran paling bersahabat.",
    deliverables: ["Product Roadmap Deskriptif", "Rancangan Peta Fitur Utama", "Estimasi Timeline Kerja Sampingan"]
  },
  {
    number: "02",
    title: "Perancangan UI/UX Menawan",
    description: "Tim ahli desainer kami mulai menyusun wireframe fungsional dan mock-up pixel-perfect di Figma yang interaktif, menawan, dan mencerminkan brand Anda.",
    deliverables: ["Desain Figma Handal", "Kerangka Alur Klik Interaktif", "Panduan Palet Warna Brand"]
  },
  {
    number: "03",
    title: "Pemrograman Berstandar Tinggi",
    description: "Programmer senior kami membangun kode program menggunakan standar TypeScript yang rapi, bersih, terdokumentasi, serta diuji performanya sesering mungkin.",
    deliverables: ["Source Code Bersih", "Pre-Production Beta Link", "Status Sesi Demo Mingguan"]
  },
  {
    number: "04",
    title: "Pengujian, SEO, & Launch",
    description: "Kami mengaudit performa bug aplikasi, menetapkan skema SEO awal pada situs, lalu meluncurkannya ke live server, Play Store, Apple App Store, atau instalan desktop.",
    deliverables: ["File Hasil Instal Ready-for-Use", "Kunci Sandbox Sandbox Selesai", "Buku Panduan Pengelolaan Manual"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-1",
    name: "Arya Setiadharma",
    role: "Chief of Product",
    company: "Svara Media Nusantara",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60",
    content: "Bekerja bersama Nayaka Labs dalam membangun aplikasi pemutar mobile streaming kami adalah pengalaman yang menyenangkan. Desain UI/UX-nya luar biasa rapi, transisinya responsif, dan performanya sangat stabil.",
    rating: 5
  },
  {
    id: "testi-2",
    name: "Rania Wardhana",
    role: "Brand Director",
    company: "Artha Fins",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60",
    content: "Website profil bisnis kami kini terlihat sangat berkelas, informatif, dan mendatangkan calon klien berkat optimasi SEO awal dari Nayaka Labs. Sangat merekomendasikan jasa pengerjaan web mereka!",
    rating: 5
  },
  {
    id: "testi-3",
    name: "Heru Herlambang",
    role: "Direktur Operasional",
    company: "PT Laksana Logistik",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60",
    content: "Nayaka Labs berhasil membuat aplikasi desktop tracker operasional kami yang ringan, andal, dan minim crash. Staf admin kami yang gagap teknologi pun sangat menyukai desain antarmuka barunya.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Berapa lama estimasi pengerjaan website atau aplikasi di Nayaka Labs?",
    answer: "Untuk pembuatan landing page atau profil bisnis sederhana berkisar antara 2 hingga 3 minggu. Pengerjaan website e-commerce, sistem web interaktif, aplikasi desktop, atau aplikasi mobile Android/iOS berkisar antara 4 hingga 8 minggu tergantung dari jumlah fitur fungsional yang diinginkan."
  },
  {
    id: "faq-2",
    question: "Apakah saya bisa memesan jasa Desain UI/UX atau optimasi SEO secara terpisah?",
    answer: "Tentu saja! Jika Anda sudah memiliki programmer sendiri tetapi membutuhkan rancangan desain UI/UX berkualitas profesional di Figma, atau ingin meningkatkan visibilitas situs bisnis Anda di mesin pencari, Anda bisa menyewa tim desainer atau ahli SEO kami secara khusus."
  },
  {
    id: "faq-3",
    question: "Bagaimana cara saya menyimak proses pembuatan aplikasi secara langsung?",
    answer: "Kami menjunjung tinggi kejujuran proses. Kami rutin membagikan link peninjau sementara (staging link) untuk web, file penginstal beta untuk aplikasi mobile & desktop, serta update status mingguan agar Anda bisa menyaksikan penyelesaian program di setiap fasenya."
  },
  {
    id: "faq-4",
    question: "Apakah saya mendapatkan akses seratus persen terhadap kode program & desain?",
    answer: "Sepenuhnya iya. Setelah proses pelunasan pengerjaan diselesaikan, seluruh aset visual di Figma, tautan repositori program, serta berkas installer resmi akan dipindahtangankan seutuhnya menjadi hak milik eksklusif perusahaan Anda tanpa biaya tersembunyi."
  }
];

