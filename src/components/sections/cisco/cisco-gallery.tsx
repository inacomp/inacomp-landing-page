import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkeletonBlock } from "@/components/ui/skeleton-block";

export function CiscoGallery() {
  return (
    <section className="section-shell">
      <Container>
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Galeri Cisco Networking INACOMP 1.0"
            title="Dokumentasi cabang networking tahun lalu ditampilkan sebagai modern skeleton gallery."
            description="Galeri ini menjaga ritme visual halaman tetap hidup dengan placeholder bernuansa dokumentasi event, tanpa menggunakan foto asli."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="surface-card overflow-hidden bg-gradient-to-br from-white to-cyan-50/50 p-4"
              >
                <SkeletonBlock className="aspect-[16/10] w-full border-0" />
                <div className="mt-4 space-y-3">
                  <SkeletonBlock className="h-4 w-2/3 rounded-full border-0" />
                  <SkeletonBlock className="h-4 w-1/2 rounded-full border-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
