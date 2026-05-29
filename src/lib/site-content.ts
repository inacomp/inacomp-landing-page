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
		date: "18 Mei – 14 Juni 2026",
		title: "Pendaftaran Peserta Perlombaan",
		note: "Pendaftaran dibuka untuk seluruh peserta dari dua Kategori Lomba.",
	},
	{
		date: "16 Juni 2026",
		title: "Technical Meeting Penyisihan",
		note: "Panitia menjelaskan alur pelaksanaan, ketentuan umum, dan teknis babak awal.",
	},
	{
		date: "17 Juni 2026",
		title: "Penyisihan Competitive Programming",
		note: "Peserta Competitive Programming mengikuti babak penyisihan sesuai format lomba.",
	},
	{
		date: "17 Juni 2026",
		title: "Penyisihan UI/UX",
		note: "Peserta UI/UX masuk ke fase seleksi awal berdasarkan berkas dan karya yang dikumpulkan.",
	},
	{
		date: "19 Juni 2026",
		title: "Pengumuman Finalis Perlombaan",
		note: "Finalis resmi dari kedua cabang diumumkan oleh panitia.",
	},
	{
		date: "24 Juni 2026",
		title: "Technical Meeting Final",
		note: "Finalis mengikuti pengarahan teknis menjelang babak akhir.",
	},
	{
		date: "27 Juni 2026",
		title: "Final Perlombaan",
		note: "Babak final menjadi puncak penilaian dan presentasi karya terbaik.",
	},
	{
		date: "4 Juli 2026",
		title: "Pengumuman Juara",
		note: "Pemenang resmi INACOMP 2.0 diumumkan kepada publik.",
	},
];

export const cpTimeline = [
	{
		date: "18 Mei – 14 Juni 2026",
		title: "Pendaftaran Competitive Programming",
		note: "Pendaftaran dibuka untuk peserta yang memilih cabang Competitive Programming.",
	},
	{
		date: "16 Juni 2026",
		title: "Technical Meeting Penyisihan Competitive Programming",
		note: "Panitia menjelaskan alur teknis dan kesiapan peserta sebelum babak penyisihan.",
	},
	{
		date: "17 Juni 2026",
		title: "Penyisihan Competitive Programming",
		note: "Peserta mengikuti babak penyisihan sesuai format dan tantangan cabang Competitive Programming.",
	},
	{
		date: "19 Juni 2026",
		title: "Pengumuman Finalis Competitive Programming",
		note: "Finalis cabang Competitive Programming diumumkan secara resmi oleh panitia.",
	},
	{
		date: "24 Juni 2026",
		title: "Technical Meeting Final Competitive Programming",
		note: "Finalis Competitive Programming menerima pengarahan teknis untuk babak akhir.",
	},
	{
		date: "27 Juni 2026",
		title: "Final Competitive Programming",
		note: "Babak final menjadi penentu performa terbaik peserta Competitive Programming.",
	},
	{
		date: "4 Juli 2026",
		title: "Pengumuman Juara Competitive Programming",
		note: "Pemenang cabang Competitive Programming diumumkan bersama hasil akhir INACOMP 2.0.",
	},
];

export const uiuxTimeline = [
	{
		date: "18 Mei – 14 Juni 2026",
		title: "Registrasi Tim dan Fase Kerja Awal UI/UX",
		note: "Selama periode ini peserta mendaftar sekaligus menyiapkan proposal PDF dan prototype atau mockup.",
	},
	{
		date: "16 Juni 2026",
		title: "Technical Meeting Penyisihan UI/UX Design",
		note: "Panitia menjelaskan alur seleksi awal, ketentuan berkas, dan kesiapan menuju penilaian juri.",
	},
	{
		date: "17 Juni 2026",
		title: "Penyisihan UI/UX Design",
		note: "Babak penyisihan UI/UX berlangsung melalui penilaian proposal dan prototype yang telah dikumpulkan peserta.",
	},
	{
		date: "19 Juni 2026",
		title: "Pengumuman Finalis UI/UX Design",
		note: "Finalis cabang UI/UX Design diumumkan pada tanggal resmi yang sama dengan cabang lain.",
	},
	{
		date: "24 Juni 2026",
		title: "Technical Meeting Final UI/UX Design",
		note: "Finalis UI/UX Design menerima briefing untuk tahap presentasi final.",
	},
	{
		date: "27 Juni 2026",
		title: "Final Presentation UI/UX Design",
		note: "Finalis mempresentasikan solusi, riset, dan prototype mereka di hadapan juri.",
	},
	{
		date: "4 Juli 2026",
		title: "Pengumuman Juara UI/UX Design",
		note: "Pemenang cabang UI/UX Design diumumkan pada penutupan rangkaian INACOMP 2.0.",
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
		question: "Track Competitive Programming ini cocok untuk siapa?",
		answer:
			"Track ini cocok untuk pelajar yang senang menyelesaikan soal algoritma, berpikir sistematis, dan bekerja tenang di bawah tekanan waktu.",
	},
	{
		question: "Apa fokus utama penilaian di Competitive Programming?",
		answer:
			"Penilaian berfokus pada ketepatan jawaban, kualitas strategi penyelesaian, efisiensi pendekatan, dan konsistensi peserta sepanjang babak kompetisi.",
	},
	{
		question: "Apakah peserta harus sudah berpengalaman ikut lomba coding?",
		answer:
			"Tidak harus. Peserta yang memiliki dasar algoritma dan mau berlatih dengan serius tetap memiliki peluang untuk tampil baik.",
	},
	{
		question: "Kapan peserta mendapat informasi teknis lebih rinci?",
		answer:
			"Informasi teknis lengkap akan dijelaskan panitia melalui technical meeting dan kanal resmi kompetisi.",
	},
];

export const uiuxFaqItems: FaqItem[] = [
	{
		question: "Apa yang harus dibuat peserta UI/UX Design?",
		answer:
			"Peserta menyiapkan desain UI, laporan riset UX dalam proposal PDF, serta prototype atau mockup yang dapat ditinjau juri.",
	},
	{
		question: "Berapa jumlah maksimal anggota tim UI/UX?",
		answer:
			"Satu tim terdiri dari maksimal 3 orang, seluruh anggota harus berasal dari sekolah yang sama, dan setiap peserta hanya boleh terdaftar di satu tim.",
	},
	{
		question: "Apa yang harus dikumpulkan pada tahap seleksi awal?",
		answer:
			"Peserta mendaftar, lalu mengumpulkan proposal PDF dan tautan prototype atau mockup, misalnya melalui Figma atau platform serupa.",
	},
	{
		question: "Bagaimana alur penentuan finalis UI/UX?",
		answer:
			"Panitia dan juri menilai berkas awal peserta, memilih finalis, lalu finalis melanjutkan ke tahap presentasi sebelum penentuan pemenang.",
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
