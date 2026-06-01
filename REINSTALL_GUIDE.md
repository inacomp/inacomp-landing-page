# Cara Menginstall Kembali Dependencies

Karena folder `node_modules` dan file build telah dihapus untuk menghemat ruang, Anda perlu menginstallnya kembali setelah memindahkan project ke SSD eksternal.

## 1. Project Inacomp Frontend (`inacomp-fe`)
Buka terminal di folder `inacomp-fe`, lalu jalankan:
```bash
npm install
```

## 2. Project Inacomp Backend (di dalam `inacomp-fe`)
Buka terminal di folder `inacomp-fe/backend`, lalu jalankan:
```bash
npm install
```
*Catatan: Pastikan database (Prisma) sudah dikonfigurasi jika ingin menjalankan server.*

## 3. Project Landing Page (`landing-page`)
Buka terminal di folder `landing-page`, lalu jalankan:
```bash
npm install
```

---

### Perintah Cepat (Running the Apps)
Setelah install selesai, Anda bisa menjalankan project dengan:
- **Frontend/Landing Page**: `npm run dev`
- **Backend**: `npm run start:dev`
