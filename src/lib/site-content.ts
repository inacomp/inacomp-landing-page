export type FaqItem = {
	question: string;
	answer: string;
};

export type GalleryImage = {
	src: string;
	alt: string;
	size?: "square" | "portrait" | "wide";
	tag?: string;
	title?: string;
	caption?: string;
};

export const officialTimeline = [
	{
		date: "8 – 29 Juni 2026",
		title: "Pendaftaran Peserta Perlombaan",
		note: "Pendaftaran dibuka untuk seluruh peserta dari dua Kategori Lomba.",
	},
	{
		date: "29 Juni – 5 Juli 2026",
		title: "Penjurian Penyisihan UI/UX",
		note: "Peserta UI/UX masuk ke fase seleksi awal berdasarkan berkas dan karya yang dikumpulkan.",
	},
	{
		date: "2 Juli 2026",
		title: "Technical Meeting Penyisihan CP",
		note: "Panitia menjelaskan alur pelaksanaan, ketentuan umum, dan teknis babak awal CP.",
	},
	{
		date: "4 Juli 2026",
		title: "Penyisihan Competitive Programming",
		note: "Peserta Competitive Programming mengikuti babak penyisihan secara online.",
	},
	{
		date: "6 Juli 2026",
		title: "Pengumuman Finalis Perlombaan",
		note: "Finalis resmi dari kedua cabang diumumkan oleh panitia.",
	},
	{
		date: "8 Juli 2026",
		title: "Technical Meeting Final",
		note: "Finalis mengikuti pengarahan teknis menjelang babak akhir.",
	},
	{
		date: "11 Juli 2026",
		title: "Final Perlombaan",
		note: "Babak final menjadi puncak penilaian dan presentasi karya terbaik di Universitas Negeri Jakarta.",
	},
	{
		date: "14 Juli 2026",
		title: "Pengumuman Juara",
		note: "Pemenang resmi INACOMP 2.0 diumumkan kepada publik.",
	},
];

export const cpTimeline = [
	{
		date: "8 – 29 Juni 2026",
		title: "Pendaftaran Peserta Perlombaan",
		note: "Pendaftaran online untuk peserta cabang Competitive Programming.",
	},
	{
		date: "2 Juli 2026",
		title: "Technical Meeting Penyisihan",
		note: "Penjelasan alur teknis dan kesiapan peserta sebelum babak penyisihan.",
	},
	{
		date: "4 Juli 2026",
		title: "Penyisihan Competitive Programming",
		note: "Pelaksanaan penyisihan secara online.",
	},
	{
		date: "6 Juli 2026",
		title: "Pengumuman Finalis Perlombaan",
		note: "Diumumkan secara resmi oleh panitia.",
	},
	{
		date: "8 Juli 2026",
		title: "Technical Meeting Final",
		note: "Pengarahan teknis untuk babak akhir.",
	},
	{
		date: "11 Juli 2026",
		title: "Final Competitive Programming",
		note: "Dilaksanakan secara offline di Universitas Negeri Jakarta.",
	},
	{
		date: "14 Juli 2026",
		title: "Pengumuman Juara",
		note: "Pengumuman pemenang resmi INACOMP 2.0.",
	},
];

export const uiuxTimeline = [
	{
		date: "8 – 29 Juni 2026",
		title: "Pendaftaran Tim & Pengumpulan Karya",
		note: "Online via Form",
	},
	{
		date: "29 Juni – 5 Juli 2026",
		title: "Penjurian Penyisihan",
		note: "Online",
	},
	{
		date: "6 Juli 2026",
		title: "Pengumuman Finalis",
		note: "Online",
	},
	{
		date: "8 Juli 2026",
		title: "Technical Meeting Finalis",
		note: "Online",
	},
	{
		date: "11 Juli 2026",
		title: "Final Presentation",
		note: "Offline, Universitas Negeri Jakarta",
	},
	{
		date: "14 Juli 2026",
		title: "Pengumuman Juara",
		note: "Online",
	},
];

