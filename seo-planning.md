Saya ingin kamu bertindak sebagai **senior Next.js SEO engineer** untuk website
landing page INACOMP 2.0.

Tugasmu adalah mengoptimalkan SEO untuk website ini pada 3 halaman:

- Home
- Competitive Programming
- Cisco Networking

## Tujuan

Saya ingin website ini lebih siap untuk:

- SEO on-page
- indexing Google
- social sharing
- preview link yang rapi
- struktur metadata yang benar untuk Next.js App Router

## Konteks website

INACOMP 2.0 adalah Informatics National Competition, kompetisi nasional untuk
siswa/i SMA/SMK/sederajat di bidang:

- Competitive Programming
- Cisco Networking

Diselenggarakan oleh: Badan Eksekutif Mahasiswa Prodi Pendidikan Teknik
Informatika dan Komputer Universitas Negeri Jakarta.

## Yang harus kamu lakukan

Untuk halaman yang sedang dikerjakan, lakukan optimasi SEO berikut:

1. Buat metadata yang proper untuk Next.js App Router
   - `title`
   - `description`
   - `keywords`
   - `metadataBase` jika perlu
   - `openGraph`
   - `twitter`
   - `alternates` canonical jika relevan

2. Pastikan heading structure rapi
   - hanya 1 `h1` utama
   - `h2` dan `h3` dipakai dengan struktur yang masuk akal
   - jangan ada heading yang sekadar dekoratif tapi membingungkan SEO

3. Perbaiki copy kecil yang terlalu generik bila perlu agar lebih relevan untuk
   SEO, tanpa merusak desain

4. Tambahkan structured data / JSON-LD yang relevan bila cocok
   - `WebSite`
   - `Organization`
   - `Event`
   - `BreadcrumbList`
   - atau schema lain yang memang relevan Jangan berlebihan; pakai yang masuk
     akal untuk landing page kompetisi.

5. Pastikan halaman punya:
   - title unik
   - meta description unik
   - OG title dan OG description yang layak
   - canonical yang tepat
   - slug yang rapi

6. Jangan melakukan keyword stuffing. Tulis SEO yang natural, relevan, dan tetap
   enak dibaca manusia.

## Fokus teknis

- Project menggunakan Next.js App Router
- Implementasi SEO harus mengikuti pola yang cocok untuk App Router
- Gunakan `export const metadata` atau `generateMetadata` bila memang perlu
- Jika perlu structured data, implementasikan dengan aman di halaman/layout yang
  tepat

## Output yang saya inginkan

1. jelaskan singkat strategi SEO untuk halaman ini
2. tampilkan file mana yang perlu diubah
3. implementasikan perubahan SEO
4. jika ada metadata/copy yang perlu disesuaikan, lakukan dengan aman
5. jangan ubah desain visual secara besar

## Batasan

- jangan mengubah layout besar
- jangan mengubah struktur UI besar
- fokus pada SEO teknis dan on-page
- pertahankan tone brand INACOMP
- tetap responsive dan aman untuk build

Setelah itu langsung kerjakan halaman yang saya minta.
