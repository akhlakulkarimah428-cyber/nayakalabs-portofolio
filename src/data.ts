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
    techs: ["PHP", "Laravel","React", "TypeScript", "Tailwind CSS", ],
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
  { value: "5", label: "Ahli Web & Desainer Kreatif" },
  { value: "10+", label: "Aplikasi Sukses Diluncurkan" },
  { value: "100%", label: "Skor Kepuasan Klien Partner" },
  { value: "24 Jam", label: "Waktu Respon Dukungan" }
];

export const PORTFOLIOS: PortfolioItem[] = [
  {
    id: "nayaka-pet",
    title: "Nayaka Pet — Veterinary Clinic Management System",
    category: ["Web App"],
    client: "Proyek Sistem Informasi Klinik Hewan",
    image: "/portofolio/nayaka-pet.png",
    summary:
      "Nayaka Pet merupakan sistem informasi manajemen klinik hewan berbasis web yang dirancang untuk mengintegrasikan proses administrasi dan pelayanan klinik dalam satu platform. Sistem ini menyediakan fitur dashboard, booking dan antrean pemeriksaan, pengelolaan data pasien hewan dan pemilik, pencatatan anamnesis, diagnosis, tindakan medis, serta pengelolaan staf, pengguna, dan ruang pemeriksaan. Selain itu, tersedia modul inventaris dan kasir (POS) untuk mendukung pengelolaan kebutuhan operasional klinik secara lebih terstruktur.",
    metrics:
      "Integrasi administrasi, pemeriksaan pasien, pengelolaan inventaris, dan transaksi dalam satu sistem untuk mendukung operasional klinik hewan yang lebih efisien dan terorganisir.",
    techs: ["Laravel", "Web Admin", "MySQL"],
    link: "#",
  },
  {
    id: "kenal-komputer",
    title: "Kenal Komputer — Online Learning Platform",
    category: ["Web App"],
    client: "Kenal Komputer",
    image: "/portofolio/kenal-komputer.png",
    summary:
      "Kenal Komputer merupakan platform pembelajaran komputer berbasis web yang dirancang untuk membantu pengguna membangun keterampilan digital melalui proses belajar yang interaktif dan terstruktur. Platform ini menghadirkan 10 sesi pembelajaran yang dilengkapi materi, mini game edukatif, latihan praktik, pemantauan progres, serta ujian akhir. Materi pembelajaran mencakup dasar komputer, Microsoft Word, Microsoft Excel, Microsoft PowerPoint, desain digital menggunakan Canva, email, dan pemanfaatan AI untuk produktivitas.",
    metrics:
      "Integrasi materi pembelajaran, latihan interaktif, mini game, dan evaluasi akhir untuk mendukung proses belajar komputer yang lebih menarik, terarah, dan mudah dipantau.",
    techs: ["HTML", "CSS", "JavaScript", "Educational Game"],
    link: "#",
  },
  {
    id: "megasari-bumi-indonesia",
    title: "Megasari Bumi Indonesia — Coffee Export Website",
    category: ["Web App"],
    client: "Megasari Bumi Indonesia",
    image: "/portofolio/megasari.png",
    summary:
      "Megasari Bumi Indonesia merupakan platform digital yang dirancang untuk memperkenalkan perusahaan dan memasarkan produk kopi spesialti Indonesia kepada pasar global. Website ini menyajikan informasi profil perusahaan, katalog produk, karakteristik kopi, keunggulan layanan, testimoni mitra, serta artikel seputar industri kopi. Platform ini juga dilengkapi Web Admin untuk memudahkan pengelolaan konten dan informasi produk sehingga pembaruan informasi dapat dilakukan secara lebih praktis dan terstruktur.",
    metrics:
      "Penyajian profil perusahaan dan katalog kopi dalam satu platform digital, didukung pengelolaan konten terpusat untuk mempermudah pembaruan informasi bisnis.",
    techs: ["Laravel", "Web Admin"],
    link: "#",
  },
  {
    id: "campwaste",
    title: "CampWaste — Campus Waste Management System",
    category: ["Mobile App", "Web App"],
    client: "Proyek Kampus",
    image: "/portofolio/campuswaste.jpg",
    summary:
      "CampWaste merupakan sistem informasi pengelolaan limbah kampus berbasis mobile dan web yang dirancang untuk mendukung pencatatan, pemantauan, dan pelaporan limbah secara terintegrasi. Dalam proyek ini, saya berperan sebagai Mobile Developer dengan mengembangkan aplikasi menggunakan Flutter serta mengintegrasikannya dengan REST API. Sistem ini mendukung pencatatan data limbah, informasi lokasi dan waktu, serta pemantauan Tempat Penampungan Sementara (TPS). Selain itu, teknologi YOLO11 dan TensorFlow Lite digunakan untuk mendukung estimasi jumlah kantong limbah berdasarkan gambar.",
    metrics:
      "Integrasi aplikasi mobile dan layanan backend untuk mendukung pencatatan limbah, pemantauan TPS, serta penyajian data yang membantu proses pengelolaan limbah kampus.",
    techs: [
      "Flutter",
      "Dart",
      "REST API",
      "Laravel",
      "MySQL",
      "YOLO11",
      "TensorFlow Lite",
    ],
    link: "#",
  },
  {
    id: "erp-travel-umroh",
    title: "ERP Travel & Umroh",
    category: ["Web App"],
    client: "Project Internal / Client Confidential",
    image: "/portofolio/travel.jpeg",
    summary:
      "ERP Travel & Umroh merupakan sistem manajemen berbasis web yang dirancang untuk mengintegrasikan proses administrasi perjalanan ibadah, mulai dari pendaftaran jamaah hingga pengelolaan data dan pelaporan keberangkatan. Sistem ini membantu memusatkan informasi operasional dalam satu platform sehingga proses administrasi dapat dikelola secara lebih terstruktur dan memudahkan pemantauan data oleh pihak terkait.",
    metrics:
      "Sentralisasi data jamaah dan proses administrasi perjalanan untuk mendukung pengelolaan operasional yang lebih terorganisir dan mengurangi ketergantungan pada pencatatan manual.",
    techs: ["React", "Firebase", "Dashboard", "Automation"],
    link: "#",
  },
  {
    id: "loka-kasir-pos",
    title: "Loka Kasir POS",
    category: ["Desktop App"],
    client: "UMKM Bondowoso",
    image: "/portofolio/loka_kasir.png",
    summary:
      "Loka Kasir POS merupakan aplikasi kasir berbasis desktop yang dirancang untuk membantu UMKM mengelola transaksi penjualan sehari-hari. Aplikasi ini menyediakan alur transaksi yang sederhana, pencatatan penjualan, serta fitur pencetakan struk untuk mendukung proses pembayaran yang praktis. Dengan antarmuka yang berfokus pada kebutuhan operasional, aplikasi ini ditujukan untuk mempermudah aktivitas kasir pada bisnis skala kecil hingga menengah.",
    metrics:
      "Penyederhanaan proses transaksi penjualan dan pencetakan struk dalam satu aplikasi desktop untuk mendukung operasional kasir harian UMKM.",
    techs: ["NetBeans", "SQLite", "POS", "Receipt Printing"],
    link: "#",
  },
  {
    id: "my-enviro-hub",
    title: "My Enviro Hub — Operations Management Platform",
    category: ["Web App", "Mobile App"],
    client: "Outsourcing Operations",
    image: "/portofolio/enviro.jpg",
    summary:
      "My Enviro Hub merupakan platform digital untuk mendukung pengelolaan operasional layanan outsourcing, termasuk bidang pest control dan security. Platform ini dirancang untuk mempermudah akses informasi pekerjaan, mendukung koordinasi antara tim lapangan dan admin, serta membantu pemantauan aktivitas operasional melalui perangkat mobile dan layanan pendukung berbasis web.",
    metrics:
      "Dukungan digitalisasi alur kerja operasional untuk mempermudah akses informasi, koordinasi tim, dan pemantauan aktivitas lapangan secara lebih terorganisir.",
    techs: ["Flutter", "Mobile Workflow", "Field Operations", "2026"],
    link: "#",
  },
  {
    id: "sip-coffee-trace",
    title: "SIP Coffee — Coffee Traceability Platform",
    category: ["Web App", "Mobile App"],
    client: "Bondowoso Coffee Ecosystem",
    image: "/portofolio/sipcoffee.png",
    summary:
      "SIP Coffee merupakan platform digital yang dirancang untuk mendukung ketertelusuran distribusi kopi Bondowoso, mulai dari petani hingga proses ekspor. Sistem ini membantu menyajikan informasi perjalanan produk dan alur distribusi secara lebih transparan sehingga data dalam rantai pasok dapat ditelusuri dan dipantau oleh pihak terkait.",
    metrics:
      "Penyediaan informasi ketertelusuran produk untuk mendukung transparansi distribusi, pemantauan rantai pasok, dan kepercayaan antar pihak dalam ekosistem kopi.",
    techs: ["QR Code", "Logistics", "Traceability", "Supply Chain"],
    link: "#",
  },
  {
    id: "pandawa-gis",
    title: "PANDAWA GIS — Geographic Information System",
    category: ["Web App"],
    client: "Kabupaten Bondowoso",
    image: "/portofolio/pandawaa.png",
    summary:
      "PANDAWA GIS merupakan sistem informasi geospasial berbasis web yang dirancang untuk menyajikan persebaran potensi komoditas daerah melalui visualisasi peta interaktif. Sistem ini membantu pengguna mengeksplorasi informasi berdasarkan wilayah serta menyediakan representasi data spasial yang lebih mudah dipahami untuk mendukung analisis dan perencanaan pembangunan daerah.",
    metrics:
      "Visualisasi data potensi komoditas berdasarkan wilayah untuk mempermudah eksplorasi informasi spasial dan mendukung pengambilan keputusan berbasis data.",
    techs: ["GIS", "Visualization", "Web Mapping", "Data Dashboard"],
    link: "#",
  },
  {
    id: "pertanian-rajawali",
    title: "GrowHarvest Platform",
    category: ["Web App", "Mobile App"],
    client: "Toko Pertanian Rajawali",
    image: "/portofolio/rajawali.png",
    summary:
      "GrowHarvest merupakan platform digital berbasis web dan mobile yang dirancang untuk membantu pengelolaan operasional toko pertanian. Sistem ini mendukung pengelolaan stok barang, pencatatan transaksi penjualan, perhitungan laba otomatis, serta penyajian laporan dan analisis bisnis. Integrasi fitur tersebut membantu pemilik usaha memantau aktivitas operasional dan memperoleh informasi yang lebih terstruktur sebagai dasar pengambilan keputusan.",
    metrics:
      "Integrasi pengelolaan stok, transaksi, perhitungan laba, dan laporan bisnis untuk membantu meningkatkan keteraturan pencatatan serta mendukung pemantauan operasional usaha.",
    techs: ["Laravel", "Flutter", "Firebase", "Web Dashboard"],
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