export const homeFaqItems: FaqItem[] = [
	{
		question: "Siapa yang dapat mengikuti INACOMP 2.0?",
		answer:
			"INACOMP 2.0 ditujukan untuk siswa/i SMA/SMK/sederajat dari seluruh Indonesia yang ingin berkompetisi di bidang Competitive Programming atau UI/UX Design.",
	},
	{
		question: "Apakah peserta harus memilih salah satu cabang sejak awal?",
		answer:
			"Ya. Peserta memilih satu cabang yang paling sesuai dengan minat dan kekuatan timnya, lalu mengikuti alur kompetisi dari cabang tersebut.",
	},
	{
		question: "Apakah timeline finalis untuk dua cabang berbeda?",
		answer:
			"Tidak. Pengumuman finalis, technical meeting final, final perlombaan, dan pengumuman juara memakai timeline umum yang sama untuk seluruh kompetisi.",
	},
	{
		question: "Apa keunggulan mengikuti INACOMP 2.0?",
		answer:
			"INACOMP memberi pengalaman kompetisi nasional yang lebih terstruktur, memperkuat portofolio, memperluas jaringan, dan melatih peserta tampil pada konteks akademik sekaligus teknologi.",
	},
];

export const cpFaqItems: FaqItem[] = [
	{
		question: "Track CP ini cocok untuk siapa?",
		answer:
			"Untuk pelajar SMA/sederajat yang aktif latihan problem solving. Kalau kamu udah pernah ikut OSN, KSN, atau rutin latihan di Codeforces/Kattis, kamu ada di tempat yang tepat.",
	},
	{
		question: "Satu tim boleh berapa orang?",
		answer: "2–3 orang per tim. Tidak ada tim solo.",
	},
	{
		question: "Apakah ada babak penyisihan online?",
		answer:
			"Ada. Penyisihan dilakukan online, final offline di UNJ. Jadwal lengkap ada di timeline.",
	},
	{
		question: "Kapan batas akhir pendaftaran?",
		answer: "29 Juni 2026. Setelah tanggal itu form ditutup.",
	},
];

export const uiuxFaqItems: FaqItem[] = [
	{
		question: "Apa yang harus peserta UI/UX Design kumpulkan?",
		answer:
			"Proposal PDF, file desain (Figma atau PDF), dan link prototype interaktif. Detail lengkap ada di booklet.",
	},
	{
		question: "Berapa anggota maksimal per tim UI/UX?",
		answer: "2–4 orang per tim.",
	},
	{
		question: "Apa yang dinilai selain tampilan visualnya?",
		answer:
			"Proses riset, logika keputusan desain, dan kemampuan presentasi di final. Estetika bukan satu-satunya kriteria.",
	},
	{
		question: "Bagaimana cara mengetahui info terbaru?",
		answer:
			"Follow akun media sosial resmi INACOMP atau tanyakan langsung ke admin via WhatsApp.",
	},
];

export const contactAdmins = [
	{
		name: "INACOMP",
		role: "Contact Utama",
		phoneDisplay: "+62 831-7786-2220",
		phoneHref: "6283177862220",
	},
	{
		name: "Faiz",
		role: "Admin Kompetisi",
		phoneDisplay: "+62 881-1814-203",
		phoneHref: "628811814203",
	},
] as const;

export const whatsappMessage =
	"Halo Admin INACOMP2.0, saya ingin bertanya terkait lomba INACOMP 2.0...";

export function buildWhatsAppUrl(phoneNumber: string) {
	return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}

export const homeGallery: GalleryImage[] = [
	{
		src: "/assets/inacomp/home/empat.jpg",
		alt: "Suasana peserta INACOMP saat mengikuti rangkaian kompetisi nasional.",
		size: "portrait",
		tag: "Main Event",
		title: "Suasana Kompetisi Nasional",
		caption: "Antusiasme peserta terasa kuat sejak rangkaian acara dimulai.",
		// Menampilkan para peserta dan pendamping sedang berdiri untuk menyanyikan bersama lagu indonesia raya, antusiasmenya terasa kuat sekali
	},
	{
		src: "/assets/inacomp/home/dua.png",
		alt: "Panggung dan atmosfer acara INACOMP yang menunjukkan skala event nasional.",
		size: "wide",
		tag: "Stage Moment",
		title: "Panggung yang Membangun Skala Event",
		caption:
			"Visual panggung dan crowd membantu mempertegas identitas event teknologi nasional.",
		// Menampilkan foto screenshot zoom saat sesi technical meeting peserta, 1 frame ini semuanya on cam dengan menggunakan background yang sama
	},
	{
		src: "/assets/inacomp/home/delapan.jpg",
		alt: "Dokumentasi peserta dan panitia INACOMP dalam satu rangkaian kegiatan.",
		size: "square",
		tag: "Collaboration",
		title: "Interaksi Peserta dan Panitia",
		caption:
			"Dokumentasi yang menunjukkan ritme acara tetap aktif, hangat, dan terorganisir.",
		// foto menampilkan para peserta final dikumpulkan di satu ruangan agar mereka dapat berdiskusi (terjadi interaksi di sini)
	},
	{
		src: "/assets/inacomp/home/enam.jpg",
		alt: "Momen kompetitif yang memperlihatkan keseriusan peserta di arena lomba.",
		size: "square",
		tag: "Competition",
		title: "Fokus di Arena Lomba",
		caption:
			"Momen kompetitif yang memperlihatkan keseriusan peserta selama babak berlangsung.",
		// kalau ini iya sih lagi kompetitif, karena peserta CP lagi fokus ngerjain soal gitu
	},
];

