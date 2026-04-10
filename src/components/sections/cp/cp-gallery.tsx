import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkeletonBlock } from "@/components/ui/skeleton-block";

export function CPGallery() {
  return (
    <section className="section-shell">
      <Container>
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Galeri CP INACOMP 1.0"
            title="Dokumentasi Competitive Programming tahun lalu ditampilkan sebagai placeholder gallery yang rapi."
            description="Area ini menjaga ritme visual halaman tetap hidup tanpa menggunakan foto asli. Seluruh dokumentasi ditampilkan sebagai skeleton/placeholder yang siap diganti di tahap berikutnya."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="surface-card overflow-hidden p-4">
                <SkeletonBlock className="aspect-[16/10] w-full" />
                <div className="mt-4 space-y-3">
                  <SkeletonBlock className="h-4 w-2/3 rounded-full" />
                  <SkeletonBlock className="h-4 w-1/2 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