export const cpGallery: GalleryImage[] = [
	{
		src: "/assets/inacomp/cp/dua.jpeg",
		alt: "Suasana babak Competitive Programming yang menuntut konsentrasi tinggi.",
		size: "portrait",
		tag: "Contest Floor",
		title: "Konsentrasi Penuh di Babak Lomba",
		caption:
			"Atmosfer kompetitif terasa rapi, teknis, dan penuh fokus dari setiap tim peserta.",
	},
	{
		src: "/assets/inacomp/cp/satu.jpeg",
		alt: "Peserta Competitive Programming fokus menyelesaikan soal pada babak lomba.",
		size: "wide",
		tag: "Problem Solving",
		title: "Problem Solving dalam Tekanan Waktu",
		caption:
			"Galeri ini menonjolkan ritme lomba yang cepat, disiplin, dan sangat terukur.",
	},
	{
		src: "/assets/inacomp/cp/tiga.jpeg",
		alt: "Dokumentasi peserta Competitive Programming INACOMP saat berkompetisi.",
		size: "square",
		tag: "Team Focus",
		title: "Fokus Tim Saat Berkompetisi",
		caption:
			"Setiap frame memperlihatkan keseriusan peserta dalam membaca soal dan menyusun strategi.",
	},
	{
		src: "/assets/inacomp/cp/enam.jpg",
		alt: "Atmosfer teknis Competitive Programming dalam ajang INACOMP.",
		size: "square",
		tag: "Tech Arena",
		title: "Atmosfer Teknis yang Kredibel",
		caption:
			"Nuansa clean dan kompetitif tetap dijaga tanpa kehilangan karakter event teknologi.",
	},
];

export const uiuxGallery: GalleryImage[] = [
	{
		src: "/assets/inacomp/home/lima.jpeg",
		alt: "Kegiatan peserta dalam kompetisi yang menonjolkan atmosfer kolaboratif dan kreatif.",
		size: "portrait",
		tag: "Creative Room",
		title: "Kolaborasi dan Diskusi Desain",
		caption:
			"Suasana kerja peserta terasa aktif, kreatif, dan tetap terarah pada kualitas output.",
	},
	{
		src: "/assets/inacomp/home/satu.png",
		alt: "Suasana event INACOMP yang mendukung presentasi ide dan eksplorasi solusi digital.",
		size: "wide",
		tag: "Idea Showcase",
		title: "Presentasi Ide dan Solusi Digital",
		caption:
			"Visual event membantu menegaskan bahwa cabang ini tetap kompetitif sekaligus product-oriented.",
	},
	{
		src: "/assets/inacomp/home/empat.jpg",
		alt: "Dokumentasi peserta dan aktivitas event dalam penyelenggaraan INACOMP.",
		size: "square",
		tag: "Event Flow",
		title: "Aktivitas Event yang Tertata",
		caption:
			"Dokumentasi ini menjaga rasa acara tetap profesional, hidup, dan mudah dipercaya.",
	},
	{
		src: "/assets/inacomp/home/tujuh.jpg",
		alt: "Panggung dan dokumentasi suasana acara yang memperkuat identitas kompetisi nasional.",
		size: "square",
		tag: "National Scale",
		title: "Identitas Kompetisi Nasional",
		caption:
			"Komposisi visual panggung dan dokumentasi memperkuat positioning INACOMP sebagai event besar.",
	},
];
